const { create_user, get_perfil, findByEmail, signToken, verifyToken, getIdByEmail } = require('../Users');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');

jest.mock('../../models/User', () => {
  return {
    create: jest.fn(),
    findOne: jest.fn()
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
      static findOne() {}
      static create() {}
    },
  };
  return SequelizeMock;
})

jest.mock('jsonwebtoken');

describe('Users Repository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('create_user should call User.create with the correct user', async () => {
    const user = { email: 'test@example.com', name: 'Test User', password: 'password123' };
    await create_user(user);
    expect(User.create).toHaveBeenCalledWith(user);
  });

  test('get_perfil should return the correct user profile', async () => {
    const userProfile = { name: 'Test User', email: 'test@example.com' };
    User.findOne.mockResolvedValue(userProfile);
    const result = await get_perfil(1);
    expect(User.findOne).toHaveBeenCalledWith({ attributes: ['name', 'email'], where: { id: 1 } });
    expect(result).toEqual(userProfile);
  });

  test('getIdByEmail should return the correct user id', async () => {
    const userId = { id: 1 };
    User.findOne.mockResolvedValue(userId);
    const result = await getIdByEmail('test@example.com');
    expect(User.findOne).toHaveBeenCalledWith({ attributes: ['id'], raw: true, where: { email: 'test@example.com' } });
    expect(result).toEqual(userId);
  });

  test('findByEmail should return the correct user', async () => {
    const user = { id: 1, email: 'test@example.com' };
    User.findOne.mockResolvedValue(user);
    const result = await findByEmail('test@example.com');
    expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
    expect(result).toEqual(user);
  });

  test('signToken should return a signed token', () => {
    const payload = { id: 1, email: 'test@example.com' };
    const token = 'signedToken';
    jwt.sign.mockReturnValue(token);
    const result = signToken(payload, '1h');
    expect(jwt.sign).toHaveBeenCalledWith(payload, '67c0fbaeee22ae50902039bd1523c094dc27b4bce6ef664a939ac3bb2dbc780d', { expiresIn: '1h' });
    expect(result).toBe(token);
  });

  test('verifyToken should return the verified user', () => {
    const token = 'signedToken';
    const user = { id: 1, email: 'test@example.com' };
    jwt.verify.mockReturnValue(user);
    const result = verifyToken(token);
    expect(jwt.verify).toHaveBeenCalledWith(token, '67c0fbaeee22ae50902039bd1523c094dc27b4bce6ef664a939ac3bb2dbc780d');
    expect(result).toEqual(user);
  });
});
