const Sequelize = require('sequelize');
require('dotenv').load();
var env = process.env
const database = new Sequelize('SBS', env.DB_USER, env.DB_PASS, {
    host: env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});

module.exports = database
