const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const city = sequelize.define('cities', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isCapital: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = city;