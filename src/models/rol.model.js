import { pool } from '../config/db.js'

export const Rol = {
  async obtenerTodos () {
    const [rows] = await pool.query('SELECT * FROM roles')
    return rows
  },

  async crear (rol) {
    const [result] = await pool.query('INSERT INTO roles SET ?', [rol])
    return result.insertId
  },

  async actualizar (id, rol) {
    await pool.query('UPDATE roles SET ? WHERE rol_id = ?', [rol, id])
  },

  async eliminar (id) {
    await pool.query('DELETE FROM roles WHERE rol_id = ?', [id])
  }
}
