const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error al obtener usuario:', error.message);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

// Obtener usuario por nombre de usuario
exports.getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error al obtener usuario:', error.message);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

// Registrar un nuevo usuario
exports.register = async (req, res) => {
  try {
    const { username, email, password, name, role } = req.body;

    if (!username || !email || !password || !name) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      name,
      role: role || 'student' // Usar 'student' como default si no se especifica
    });
    await newUser.save();

    const userResponse = newUser.toObject();
    delete userResponse.password;
    res.status(201).json(userResponse);
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

// Iniciar sesión
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Nombre de usuario y contraseña son obligatorios' });
    }

    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );

    const userResponse = user.toObject();
    delete userResponse.password;
    res.json({
      message: 'Inicio de sesión exitoso',
      user: userResponse,
      token
    });
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
  try {
    const { role, password, ...updateData } = req.body;

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error al actualizar usuario:', error.message);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar usuario:', error.message);
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};

// Cambiar rol de usuario (solo para administradores)
exports.changeUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({ message: 'El rol es obligatorio' });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error al cambiar rol:', error.message);
    res.status(500).json({ message: 'Error al cambiar el rol' });
  }
};

// Aliases para compatibilidad
exports.createUser = exports.register;
exports.loginUser = exports.login;