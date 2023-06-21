
const ctrlReservas = {};
const reservas = require('../models/Reserva');


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================


// Ctrl para obtener todas las reservas
ctrlReservas.obtenerreservas = async (req, res) => {
    try {
        const reservas = await Tarea.findAll({
            where: {
                estado: true,
                usuarioId: req.usuario.id
            }
        });

        if (!reservas || reservas.length === 0) {
            throw ({
                status: 404,
                message: 'No hay reservas registradas'
            })
        }

        return res.json(reservas);
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || 'Error interno del servidor'
        });
    }
}

// Ctrl para obtener una reserva
ctrlReservas.obtenerreserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reservas = await reservas.findOne({
            where: {
                id,
                estado: true
            }
        });

        if (!reserva) {
            throw ({
                status: 404,
                message: 'No existe la tarea'
            })
        }
    
        return res.json(reserva);

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para crear una reserva
ctrlReservas.crearreserva = async (req, res) => {
    const { nombre, fecha } = req.body;

    try {
        const reserva = await reserva.create({
            nombre,
            fecha,
            usuarioId: req.usuario.id
        });

        if (!reserva) {
            throw ({
                status: 400,
                message: 'No se pudo crear la reserva'
            })
        }

        return res.json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para actualizar una reserva
ctrlReservas.actualizarreserva = async (req, res) => {
    const { id } = req.params;
    const { nombre, fecha } = req.body;
    
    try {
        const reservaActualizada = await Tarea.update({
            nombre,
           fecha
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!reservaActualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la reserva'
            })
        }

        return res.json({
            message: 'reserva actualizada correctamente',
            tareaActualizada
            
        });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Ctrl para eliminar una reserva
ctrlReservas.eliminarreserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reservaEliminada = await Tarea.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!tareaEliminada) {
            throw ({
                status: 400,
                message: 'No se pudo eliminar la reserva'
            })
        }

        return res.json({reservaEliminada, message: 'reserva eliminada correctamente' });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}




module.exports = ctrlReservas;