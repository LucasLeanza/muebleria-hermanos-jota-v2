import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const { MONGO_HOST, MONGO_DB, MONGO_USER, MONGO_PASS } = process.env

if (!MONGO_HOST || !MONGO_DB || !MONGO_USER || !MONGO_PASS) {
  throw new Error('Faltan variables de entorno para la DB')
}

export async function connectDB () {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGO_HOST}/?retryWrites=true&w=majority&appName=HermanosJotaDB`,
      {
        dbName: MONGO_DB,
        user: MONGO_USER,
        pass: MONGO_PASS,
        authSource: 'admin',
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000
      }
    )
    console.log('MongoDB conectado')
  } catch (err) {
    console.error('Falló la conexión a la Base de Datos', err)
    process.exit(1)
  }
}