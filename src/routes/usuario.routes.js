import express from 'express'
import { verificarAutenticacion, verificarRolAdministrador, verificarRolUsuario } from '../middleware/autenticacion.middleware.js'
import { UsuarioController } from '../controller/usuario.controller.js'

const router = express.Router()

router.get('/', verificarAutenticacion, verificarRolAdministrador, UsuarioController.obtenerTodos)
router.get('/:id', verificarAutenticacion, verificarRolUsuario, UsuarioController.obtenerPorId)
router.post('/', UsuarioController.crear)
router.put('/:id', verificarAutenticacion, verificarRolUsuario, UsuarioController.actualizar)
router.delete('/:id', verificarAutenticacion, verificarRolUsuario, UsuarioController.eliminar)

export default router
