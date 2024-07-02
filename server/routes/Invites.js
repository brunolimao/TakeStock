const express = require('express');
const router = express.Router();
const {reject_invite, create_invite, accept_invite} = require('../adaptors/Invites');
const { ensureAuth } = require('../middlewares/auth');
const { getIdByEmail } = require('../adaptors/Users');

router.post('/create', ensureAuth, async function(req , res , next){
  try{
    // email, StockId
    const {email, stock_id} = req.body
    const user_id = await getIdByEmail(email)
    const UserId = user_id.id
    const inviteData = {"UserId": UserId ,"StockId": stock_id}
    await create_invite(inviteData)
    res.sendStatus(200)
  } catch(error){
    res.send('Erro!')
  }
});

router.post('/accept', ensureAuth, async function(req , res , next){
  try{
    // email, StockId
    req.body.UserId = req.user.id
    const {UserId, stock_id} = req.body
    await accept_invite(UserId, stock_id)
    res.sendStatus(200)
  } catch(error){
    res.send('Erro!')
  }
});

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