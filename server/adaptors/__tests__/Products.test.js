const { create_product, get_product, update_product, delete_product, find_by_category, products_mean_price, products_category, product_most_valuable } = require('../Products');
const Product = require('../../models/Product');
const { Op } = require('sequelize');

jest.mock('../../models/Product', () => {
  return {
    create: jest.fn(),
    destroy: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn()
  };
});

jest.mock('sequelize', () => {
  const actualSequelize = jest.requireActual('sequelize');
  const SequelizeMock = {
    Sequelize: jest.fn(),
    DataTypes: actualSequelize.DataTypes,
    Model: class MockModel {
      static init() {}
      static sync() {}
      static findByPk() {}
      static create() {}
      static destroy() {}
      static findAll() {}
      static update() {}
    },
    Op: {
      like: actualSequelize.Op.like
    }
  };
  return SequelizeMock;
})

describe('Products Repository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('create_product should call Product.create with the correct product', async () => {
    const product = { name: 'Test Product', description: 'Product to Test', category: 'Tests', number: 10, price: '30', StockId: 1 };
    await create_product(product);
    expect(Product.create).toHaveBeenCalledWith(product);
  });

  test('delete_product should call Product.destroy with the correct info', async () => {
    const id = 1;
    await delete_product(id);
    expect(Product.destroy).toHaveBeenCalledWith({ where:{ id } });
  });

  test('get_product should fetch a product by id', async () => {
    const mockProduct = { name: 'Test Product', description: 'Product to Test', category: 'Tests', number: 10, price: '30', StockId: 1 };
    Product.findByPk.mockResolvedValue(mockProduct);
    const product = await get_product(1);
    expect(product).toEqual(mockProduct);
    expect(Product.findByPk).toHaveBeenCalledWith(1);
  });

  test('find_by_category should find products by category and StockId', async () => {
    const mockProducts = [{ name: 'Test Product 1', description: 'Product to Test', category: 'CategoryA', number: 10, price: '30' }, { name: 'Test Product 2', description: 'Product to Test', category: 'CategoryB', number: 5, price: '20', StockId: 1 }];
    Product.findAll.mockResolvedValue(mockProducts);
    const products = await find_by_category('Category', 1);
    expect(products).toEqual(mockProducts);
    expect(Product.findAll).toHaveBeenCalledWith({
      where: {
        category: { [Op.like]: '%Category%' },
        StockId: 1,
      },
    });
  });

  test('update_product should call Product.update with the correct product data', async () => {
    const product = { id: 1, name: 'Updated Product', description: 'Updated Description', category: 'Updated Category', number: 5, price: 100 };
  
    await update_product(product);
    expect(Product.update).toHaveBeenCalledWith({
      name: product.name,
      description: product.description,
      category: product.category,
      number: product.number,
      price: product.price
    }, { where: { id: product.id } });
  });

  test('products_mean_price should return the average price of products in a given StockId', async () => {
    const mockProducts = [{ price: 10 }, { price: 20 }, { price: 30 }];
    Product.findAll.mockResolvedValue(mockProducts);
  
    const averagePrice = await products_mean_price(1);
    expect(averagePrice).toBe(20);
    expect(Product.findAll).toHaveBeenCalledWith({
      attributes: ['price'],
      raw: true,
      where: { StockId: 1 }
    });
  });
  
  test('products_mean_price should return 0 if no products are found', async () => {
    Product.findAll.mockResolvedValue([]);
  
    const averagePrice = await products_mean_price(1);
    expect(averagePrice).toBe(0);
  });

  test('products_category should return a list of categories with product counts for a given StockId', async () => {
    const mockProducts = [
      { category: 'CategoryA' },
      { category: 'CategoryB' },
      { category: 'CategoryA' }
    ];
    Product.findAll.mockResolvedValue(mockProducts);
  
    const categories = await products_category(1);
    expect(categories).toEqual([
      { category: 'CategoryA', number: 2 },
      { category: 'CategoryB', number: 1 }
    ]);
    expect(Product.findAll).toHaveBeenCalledWith({
      attributes: ['category'],
      raw: true,
      where: { StockId: 1 }
    });
  });

  test('product_most_valuable should return the name of the most valuable product in a given StockId', async () => {
    const mockProducts = [
      { price: 10, number: 2, name: 'Product1' },
      { price: 20, number: 1, name: 'Product2' },
      { price: 15, number: 3, name: 'Product3' }
    ];
    Product.findAll.mockResolvedValue(mockProducts);
  
    const mostValuableProduct = await product_most_valuable(1);
    expect(mostValuableProduct).toBe('Product3');
    expect(Product.findAll).toHaveBeenCalledWith({
      attributes: ['price', 'number', 'name'],
      raw: true,
      where: { StockId: 1 }
    });
  });
  
  test('product_most_valuable should return an empty string if no products are found', async () => {
    Product.findAll.mockResolvedValue([]);
  
    const mostValuableProduct = await product_most_valuable(1);
    expect(mostValuableProduct).toBe('');
  });
});
