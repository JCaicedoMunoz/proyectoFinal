export const verificarAutenticacion = (req, res, next) => {
  const usuarioAutenticado = { usuario_id: 1, nombre_usuario: 'admin', rol_id: 1 }
  req.usuario = usuarioAutenticado
  next()
}

export const verificarRolAdministrador = (req, res, next) => {
  if (req.usuario && req.usuario.rol_id === 1) {
    next()
  } else {
    res.status(403).json({ mensaje: 'Acceso denegado. Se requiere rol de administrador' })
  }
}

export const verificarRolUsuario = (req, res, next) => {
  if (req.usuario && (req.usuario.rol_id === 1 || req.usuario.rol_id === 2)) {
    next()
  } else {
    res.status(403).json({ mensaje: 'Acceso denegado. Se requiere ser un usuario autenticado' })
  }
}
