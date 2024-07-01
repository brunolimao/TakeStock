const sequelize = require('./index.js');
const {DataTypes} = require('sequelize');
const User = require('./User.js')

const Stock = sequelize.define("Stocks", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, { timestamps: true });

User.hasMany(Stock)
Stock.belongsTo(User)

Stock.sync({alter: false, force: false})
.then(() => {
  console.log('Stock table was (re)created');
})
.catch((err) => console.log(err));



module.exports = Stock;