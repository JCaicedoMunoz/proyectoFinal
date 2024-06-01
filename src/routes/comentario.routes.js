import express from 'express'
import { verificarAutenticacion } from '../middleware/autentication.middleware.js'
import { ComentarioController } from '../controller/comentario.controller.js'

const router = express.Router()

router.get('/publicacion/:publicacionId', verificarAutenticacion, ComentarioController.obtenerPorPublicacion)
router.post('/', verificarAutenticacion, ComentarioController.crear)
router.put('/:id', verificarAutenticacion, ComentarioController.actualizar)
router.delete('/:id', verificarAutenticacion, ComentarioController.eliminar)

export default router
