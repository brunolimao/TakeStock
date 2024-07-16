const { create_stock, delete_stock, get_stock, update_stock, get_products_from_stock, get_users_from_stock, delete_user_from_stock, get_stock_owner } = require('../Stocks');
const Stock = require('../../models/Stock');
const Product = require('../../models/Product');
const User_Stock = require('../../models/UserStock');
const User = require('../../models/User');

jest.mock('../../models/Stock', () => {
  return {
    create: jest.fn(),
    destroy: jest.fn(),
    findByPk: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
  };
});

jest.mock('../../models/Product', () => {
  return {
    findAll: jest.fn()
  }
});

jest.mock('../../models/UserStock', () => {
  return {
    findAll: jest.fn(),
    destroy: jest.fn(),
  }
});

jest.mock('../../models/User', () => {
  return {
    findOne: jest.fn(),
    findAll: jest.fn()
  }
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
      static findOne() {}
    },
  };
  return SequelizeMock;
})

describe('Stocks Repository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('create_stock should call Stock.create with the correct stock data', async () => {
    const stockData = { name: 'Test Stock', description: 'Test Description', category: 'Test Category' };
    await create_stock(stockData);
    expect(Stock.create).toHaveBeenCalledWith(stockData);
  });

  test('delete_stock should call Stock.destroy with the correct stock id', async () => {
    const stockId = 1;
    await delete_stock(stockId);
    expect(Stock.destroy).toHaveBeenCalledWith({ where: { id: stockId } });
  });

  test('get_stock should return the stock object for a given stock id', async () => {
    const mockStock = { id: 1, name: 'Test Stock' };
    Stock.findByPk.mockResolvedValue(mockStock);
    const stock = await get_stock(1);
    expect(stock).toEqual(mockStock);
    expect(Stock.findByPk).toHaveBeenCalledWith(1);
  });

  test('get_stock_owner should return the owner of a stock', async () => {
    const mockStock = { UserId: 1 };
    const mockUser = { name: 'John Doe', email: 'john.doe@example.com' };
    Stock.findOne.mockResolvedValue(mockStock);
    User.findOne.mockResolvedValue(mockUser);
    const owner = await get_stock_owner(1);
    expect(owner).toEqual(mockUser);
    expect(Stock.findOne).toHaveBeenCalledWith({ attributes: ['UserId'], raw: true, where: { id: 1 } });
    expect(User.findOne).toHaveBeenCalledWith({ attributes: ['name', 'email'], raw: true, where: { id: 1 } });
  });

  test('get_products_from_stock should return products associated with a stock', async () => {
    const mockProducts = [{ id: 1, name: 'Product 1', price: 10 }, { id: 2, name: 'Product 2', price: 20 }];
    Product.findAll.mockResolvedValue(mockProducts);
    const products = await get_products_from_stock(1);
    expect(products).toEqual(mockProducts);
    expect(Product.findAll).toHaveBeenCalledWith({ raw: true, where: { StockId: 1 } });
  });

  test('update_stock should update the stock with the provided data', async () => {
    const stockData = { id: 1, name: 'Updated Stock', description: 'Updated Description', category: 'Updated Category' };
    await update_stock(stockData);
    expect(Stock.update).toHaveBeenCalledWith(
      { name: stockData.name, description: stockData.description, category: stockData.category },
      { where: { id: stockData.id } }
    );
  });

  test('get_users_from_stock should return users associated with a stock', async () => {
    const mockUserIds = [{ UserId: 1 }, { UserId: 2 }];
    const mockUsers = [{ id: 1, name: 'User 1', email: 'user1@example.com' }, { id: 2, name: 'User 2', email: 'user2@example.com' }];
    User_Stock.findAll.mockResolvedValue(mockUserIds);
    User.findAll.mockResolvedValue(mockUsers);
    const users = await get_users_from_stock(1);
    expect(users).toEqual(mockUsers);
    expect(User_Stock.findAll).toHaveBeenCalledWith({ attributes: ['UserId'], raw: true, where: { StockId: 1 } });
    expect(User.findAll).toHaveBeenCalledWith({ attributes: ['name', 'email'], raw: true, where: { id: [1, 2] } });
  });

  test('delete_user_from_stock should delete the user from the stock', async () => {
    const id_stock = 1;
    const id_user = 10;
    await delete_user_from_stock(id_stock, id_user);
    expect(User_Stock.destroy).toHaveBeenCalledWith({
      where: { StockId: id_stock, UserId: id_user }
    });
  });
});