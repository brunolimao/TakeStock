const Stock = require("../../models/Stock")
const Product = require("../../models/Product")
const User_Stock = require("../../models/UserStock")
const User = require("../../models/User")

async function get_stock(req, res, next, id_stock){
  const stock = await Stock.findByPk(id_stock)
  return stock
}

async function get_stock_owner(req, res, next, id_stock){
  const stock = await Stock.findOne({attributes: ['UserId'], raw: true, where:{id: id_stock}})
  const id_user = stock.UserId
  const user = await User.findOne({attributes: ['name', 'email'], raw: true, where:{id: id_user}})
  return user
}

async function get_products_from_stock(req, res, next, id_stock){
  const products = await Product.findAll({where:{
    StockId: id_stock
  }})
  return products
}

async function update_stock(req, res, next, stock){
  await Stock.update({
    name: stock.name,
    description: stock.description,
    category: stock.category,
  } ,{where:{id: stock.id}})
}

async function get_users_from_stock(req, res, next, id_stock){
  let id_users = await User_Stock.findAll({attributes: ['UserId'], raw: true, where:{StockId: id_stock}})
  id_users = id_users.map(obj => obj.UserId);
  const users = await User.findAll({attributes: ['name', 'email'], raw: true, where:{id: id_users}})
  return users
}

async function delete_user_from_stock(req, res, next, id_stock, id_user){
  await User_Stock.destroy({where:{StockId: id_stock, UserId:id_user}})
}

module.exports = {get_stock, update_stock, get_products_from_stock, get_users_from_stock, delete_user_from_stock, get_stock_owner}