import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import productosRouter from './routes/productos.routes.js'
import notFound from './middlewares/not-found.js'
import errorHandler from './middlewares/error-handler.js'

const app = express()

app.use(express.json())
app.disable('x-powered-by')

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true)
        if (ACCEPTED_ORIGINS.includes(origin)) return cb(null, true)
          return cb(new Error('Not allowed by CORS'))
      }
    })
  )


const ACCEPTED_ORIGINS = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5174',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://jotahermanos.netlify.app'
]


  


app.get('/', (req, res) => {
  res.send('OK: backend corriendo')
})

// health check para Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/api/productos', productosRouter)

app.use(notFound)
app.use(errorHandler)

export default app
