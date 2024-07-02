const express = require('express');
const bcrypt = require('bcrypt')
const {create_user, get_perfil, findByEmail, signToken} = require('../adaptors/Users');
const { ensureAuth } = require('../middlewares/auth');
const router = express.Router();

router.post('/register', async function(req , res , next){
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

router.get('/perfil', ensureAuth, async function(req , res , next){
  try{
    const user = await get_perfil(req, res, next)
    res.send({user:user})
  } catch(error){
    res.send('Erro!')
  }
});

router.post('/login', async function(req, res, next) {
  const { email, password } = req.body
  try {
    const user = await findByEmail(email)
    if (!user) return res.status(404).json({ message: 'E-mail e/ou senha incorretos!'})

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).send({ error: 'E-mail e/ou senha incorretos!'})

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email
    };

    const token = signToken(payload, "1h")

    res.cookie("token", token, {
      httpOnly: true
    })

    res.sendStatus(200)

  } catch (error) {
    res.send('Erro!')
  }
})

router.get('/logout', ensureAuth, function(req,res,nex){
  res.clearCookie("token");
  res.send('Deslogado com sucesso.');
});

module.exports = router;