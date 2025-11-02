import app from './app.js'
import { load } from './dataStore.js'  
import connectDB from '../db.js'       
import 'dotenv/config'                

const PORT = process.env.PORT || 3000

// para conectar la base de datos
Promise.all([
  load(),           
  connectDB()       // ← Conectar a mongo
])
.then(() => {
  app.listen(PORT, () => {
    console.log(`API lista en http://localhost:${PORT}`)
    console.log('conectado a la base de datos')  
  })
})
.catch(err => {
  console.error('Error al cargar los datos:', err)
  process.exit(1)
})