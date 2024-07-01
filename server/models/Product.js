const sequelize = require('./index.js');
const {DataTypes} = require('sequelize');
const Stock = require('./Stock.js')

const Product = sequelize.define("Products", {
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

  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, { timestamps: true });

Stock.hasMany(Product)
Product.belongsTo(Stock)

Product.sync({alter: false, force: false})
.then(() => {
  console.log('Product table was (re)created');
})
.catch((err) => console.log(err));

module.exports = Product;