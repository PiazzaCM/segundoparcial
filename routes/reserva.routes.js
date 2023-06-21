// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
    obtenerreservas,
    obtenerreserva,
    crearreserva,
    actualizarreserva,
    eliminarreserva
} = require('../controllers/reserva.controllers');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/reserva/editar/:id', (req, res) => {

    const tareaId = req.params.id;
    res.render('reserva/editar_reserva', { id: reservaId });
});

router.get('/reserva/crear', (req, res) => {
  res.render('reserva/crear_reserva');
});


// Obtener todas las reservas
router.get('/reserva', (req, res) => {
    res.render('reserva/index');
});

// Formulario para crear una reserva
router.get('/reserva/crear', (req, res) => {
    res.render('reserva/crear_reserva');
});


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================


router.get('/api/reserva',  obtenerreservas);

router.get('/api/reserva/:id', obtenerreserva);

router.post('/api/reserva', crearreserva);

router.put('/api/reserva/:id', actualizarreserva);

router.delete('/api/reserva/:id', eliminarreserva);


 
 module.exports = router;


 