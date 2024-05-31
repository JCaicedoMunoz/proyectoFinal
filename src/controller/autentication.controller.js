import { Rol } from '../models/rol.model.js'
import { Usuario } from '../models/usuario.model.js'

export const AutenticacionController = {
  async obtenerRoles (req, res) {
    try {
      const roles = await Rol.obtenerTodos()
      res.json(roles)
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al obtener los roles' })
    }
  },

  async login (req, res) {
    const { correo, contraseña } = req.body

    try {
      const usuario = await Usuario.obtenerPorCorreo(correo)

      if (!usuario || contraseña !== usuario.contraseña) {
        res.status(401).json({ mensaje: 'Credenciales inválidas' })
      } else {
        if (usuario.rol_id === 1) {
          res.json({ mensaje: 'Inicio de sesión exitoso como administrador' })
        } else {
          res.json({ mensaje: 'Inicio de sesión exitoso como usuario' })
        }
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ mensaje: 'Error al iniciar sesión' })
    }
  }
}
