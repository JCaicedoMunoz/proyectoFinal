import express from 'express'
import { ComentarioController } from '../controller/comentario.controller.js'

const router = express.Router()

router.get('/publicacion/:publicacionId', ComentarioController.obtenerPorPublicacion)
router.post('/', ComentarioController.crear)
router.put('/:id', ComentarioController.actualizar)
router.delete('/:id', ComentarioController.eliminar)

export default router
