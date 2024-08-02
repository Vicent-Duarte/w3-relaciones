const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Degree = sequelize.define('degree', {
  name: { 
    type: DataTypes.STRING(100),
    allowNull: false
  },
  semestreNum: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = Degree;