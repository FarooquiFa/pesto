const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('productdb', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
