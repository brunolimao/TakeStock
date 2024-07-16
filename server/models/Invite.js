const sequelize = require('./index.js');
const User = require('./User.js')
const Stock = require('./Stock.js')

const Invite = sequelize.define('Invites', {}, { timestamps: false });
User.belongsToMany(Stock, { through: 'Invites' });
Stock.belongsToMany(User, { through: 'Invites' });

Invite.sync({alter: false, force: false})
.then(() => {
  console.log('Invite table was (re)created');
})
.catch((err) => console.log(err));

module.exports = Invite;