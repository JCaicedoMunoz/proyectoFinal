// src/controller/categoria.controller.js
import { Categoria } from '../models/categoria.model.js'

export const CategoriaController = {
  async obtenerTodas (req, res) {
    try {
      const categorias = await Categoria.obtenerTodas()
      res.json(categorias)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al obtener las categorías' })
    }
  },

  async obtenerPorId (req, res) {
    try {
      const categoria = await Categoria.obtenerPorId(req.params.id)
      if (categoria) {
        res.json(categoria)
      } else {
        res.status(404).json({ mensaje: 'Categoría no encontrada' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al obtener la categoría' })
    }
  },

  async crear (req, res) {
    try {
      const categoriaId = await Categoria.crear(req.body)
      res.status(201).json({ id: categoriaId, mensaje: 'Categoría creada exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al crear la categoría' })
    }
  },

  async actualizar (req, res) {
    try {
      await Categoria.actualizar(req.params.id, req.body)
      res.json({ mensaje: 'Categoría actualizada exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al actualizar la categoría' })
    }
  },

  async eliminar (req, res) {
    try {
      await Categoria.eliminar(req.params.id)
      res.json({ mensaje: 'Categoría eliminada exitosamente' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al eliminar la categoría' })
    }
  }
}
