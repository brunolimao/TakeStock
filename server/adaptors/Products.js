const Product = require("../models/Product")
const { Op } = require('sequelize');

async function create_product(product) {
  await Product.create(product)
}

async function delete_product(id) {
  await Product.destroy({where:{id}})
}

async function get_product(id_product){
  const product = await Product.findByPk(id_product)
  return product
}

async function find_by_category(category, StockId) {
  const products = await Product.findAll({where: {category: {[Op.like]: `%${category}%`}, StockId}})
  return products
}

async function update_product(product){
  await Product.update({
    name: product.name,
    description: product.description,
    category: product.category,
    number: product.number,
    price: product.price,
  } ,{where:{id: product.id}})
}

async function products_mean_price(StockId){
  const products = await Product.findAll({attributes: ['price'], raw: true, where:{StockId}})
  let total = 0
  for(let i = 0; i < products.length; i++){
    total += products[i].price
  }
  let result = 0;
  if (products.length > 0){
    result = total/products.length
  }

  return result
}

async function products_category(StockId){
  const products = await Product.findAll({attributes: ['category'], raw: true, where:{StockId}})

  let categories = products.map(obj => obj.category);
  categories = [...new Set(categories)]  
  for(let i = 0; i < categories.length; i++){
    let total_categoria = 0
    for(let j = 0; j < products.length; j++){
      if(products[j].category == categories[i]){
        total_categoria += 1
      }
    }
    categories[i] = {"category": categories[i], 'number': total_categoria}
  }

  return categories
}

async function product_most_valuable(StockId){
  const products = await Product.findAll({attributes: ['price', "number", 'name'], raw: true, where:{StockId}})

  let value = 0 
  let value_product = ''
  if(products.length > 0){
    for(let i = 0; i < products.length; i++){
      if(products[i].price * products[i].number > value){
        value_product = products[i].name
        value = products[i].price * products[i].number
      }
    }
  }
  return value_product
}


module.exports = {create_product, get_product, update_product, delete_product, find_by_category, products_mean_price, products_category, product_most_valuable}