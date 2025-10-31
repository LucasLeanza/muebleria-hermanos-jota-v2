import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export async function connectDB () {
  const uri = process.env.MONGO_URI
  try {
      await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000,
    maxPoolSize: 10
  });
    console.log('MongoDB conectado')
  } catch (err) {
    console.error('Falló la conexión a la Base de Datos', err)
    process.exit(1)
  }
}