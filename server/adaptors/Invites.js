const Invite = require("../models/Invite")

async function reject_invite(req, res, next, id_stock, id_user){
  await Invite.destroy({where:{StockId: id_stock, UserId: id_user}})
}

module.exports = {reject_invite,}