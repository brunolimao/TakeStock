const express = require('express');
const router = express.Router();
const {get_stock, update_stock, get_products_from_stock, get_users_from_stock, delete_user_from_stock, get_stock_owner} = require('../adaptors/Stocks');
const { ensureAuth } = require('../middlewares/auth');

router.get('/', ensureAuth, async function(req , res , next){
  try{
    const id_stock = req.body.id
    const stock = await get_stock(req, res, next, id_stock)
    const products = await get_products_from_stock(req, res, next, id_stock)
    const users = await get_users_from_stock(req, res, next, id_stock)
    const owner = await get_stock_owner(req, res, next, id_stock)
    res.send({stock: stock, products: products, users: users, owner: owner})
  } catch(error){
    res.send("Erro!")
  }
});

router.post('/update', ensureAuth, async function(req , res , next){
  try{
    const stock = req.body
    await update_stock(req, res, next, stock)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
});

router.get('/users', ensureAuth, async function(req , res , next){
  try{
    const id_stock = req.body.id
    const users = await get_users_from_stock(req, res, next, id_stock)
    res.send({users: users})
  } catch(error){
    res.send("Erro!")
  }
});

router.delete('/user', ensureAuth, async function(req , res , next){
  try{
    const id_stock = req.body.id_stock
    const id_user = req.body.id_user
    await delete_user_from_stock(req, res, next, id_stock, id_user)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
})

module.exports = router;