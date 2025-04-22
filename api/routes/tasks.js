const express = require('express');
const router = express.Router({ mergeParams: true });
const tasksController = require('../controllers/tasksController');

// Obtener todas las tareas
router.get('/', tasksController.getAllTasks);

// Obtener tareas por ID de curso
router.get('/course/:courseId', tasksController.getTasksByCourse);

// Obtener tareas por estado
router.get('/status/:status', tasksController.getTasksByStatus);

// Obtener una tarea específica
router.get('/:id', tasksController.getTaskById);

// Crear una nueva tarea
router.post('/', tasksController.createTask);

// Actualizar una tarea
router.put('/:id', tasksController.updateTask);

// Marcar una tarea como completada
router.patch('/:id/submit', tasksController.submitTask);

// Eliminar una tarea
router.delete('/:id', tasksController.deleteTask);

module.exports = router;