import { Usuario } from '../models/usuario.model.js'

export const UsuarioController = {
  async obtenerTodos (req, res) {
    try {
      const usuarios = await Usuario.obtenerTodos()

      if (req.usuario && req.usuario.rol_id === 1) {
        res.json(usuarios)
      } else {
        res.json({ id: req.usuario.usuario_id, nombre: req.usuario.nombre_usuario })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al obtener los usuarios' })
    }
  },

  async crear (req, res) {
    try {
      const usuarioId = await Usuario.crear(req.body)
      res.status(201).json({ id: usuarioId, mensaje: 'Usuario creado exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al crear el usuario' })
    }
  },

  async actualizar (req, res) {
    try {
      await Usuario.actualizar(req.params.id, req.body)
      res.json({ mensaje: 'Usuario actualizado exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al actualizar el usuario' })
    }
  },

  async eliminar (req, res) {
    try {
      await Usuario.eliminar(req.params.id)
      res.json({ mensaje: 'Usuario eliminado exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al eliminar el usuario' })
    }
  }
}
