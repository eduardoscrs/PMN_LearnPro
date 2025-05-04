const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');
const tasksRouter = require('./tasks');

// Subruta para tareas del curso
router.use('/:id/tasks', (req, res, next) => {
  req.courseId = req.params.id;
  next();
}, tasksRouter);

// Rutas de cursos
router.get('/', coursesController.getAllCourses);
router.get('/:id', coursesController.getCourseById);
router.get('/instructor/:instructorId', coursesController.getCoursesByInstructor);
router.get('/student/:studentId', coursesController.getCoursesByStudent);
router.post('/', coursesController.createCourse);
router.put('/:id', coursesController.updateCourse);
router.delete('/:id', coursesController.deleteCourse);
router.post('/:id/enroll', coursesController.enrollStudent);

module.exports = router;
