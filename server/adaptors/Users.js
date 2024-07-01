const User = require("../models/User")

async function create_user(req, res, next, user){
  await User.create(user)
}

async function get_perfil(req, res, next){
  //const id_user = req.id
  const id_user = 1
  const user = await User.findOne({attributes: ['name', 'email'], where:{id:id_user}})
  return user
}

module.exports = {create_user, get_perfil,}