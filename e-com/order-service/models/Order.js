const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Order;
