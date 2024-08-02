const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Student = sequelize.define('student', {
    firtsName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'firtsName'
    },
    lastsName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'latsName'
    },
    program: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Student;