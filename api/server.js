const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db'); // Conexión a la base de datos
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;


connectDB(); // Conectar a MongoDB


// Middleware
app.use(cors());
app.use(morgan('dev')); // Para logging de solicitudes HTTP
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', routes);

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({
    message: 'Ruta no encontrada',
    path: req.originalUrl
  });
});

// Manejo de errores generales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});

module.exports = app;