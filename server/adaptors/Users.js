const User = require("../models/User")
const jwt = require("jsonwebtoken")

const hashAcessSecretKey = '67c0fbaeee22ae50902039bd1523c094dc27b4bce6ef664a939ac3bb2dbc780d'

async function create_user(req, res, next, user){
  await User.create(user)
}

async function get_perfil(req, res, next){
  //const id_user = req.id
  const id_user = 1
  const user = await User.findOne({attributes: ['name', 'email'], where:{id:id_user}})
  return user
}

async function getIdByEmail(email) {
  const userId = await User.findOne({
    attributes: ['id'],
    raw: true,
    where: {email}
  })
  return userId
}

async function findByEmail(email) {
  const user = await User.findOne({
    where: {email}
  })
  return user
}

function signToken(payload, expiration) {
  const token = jwt.sign(payload, hashAcessSecretKey, { expiresIn: expiration })
  return token
}

function verifyToken(token) {
  const user = jwt.verify(token, hashAcessSecretKey)
  return user
}

module.exports = {create_user, get_perfil, findByEmail, signToken, verifyToken, getIdByEmail}