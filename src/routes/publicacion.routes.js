import express from 'express'
import { verificarAutenticacion } from '../middleware/autentication.middleware.js'
import { PublicacionController } from '../controller/publicacion.controller.js'

const router = express.Router()

// Obtener todas las publicaciones
router.get('/', verificarAutenticacion, PublicacionController.obtenerTodas)

// Obtener una publicación por ID
router.get('/:id', verificarAutenticacion, PublicacionController.obtenerPorId)

// Crear una nueva publicación
router.post('/', verificarAutenticacion, PublicacionController.crear)

// Actualizar una publicación (verificar que el usuario es el propietario)
router.put('/:id', verificarAutenticacion, PublicacionController.actualizar)

// Eliminar una publicación (verificar que el usuario es el propietario)
router.delete('/:id', verificarAutenticacion, PublicacionController.eliminar)

// Filtrar publicaciones por categoría
router.get('/filtrar/categoria', verificarAutenticacion, PublicacionController.filtrarPorCategoria)

// Buscar publicaciones por título
router.get('/buscar/titulo', verificarAutenticacion, PublicacionController.buscarPorTitulo)

export default router
