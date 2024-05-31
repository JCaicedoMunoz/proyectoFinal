import { Comentario } from '../models/comentario.model.js'

export const ComentarioController = {

  async obtenerPorPublicacion (req, res) {
    try {
      const comentarios = await Comentario.obtenerPorPublicacion(req.params.publicacionId)
      res.json(comentarios)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al obtener los comentarios' })
    }
  },

  async crear (req, res) {
    try {
      const comentarioId = await Comentario.crear(req.body)
      res.status(201).json({ id: comentarioId, mensaje: 'Comentario creado exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al crear el comentario' })
    }
  },

  async actualizar (req, res) {
    try {
      await Comentario.actualizar(req.params.id, req.body)
      res.json({ mensaje: 'Comentario actualizado exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al actualizar el comentario' })
    }
  },

  async eliminar (req, res) {
    try {
      await Comentario.eliminar(req.params.id)
      res.json({ mensaje: 'Comentario eliminado exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al eliminar el comentario' })
    }
  }
}
