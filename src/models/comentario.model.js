import { pool } from '../config/db.js'

export const Comentario = {

  async obtenerPorPublicacion (publicacionId) {
    const [rows] = await pool.query('SELECT * FROM comentarios WHERE publicación_id = ?', [publicacionId])
    return rows
  },

  async crear (comentario) {
    const [result] = await pool.query('INSERT INTO comentarios SET ?', [comentario])
    return result.insertId
  },

  async actualizar (id, comentario) {
    await pool.query('UPDATE comentarios SET ? WHERE comentario_id = ?', [comentario, id])
  },

  async eliminar (id) {
    await pool.query('DELETE FROM comentarios WHERE comentario_id = ?', [id])
  }
}
