// Se importan las clases de la librería
const { Sequelize, Model, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST, 
        dialect: process.env.DB_DIALECT 
    });

// Se exportan la conexión a MySQL, Model y DataTypes para poder usarlas en los modelos
module.exports = {
    sequelize,
    DataTypes,
    Model
}
