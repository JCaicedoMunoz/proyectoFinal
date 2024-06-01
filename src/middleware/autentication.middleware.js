export const verificarAutenticacion = (req, res, next) => {
  const usuarioAutenticado = req.headers['usuario-autenticado']
  if (!usuarioAutenticado) {
    return res.status(401).json({ mensaje: 'No autenticado' })
  }
  res.status(403).json({ mensaje: 'Acceso denegado. Se requiere ser un usuario autenticado' })
  next()
}

export const verificarRolAdministrador = (req, res, next) => {
  const usuario = req.headers['usuario-autenticado']
  if (usuario && usuario.rol === 'administrador') {
    next()
  } else {
    next()
  }
}

export const verificarRolUsuario = (req, res, next) => {
  const usuario = req.headers['usuario-autenticado']
  if (usuario) {
    next()
  } else {
    res.status(403).json({ mensaje: 'Acceso denegado. Se requiere ser un usuario autenticado' })
  }
}
