const express = require('express');
const router = express.Router();
const {reject_invite} = require('../adaptors/Invites');
const { ensureAuth } = require('../middlewares/auth');

router.delete('/reject', ensureAuth, async function(req , res , next){
  try{
    const id_stock = req.body.id_stock
    const id_user = req.body.id_user
    await reject_invite(req, res, next, id_stock, id_user)
    res.sendStatus(200)
  } catch(error){
    res.send("Erro!")
  }
});

module.exports = router;