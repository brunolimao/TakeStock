const sequelize = require('./index.js');
const {DataTypes} = require('sequelize');
const User = require('./User.js')
const Stock = require('./Stock.js')

const User_Stock = sequelize.define('User_Stock', {}, { timestamps: false });
User.belongsToMany(Stock, { through: 'User_Stock' });
Stock.belongsToMany(User, { through: 'User_Stock' });

User_Stock.sync({alter: false, force: false})
.then(() => {
  console.log('User_Stock table was (re)created');
})
.catch((err) => console.log(err));

module.exports = User_Stock;