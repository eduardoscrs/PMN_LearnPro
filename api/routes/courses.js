const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');
const tasksRouter = require('./tasks');

// Usar el router de tareas para las rutas /courses/:id/tasks
router.use('/:id/tasks', (req, res, next) => {
  req.courseId = req.params.id;
  next();
}, tasksRouter);

// Obtener todos los cursos
router.get('/', coursesController.getAllCourses);

// Obtener un curso específico
router.get('/:id', coursesController.getCourseById);

// Obtener cursos por instructor
router.get('/instructor/:instructorId', coursesController.getCoursesByInstructor);

// Obtener cursos por estudiante
router.get('/student/:studentId', coursesController.getCoursesByStudent);

// Crear un nuevo curso
router.post('/', coursesController.createCourse);

// Actualizar un curso
router.put('/:id', coursesController.updateCourse);

// Eliminar un curso
router.delete('/:id', coursesController.deleteCourse);

// Inscribir estudiante en un curso
router.post('/:id/enroll', coursesController.enrollStudent);

module.exports = router;