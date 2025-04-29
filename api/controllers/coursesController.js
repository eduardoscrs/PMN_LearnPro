const Course = require('../models/course');
const User = require('../models/user');



//? obtener todos los cursos
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name email').populate('students', 'name email');
    res.json(courses);
  } catch (error) {
    console.error('Error al obtener cursos:', error.message);
    res.status(500).json({ message: 'Error al obtener los cursos' });
  }
};

//? obtener un curso por id
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

//? crear un curso
// exports.createCourse = async (req, res) => {
//   try {
//     const { title, description, instructor } = req.body;

//     // Verificar si el instructor existe y tiene el rol adecuado
//     const instructorUser = await User.findById(instructor);
//     if (!instructorUser || instructorUser.role !== 'teacher') {
//       return res.status(400).json({ message: 'Instructor inválido' });
//     }

//     const newCourse = new Course({
//       title,
//       description,
//       instructor,
//     });

//     const savedCourse = await newCourse.save();
//     res.status(201).json(savedCourse);
//   } catch (error) {
//     console.error('Error al crear el curso:', error.message);
//     res.status(500).json({ message: 'Error al crear el curso' });
//   }
// };

exports.createCourse = async (req, res) => {
  try {
    const { title, code, description, instructor, schedule, startDate, endDate } = req.body;

    // Verificar si el instructor existe y tiene el rol adecuado
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

//? actualizar un curso
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

//? eliminar un curso
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