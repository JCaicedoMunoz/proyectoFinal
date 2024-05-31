// src/models/categoria.model.js
import { pool } from '../config/db.js'

export const Categoria = {
  async obtenerTodas () {
    const [rows] = await pool.query('SELECT * FROM categorias')
    return rows
  },

  async obtenerPorId (id) {
    const [rows] = await pool.query('SELECT * FROM categorias WHERE categoria_id = ?', [id])
    return rows[0]
  },

  async crear (data) {
    const { nombre } = data
    const [result] = await pool.query('INSERT INTO categorias (nombre) VALUES (?)', [nombre])
    return result.insertId
  },

  async actualizar (id, data) {
    const { nombre } = data
    await pool.query('UPDATE categorias SET nombre = ? WHERE categoria_id = ?', [nombre, id])
  },

  async eliminar (id) {
    await pool.query('DELETE FROM categorias WHERE categoria_id = ?', [id])
  }
}
