const Product = require("../models/Product")
const { Op } = require('sequelize');

async function create_product(product) {
  await Product.create(product)
}

async function delete_product(id) {
  await Product.destroy({where:{id}})
}

async function get_product(req, res, next, id_product){
  const product = await Product.findByPk(id_product)
  return product
}

async function find_by_category(category, StockId) {
  const products = await Product.findAll({where: {category: {[Op.like]: `%${category}%`}, StockId}})
  return products
}

async function update_product(req, res, next, product){
  await Product.update({
    name: product.name,
    description: product.description,
    category: product.category,
    number: product.number,
    price: product.price,
  } ,{where:{id: product.id}})
}

module.exports = {create_product, get_product, update_product, delete_product, find_by_category}