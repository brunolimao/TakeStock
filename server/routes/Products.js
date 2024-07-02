const express = require('express');
const router = express.Router();
const {get_product, update_product} = require('../adaptors/Products');
const { ensureAuth } = require('../middlewares/auth');

router.get('/', ensureAuth, async function(req , res , next){
  try{
    const id_product = req.body.id
    const product = await get_product(req, res, next, id_product)
    res.send({product: product})
  } catch(error){
    res.send("Erro!")
  }
});

router.post('/update', ensureAuth, async function(req , res , next){
  try{
    const product = req.body
    await update_product(req, res, next, product)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
});

module.exports = router;