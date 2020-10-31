require('dotenv').config();

const { Sequelize, Model, DataTypes } = require('sequelize');
const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.HOST,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


// testing connection
db.authenticate()
                .then(() => console.log('database connected'))
                .catch(err => console.log(err));