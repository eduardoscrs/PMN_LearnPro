// Simulación de base de datos (reemplazar con una base de datos real)
let courses = [
    {
      id: 1,
      title: 'Curso de Programación Web',
      description: 'Aprende a desarrollar aplicaciones web modernas con HTML, CSS y JavaScript',
      instructorId: 2,
      students: [1],
      createdAt: new Date('2025-01-15')
    },
    {
      id: 2,
      title: 'Curso de Bases de Datos',
      description: 'Fundamentos de bases de datos relacionales y NoSQL',
      instructorId: 2,
      students: [1],
      createdAt: new Date('2025-02-01')
    }
  ];
  
  // Obtener todos los cursos
  exports.getAllCourses = (req, res) => {
    res.json(courses);
  };
  
  // Obtener un curso por ID
  exports.getCourseById = (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(course => course.id === courseId);
    
    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    
    res.json(course);
  };
  
  // Crear un nuevo curso
  exports.createCourse = (req, res) => {
    const { title, description, instructorId } = req.body;
    
    if (!title || !instructorId) {
      return res.status(400).json({ message: 'El título y el ID del instructor son obligatorios' });
    }
    
    const newCourse = {
      id: courses.length + 1,
      title,
      description: description || '',
      instructorId: parseInt(instructorId),
      students: [],
      createdAt: new Date()
    };
    
    courses.push(newCourse);
    res.status(201).json(newCourse);
  };
  
  // Actualizar un curso
  exports.updateCourse = (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.id === courseId);
    
    if (courseIndex === -1) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    
    const updatedCourse = { 
      ...courses[courseIndex],
      ...req.body,
      id: courseId // Asegurarse de que el ID no cambie
    };
    
    courses[courseIndex] = updatedCourse;
    res.json(updatedCourse);
  };
  
  // Eliminar un curso
  exports.deleteCourse = (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.id === courseId);
    
    if (courseIndex === -1) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    
    courses.splice(courseIndex, 1);
    res.status(204).send();
  };
  
  // Inscribir estudiante en un curso
  exports.enrollStudent = (req, res) => {
    const courseId = parseInt(req.params.id);
    const { studentId } = req.body;
    
    if (!studentId) {
      return res.status(400).json({ message: 'El ID del estudiante es obligatorio' });
    }
    
    const courseIndex = courses.findIndex(course => course.id === courseId);
    
    if (courseIndex === -1) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    
    const parsedStudentId = parseInt(studentId);
    
    // Verificar si el estudiante ya está inscrito
    if (courses[courseIndex].students.includes(parsedStudentId)) {
      return res.status(400).json({ message: 'El estudiante ya está inscrito en este curso' });
    }
    
    courses[courseIndex].students.push(parsedStudentId);
    res.json(courses[courseIndex]);
  };
  
  // Obtener cursos por instructor
  exports.getCoursesByInstructor = (req, res) => {
    const instructorId = parseInt(req.params.instructorId);
    const instructorCourses = courses.filter(course => course.instructorId === instructorId);
    res.json(instructorCourses);
  };
  
  // Obtener cursos por estudiante inscrito
  exports.getCoursesByStudent = (req, res) => {
    const studentId = parseInt(req.params.studentId);
    const studentCourses = courses.filter(course => course.students.includes(studentId));
    res.json(studentCourses);
  };