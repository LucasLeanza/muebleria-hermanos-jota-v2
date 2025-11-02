//prueba para verificar si se conecta correctamente
import 'dotenv/config';
import connectDB from './db.js';

console.log('Probando conexión...');
connectDB();