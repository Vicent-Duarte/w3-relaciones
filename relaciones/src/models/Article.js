const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Article = sequelize.define('article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  post: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});



module.exports = Article;