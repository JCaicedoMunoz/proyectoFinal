// src/models/usuario.model.js
import { pool } from '../config/db.js'

// Modelo para la gestión de usuarios
export const Usuario = {
  // Obtener todos los usuarios
  async obtenerTodos () {
    const [rows] = await pool.query('SELECT * FROM usuarios')
    return rows
  },

  async crear (req, res) {
    try {
      const { nombreUsuario, contraseña, correo, informacionPerfil, rolId } = req.body
      const usuarioId = await Usuario.crear({ nombreUsuario, contraseña, correo, informacionPerfil, rolId })
      res.status(201).json({ id: usuarioId, mensaje: 'Usuario creado exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al crear el usuario' })
    }
  },

  async actualizar (id, data) {
    const { nombreUsuario, contraseña, correo, informacionPerfil, rolId } = data
    await pool.query('UPDATE usuarios SET nombre_usuario = ?, contraseña = ?, correo = ?, informacion_perfil = ?, rol_id = ? WHERE usuario_id = ?',
      [nombreUsuario, contraseña, correo, informacionPerfil, rolId, id])
  },

  async eliminar (id) {
    await pool.query('DELETE FROM usuarios WHERE usuario_id = ?', [id])
  }
}
