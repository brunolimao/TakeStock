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
});
