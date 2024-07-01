const express = require('express');
const bcrypt = require('bcrypt')
const {create_user, get_perfil} = require('../adaptors/Users')
const router = express.Router();

router.post('/register' , async function(req , res , next){
  try{
    // name, email, password
    const userData = req.body;
    const saltRounds = 10;
    userData.password = await bcrypt.hash(userData.password, saltRounds)
    await create_user(req, res, next, userData)
    res.sendStatus(200)
  } catch(error){
    res.send('Erro!')
  }
});

router.get('/perfil' , async function(req , res , next){
  try{
    const user = await get_perfil(req, res, next)
    res.send({user:user})
  } catch(error){
    res.send('Erro!')
  }
});

module.exports = router;