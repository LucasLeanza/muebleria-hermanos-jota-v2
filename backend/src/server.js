import 'dotenv/config'
import app from './app.js'
import connectDB from '../db.js'
// Rutas agregadas 
import authRoutes from './routes/auth.js' //Donde esta login y registro
import usuarioRoutes from './routes/rutas-protegidas.js'  // rutas protegidas solo con pedido y usuario

const PORT = process.env.PORT || 3000

// 🔹 Registrar las rutas (antes del listen)
app.use("/api/auth", authRoutes)
app.use("/api/usuario", usuarioRoutes)

connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`API lista en http://localhost:${PORT}`)
    console.log('conectado a la base de datos')
  })
})
.catch(err => {
  console.error('Error al conectar a la base de datos:', err)
  process.exit(1)
})
