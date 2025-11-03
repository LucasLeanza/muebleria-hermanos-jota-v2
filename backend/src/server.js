import 'dotenv/config'  
import app from './app.js' 
import connectDB from '../db.js'       
              

const PORT = process.env.PORT || 3000

connectDB().then(() => {
  app.listen(PORT, '0.0.0.0' ,() => {
    console.log(`API lista en http://localhost:${PORT}`)
    console.log('conectado a la base de datos')  
  })
})
.catch(err => {
  console.error('Error al conectar a la base de datos:', err)
  process.exit(1)
})