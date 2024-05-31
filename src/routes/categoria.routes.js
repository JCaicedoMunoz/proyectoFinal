import express from 'express'
import { verificarAutenticacion, verificarRolAdministrador } from '../middleware/autenticacion.middleware.js'
import { CategoriaController } from '../controller/categoria.controller.js'

const router = express.Router()

router.get('/', verificarAutenticacion, CategoriaController.obtenerTodas)
router.get('/:id', verificarAutenticacion, CategoriaController.obtenerPorId)
router.post('/', verificarAutenticacion, verificarRolAdministrador, CategoriaController.crear)
router.put('/:id', verificarAutenticacion, verificarRolAdministrador, CategoriaController.actualizar)
router.delete('/:id', verificarAutenticacion, verificarRolAdministrador, CategoriaController.eliminar)

export default router
