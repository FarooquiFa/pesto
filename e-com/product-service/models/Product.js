const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    version: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Product;
