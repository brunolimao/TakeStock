const Invite = require("../models/Invite")
const User_Stock = require("../models/UserStock")

async function create_invite(invite) {
  await Invite.create(invite)
}

async function accept_invite(UserId, StockId) {
  const user_stock = {UserId, StockId}
  console.log(user_stock)
  await User_Stock.create(user_stock)
  await Invite.destroy({where:{UserId, StockId}})
}

async function reject_invite(id_stock, id_user){
  await Invite.destroy({where:{StockId: id_stock, UserId: id_user}})
}

module.exports = {reject_invite, create_invite, accept_invite}