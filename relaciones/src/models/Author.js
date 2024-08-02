const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Author = sequelize.define('author', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
});

module.exports = Author;