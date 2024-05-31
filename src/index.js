import express from 'express'
import categoriaRoutes from './routes/categoria.routes.js'
import comentarioRoutes from './routes/comentario.routes.js'
import publicacionRoutes from './routes/publicacion.routes.js'
import usuarioRoutes from './routes/usuario.routes.js'
const app = express()
app.use(express.json())

app.use('/api/categorias', categoriaRoutes)
app.use('/api/comentarios', comentarioRoutes)
app.use('/api/publicaciones', publicacionRoutes)
app.use('/api/usuarios', usuarioRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`)
})
