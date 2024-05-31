import express from 'express'
import { verificarAutenticacion } from '../middleware/autenticacion.middleware.js'
import { PublicacionController } from '../controller/publicacion.controller.js'

const router = express.Router()

router.get('/', verificarAutenticacion, PublicacionController.obtenerTodas)
router.get('/:id', verificarAutenticacion, PublicacionController.obtenerPorId)
router.post('/', verificarAutenticacion, PublicacionController.crear)
router.put('/:id', verificarAutenticacion, PublicacionController.actualizar)
router.delete('/:id', verificarAutenticacion, PublicacionController.eliminar)
router.get('/filtrar/categoria', verificarAutenticacion, PublicacionController.filtrarPorCategoria)
router.get('/buscar/titulo', verificarAutenticacion, PublicacionController.buscarPorTitulo)

export default router
