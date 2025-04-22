const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Obtener todos los usuarios
router.get('/', usersController.getAllUsers);

// Obtener un usuario específico
router.get('/:id', usersController.getUserById);

// Obtener usuario por nombre de usuario
router.get('/username/:username', usersController.getUserByUsername);

// Crear un nuevo usuario (registro)
router.post('/', usersController.createUser);

// Autenticar usuario (login)
router.post('/login', usersController.loginUser);

// Actualizar un usuario
router.put('/:id', usersController.updateUser);

// Eliminar un usuario
router.delete('/:id', usersController.deleteUser);

// Cambiar rol de usuario
router.patch('/:id/role', usersController.changeUserRole);

module.exports = router;