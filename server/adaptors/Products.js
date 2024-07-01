const Product = require("../models/Product")

async function get_product(req, res, next, id_product){
  const product = await Product.findByPk(id_product)
  return product
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

module.exports = {get_product, update_product,}