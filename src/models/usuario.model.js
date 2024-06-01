import { pool } from '../config/db.js'

export const Usuario = {
  async obtenerTodos () {
    const [rows] = await pool.query('SELECT * FROM usuarios')
    return rows
  },

  async crear (usuario) {
    const { nombreUsuario, contraseña, correo, informacionPerfil, rolId } = usuario
    const [result] = await pool.query('INSERT INTO usuarios (nombre_usuario, contraseña, correo, informacion_perfil, rol_id) VALUES (?, ?, ?, ?, ?)', [nombreUsuario, contraseña, correo, informacionPerfil, rolId])
    return result.insertId
  },

  async actualizar (id, usuario) {
    const { nombreUsuario, contraseña, correo, informacionPerfil, rolId } = usuario
    await pool.query('UPDATE usuarios SET nombre_usuario = ?, contraseña = ?, correo = ?, informacion_perfil = ?, rol_id = ? WHERE usuario_id = ?', [nombreUsuario, contraseña, correo, informacionPerfil, rolId, id])
  },

  async eliminar (id) {
    await pool.query('DELETE FROM usuarios WHERE usuario_id = ?', [id])
  }
}
