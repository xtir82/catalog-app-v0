import mongoose from 'mongoose';

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true
    }
    console.log(process.env.MONGODB_URI)

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB conectado correctamente');
        return true;
    } catch(error) {
        console.error('Error al conectar con MongoDB:', error);
        throw new Error('Fallo la conexion con MongoDB');
    }
}

export default connectDB;