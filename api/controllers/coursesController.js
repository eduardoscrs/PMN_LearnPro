const Course = require('../models/course');
const User = require('../models/user');

// Obtener todos los cursos
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('instructor', 'name email')
      .populate('students', 'name email');
    res.json(courses);
  } catch (error) {
    console.error('Error al obtener cursos:', error.message);
    res.status(500).json({ message: 'Error al obtener los cursos' });
  }
};

// Obtener un curso por ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'name email')
      .populate('students', 'name email');
    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    res.json(course);
  } catch (error) {
    console.error('Error al obtener el curso:', error.message);
    res.status(500).json({ message: 'Error al obtener el curso' });
  }
};

// Obtener cursos por instructor
exports.getCoursesByInstructor = async (req, res) => {
  try {
    const courses = await Course.find({ instructor: req.params.instructorId });
    res.json(courses);
  } catch (error) {
    console.error('Error al obtener cursos por instructor:', error.message);
    res.status(500).json({ message: 'Error al obtener cursos por instructor' });
  }
};

// Obtener cursos por estudiante
exports.getCoursesByStudent = async (req, res) => {
  try {
    const courses = await Course.find({ students: req.params.studentId });
    res.json(courses);
  } catch (error) {
    console.error('Error al obtener cursos por estudiante:', error.message);
    res.status(500).json({ message: 'Error al obtener cursos por estudiante' });
  }
};

// Crear un nuevo curso
exports.createCourse = async (req, res) => {
  try {
    const { title, code, description, instructor, schedule, startDate, endDate } = req.body;

    const instructorUser = await User.findById(instructor);
    if (!instructorUser || instructorUser.role !== 'teacher') {
      return res.status(400).json({ message: 'Instructor inválido' });
    }

    const newCourse = new Course({
      title,
      code,
      description,
      instructor,
      schedule,
      startDate,
      endDate
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error('Error al crear el curso:', error.message);
    res.status(500).json({ message: 'Error al crear el curso' });
  }
};

// Actualizar un curso
exports.updateCourse = async (req, res) => {
  try {
    const { title, description } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    res.json(updatedCourse);
  } catch (error) {
    console.error('Error al actualizar el curso:', error.message);
    res.status(500).json({ message: 'Error al actualizar el curso' });
  }
};

// Eliminar un curso
exports.deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    if (!deletedCourse) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    res.json({ message: 'Curso eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el curso:', error.message);
    res.status(500).json({ message: 'Error al eliminar el curso' });
  }
};

// Inscribir un estudiante en un curso
exports.enrollStudent = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { studentId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    const student = await User.findById(studentId);
    if (!student || student.role !== 'student') {
      return res.status(400).json({ message: 'Estudiante inválido' });
    }

    if (course.students.includes(studentId)) {
      return res.status(400).json({ message: 'Estudiante ya inscrito' });
    }

    course.students.push(studentId);
    await course.save();

    res.json({ message: 'Estudiante inscrito exitosamente', course });
  } catch (error) {
    console.error('Error al inscribir estudiante:', error.message);
    res.status(500).json({ message: 'Error al inscribir estudiante' });
  }
};
