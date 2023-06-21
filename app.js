// Importaciones de librerías
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const { sequelize } = require('./db');

sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a base de datos', error));

require('ejs');

const port = process.env.PORT || 6000;


const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');

// Configuración de rutas
app.use(require('./routes/reserva.routes'));


// 404 - Not found
app.use((req, res, next) => {
    res.write(`<div>
        <h1>404 - Ruta no encontrada</h1>
        <hr>
        <p>La pagina que intentas buscar no existe</p>
        <p>Redireccionando a la página de inicio...</p>
        <script>
        (
          () => setTimeout(() => {
            window.location.href='http://localhost:${port}/tareas';
           }, 3000)           
        )();
        </script>
    </h1>`)
});


app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));