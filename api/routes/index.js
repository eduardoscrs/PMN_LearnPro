const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');
const coursesRoutes = require('./courses');
const tasksRoutes = require('./tasks');

// Rutas principales
router.use('/users', usersRoutes);
router.use('/courses', coursesRoutes);
router.use('/tasks', tasksRoutes);

// Ruta base para verificar que la API está funcionando
router.get('/', (req, res) => {
  res.json({
    message: 'API funcionando correctamente',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      courses: '/api/courses',
      tasks: '/api/tasks'
    }
  });
});

module.exports = router;