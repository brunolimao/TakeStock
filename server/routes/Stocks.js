const express = require('express');
const router = express.Router();
const {get_stock, update_stock, get_products_from_stock, get_users_from_stock, delete_user_from_stock, get_stock_owner, create_stock, delete_stock, get_all_stocks} = require('../adaptors/Stocks');
const { ensureAuth } = require('../middlewares/auth');

router.post('/create', ensureAuth, async function(req , res , next){
  try{
    // name, description, category
    req.body.UserId = req.user.id
    const stockData = req.body;
    await create_stock(stockData)
    res.sendStatus(200)
  } catch(error){
    res.send('Erro!')
  }
});

router.get('/', ensureAuth, async function(req , res , next){
  try{
    const id_stock = req.query.id
    const stock = await get_stock(id_stock)
    const products = await get_products_from_stock(id_stock)
    const users = await get_users_from_stock(id_stock)
    const owner = await get_stock_owner(id_stock)
    res.send({stock: stock, products: products, users: users, owner: owner})
  } catch(error){
    res.send("Erro!")
  }
});

router.get('/all', ensureAuth, async function(req , res , next){
  try{
    const id_user = req.query.id
    const stocks = await get_all_stocks(id_user)
    res.send({stocks: stocks})
  } catch(error){
    res.send("Erro!")
  }
});

router.post('/update', ensureAuth, async function(req , res , next){
  try{
    const stock = req.body
    await update_stock(stock)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
});

router.delete('/delete', ensureAuth, async function(req , res , next){
  try{
    const id_stock = req.body.id_stock
    await delete_stock(id_stock)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
});

router.get('/users', ensureAuth, async function(req , res , next){
  try{
    const id_stock = req.body.id
    const users = await get_users_from_stock(id_stock)
    res.send({users: users})
  } catch(error){
    res.send("Erro!")
  }
});

router.delete('/user', ensureAuth, async function(req , res , next){
  try{
    const id_stock = req.body.id_stock
    const id_user = req.body.id_user
    await delete_user_from_stock(id_user)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
})

module.exports = router;