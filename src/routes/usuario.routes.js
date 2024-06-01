import express from 'express'
import { UsuarioController } from '../controller/usuario.controller.js'

const router = express.Router()

// Obtener todos los usuarios
router.get('/', UsuarioController.obtenerTodos)

// Obtener un usuario por ID
router.get('/:id', UsuarioController.obtenerPorId)

// Registrar un nuevo usuario
router.post('/', UsuarioController.crear)

// Actualizar datos del usuario
router.put('/:id', UsuarioController.actualizar)

// Eliminar la cuenta del usuario
router.delete('/:id', UsuarioController.eliminar)

export default router
