const express = require('express');
const router = express.Router();
const {get_product, update_product} = require('../../adaptors/product/Products')

router.get('/' , async function(req , res , next){
  try{
    const id_stock = req.body.id
    const stock = await get_stock(req, res, next, id_stock)
    res.send({stock: stock})
  } catch(error){
    res.send("Erro!")
  }
});

router.post('/update' , async function(req , res , next){
  try{
    const stock = req.body
    await update_stock(req, res, next, stock)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
});

module.exports = router;