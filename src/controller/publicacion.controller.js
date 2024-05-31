import { Publicacion } from '../models/publicacion.model.js'

export const PublicacionController = {
  async obtenerTodas (req, res) {
    try {
      const publicaciones = await Publicacion.obtenerTodas()
      res.json(publicaciones)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al obtener las publicaciones' })
    }
  },

  async obtenerPorId (req, res) {
    try {
      const publicacion = await Publicacion.obtenerPorId(req.params.id)
      if (publicacion) {
        res.json(publicacion)
      } else {
        res.status(404).json({ mensaje: 'Publicación no encontrada' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al obtener la publicación' })
    }
  },

  async crear (req, res) {
    try {
      const usuarioId = req.usuario.usuario_id
      const publicacionId = await Publicacion.crear({ ...req.body, usuarioId })
      res.status(201).json({ id: publicacionId, mensaje: 'Publicación creada exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al crear la publicación' })
    }
  },

  async actualizar (req, res) {
    try {
      const publicacion = await Publicacion.obtenerPorId(req.params.id)
      if (publicacion && publicacion.usuario_id === req.usuario.usuario_id) {
        await Publicacion.actualizar(req.params.id, req.body)
        res.json({ mensaje: 'Publicación actualizada exitosamente' })
      } else {
        res.status(403).json({ mensaje: 'Acceso denegado. No puedes actualizar esta publicación' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al actualizar la publicación' })
    }
  },

  async eliminar (req, res) {
    try {
      const publicacion = await Publicacion.obtenerPorId(req.params.id)
      if (publicacion && publicacion.usuario_id === req.usuario.usuario_id) {
        await Publicacion.eliminar(req.params.id)
        res.json({ mensaje: 'Publicación eliminada exitosamente' })
      } else {
        res.status(403).json({ mensaje: 'Acceso denegado. No puedes eliminar esta publicación' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al eliminar la publicación' })
    }
  },

  async filtrarPorCategoria (req, res) {
    try {
      const publicaciones = await Publicacion.filtrarPorCategoria(req.query.categoria)
      res.json(publicaciones)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al filtrar las publicaciones' })
    }
  },

  async buscarPorTitulo (req, res) {
    try {
      const publicaciones = await Publicacion.buscarPorTitulo(req.query.titulo)
      res.json(publicaciones)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al buscar las publicaciones' })
    }
  }
}
