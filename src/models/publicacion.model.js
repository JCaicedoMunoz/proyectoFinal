import { pool } from '../config/db.js'

export const Publicacion = {
  async obtenerTodas () {
    const [rows] = await pool.query('SELECT * FROM publicaciones')
    return rows
  },

  async obtenerPorId (id) {
    const [rows] = await pool.query('SELECT * FROM publicaciones WHERE publicacion_id = ?', [id])
    return rows[0]
  },

  async crear (publicacion) {
    const { titulo, contenido, usuario_id } = publicacion
    const [result] = await pool.query('INSERT INTO publicaciones (titulo, contenido, usuario_id) VALUES (?, ?, ?)', [titulo, contenido, usuario_id])
    return result.insertId
  },

  async actualizar (id, publicacion) {
    const { titulo, contenido } = publicacion
    await pool.query('UPDATE publicaciones SET titulo = ?, contenido = ? WHERE publicacion_id = ?', [titulo, contenido, id])
  },

  async eliminar (id) {
    await pool.query('DELETE FROM publicaciones WHERE publicacion_id = ?', [id])
  }
}
