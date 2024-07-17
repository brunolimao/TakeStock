const express = require('express');
const router = express.Router();
const {get_product, update_product, create_product, delete_product, find_by_category, products_mean_price, products_category, product_most_valuable} = require('../adaptors/Products');
const { ensureAuth } = require('../middlewares/auth');

router.post('/create', ensureAuth, async function(req , res , next){
  try{
    // name, description, category, number, price, StockId
    const productData = req.body;
    await create_product(productData)
    res.sendStatus(200)
  } catch(error){
    res.send('Erro!')
  }
});

router.get('/', ensureAuth, async function(req , res , next){
  try{
    const id_product = req.query.id
    const product = await get_product(id_product)
    res.send({product: product})
  } catch(error){
    res.send("Erro!")
  }
});

router.get('/filter', ensureAuth, async function(req , res , next) {
  try {
    const {category, StockId} = req.body
    const products = await find_by_category(category, StockId)
    res.send({products: products})
  } catch (error) {
    res.send("Erro!")
  }
});

router.get('/statistics', ensureAuth, async function(req , res , next) {
  try {
    const StockId = req.body.StockId
    const mean_price = await products_mean_price(StockId)
    const most_category = await products_category(StockId)
    const most_valuable = await product_most_valuable (StockId)
    res.send({mean_price: mean_price, most_category: most_category, most_valuable: most_valuable})
  } catch (error) {
    res.send("Erro!")
  }
});

router.post('/update', ensureAuth, async function(req , res , next){
  try{
    const product = req.body
    await update_product(product)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
});

router.delete('/delete', ensureAuth, async function(req , res , next){
  try{
    const id_product = req.query.id_product
    await delete_product(id_product)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
});

module.exports = router;