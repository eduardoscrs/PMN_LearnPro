// Simulación de base de datos (reemplazar con una base de datos real)
let tasks = [
    { id: 1, title: 'Completar tarea 1', description: 'Descripción de la tarea 1', completed: false, courseId: 1 },
    { id: 2, title: 'Completar tarea 2', description: 'Descripción de la tarea 2', completed: true, courseId: 1 },
    { id: 3, title: 'Completar tarea 3', description: 'Descripción de la tarea 3', completed: false, courseId: 2 }
  ];
  
  // Obtener todas las tareas
  exports.getAllTasks = (req, res) => {
    res.json(tasks);
  };
  
  // Obtener tareas por ID de curso
  exports.getTasksByCourse = (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const courseTasks = tasks.filter(task => task.courseId === courseId);
    res.json(courseTasks);
  };
  
  // Obtener tareas por estado (completado o pendiente)
  exports.getTasksByStatus = (req, res) => {
    const status = req.params.status;
    const isCompleted = status === 'completed';
    const filteredTasks = tasks.filter(task => task.completed === isCompleted);
    res.json(filteredTasks);
  };
  
  // Obtener una tarea por ID
  exports.getTaskById = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    
    res.json(task);
  };
  
  // Crear una nueva tarea
  exports.createTask = (req, res) => {
    const { title, description, courseId } = req.body;
    
    if (!title || !courseId) {
      return res.status(400).json({ message: 'El título y el ID del curso son obligatorios' });
    }
    
    const newTask = {
      id: tasks.length + 1,
      title,
      description: description || '',
      completed: false,
      courseId: parseInt(courseId)
    };
    
    tasks.push(newTask);
    res.status(201).json(newTask);
  };
  
  // Actualizar una tarea
  exports.updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    
    const updatedTask = { 
      ...tasks[taskIndex],
      ...req.body,
      id: taskId // Asegurarse de que el ID no cambie
    };
    
    tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
  };
  
  // Marcar una tarea como completada
  exports.submitTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    
    tasks[taskIndex].completed = true;
    res.json(tasks[taskIndex]);
  };
  
  // Eliminar una tarea
  exports.deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  };