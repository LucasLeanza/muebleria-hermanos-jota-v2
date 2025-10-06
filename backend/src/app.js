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

const ACCEPTED_ORIGINS = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5174',
  'http://localhost:3000',
  'http://127.0.0.1:3000'
]

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true)
        if (ACCEPTED_ORIGINS.includes(origin)) return cb(null, true)
          return cb(new Error('Not allowed by CORS'))
      }
    })
  )
  
app.use('/api/productos', productosRouter)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use('/images', express.static(path.join(__dirname, '../images')))

app.use(notFound)
app.use(errorHandler)

export default app
