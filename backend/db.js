import mongoose from 'mongoose';
import 'dotenv/config';

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Conectado a la base de datos: ' + mongoose.connection.db.databaseName);
    } catch (error) {
        console.log('no se ha podido conectar: ' + error.message);
    }
}
export default connectDB;