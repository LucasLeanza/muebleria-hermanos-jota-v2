const express = require('express')
const cors = require('cors')

const productosRouter = require('./routes/productos.routes')
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')

const app = express()

app.use(express.json())
app.disable('x-powered-by')

const ACCEPTED_ORIGINS = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000'
]

app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true)
    if(ACCEPTED_ORIGINS.includes(origin)) return cb(null, true)
    return cb(new Error('Not allowed by CORS'))
  }
}))

app.use('/api/productos', productosRouter)

app.use(notFound)
app.use(errorHandler)

module.exports = app