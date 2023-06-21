// TODO: Crear modelo de datos de Reserva

const { sequelize, DataTypes } = require('../db');

const reserva = sequelize.define('reserva', {
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaReserva: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },

}, {
    tableName: 'reservas'
});

// Crear tabla si no existe
reserva.sync();

module.exports = reserva;