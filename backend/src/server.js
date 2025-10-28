import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import app from './app.js'
import { connectDB } from './db/mongo.js'
import productosRoutes from './routes/productos.routes.js'

const PORT = process.env.PORT || 3000

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server corriendo en http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.error('Falló la conexión a la Base de Datos', err)
    process.exit(1)
  })