// TODO: Crear modelo de datos de Reserva

const { sequelize, DataTypes } = require('../db');

const reserva = sequelize.define('reserva', {
    // Model attributes are defined here
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dias: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaReserva: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reservas'
});

// Crear tabla si no existe
reserva.sync();

module.exports = reserva;