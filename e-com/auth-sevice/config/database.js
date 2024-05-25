const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('authdb', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
