const { reject_invite, create_invite, accept_invite } = require('../Invites');
const Invite = require('../../models/Invite');
const User_Stock = require('../../models/UserStock')

jest.mock('../../models/Invite', () => {
  return {
    create: jest.fn(),
    destroy: jest.fn()
  };
});

jest.mock('../../models/UserStock', () => {
  return {
    create: jest.fn()
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
      static destroy() {}
      static create() {}
    },
  };
  return SequelizeMock;
})

describe('Invites Repository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('create_invite should call Invite.create with the correct invite', async () => {
    const invite = { UserId: 1, StockId: 1 };
    await create_invite(invite);
    expect(Invite.create).toHaveBeenCalledWith(invite);
  });

  test('accept_invite should call User_Stock.create and Invite.destroy with the correct info', async () => {
    const UserId = 1
    const StockId = 1
    const userStock = { UserId, StockId }
    await accept_invite(UserId, StockId)
    expect(User_Stock.create).toHaveBeenCalledWith(userStock);
    expect(Invite.destroy).toHaveBeenCalledWith({ where: { UserId, StockId } });
  });

  test('reject_invite should call Invite.destroy with the correct info', async () => {
    const UserId = 1
    const StockId = 1
    await reject_invite(UserId, StockId)
    expect(Invite.destroy).toHaveBeenCalledWith({ where: { UserId, StockId } });
  });
});