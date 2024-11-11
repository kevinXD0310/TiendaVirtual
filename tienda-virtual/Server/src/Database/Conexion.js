const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //URI de conexión de MongoDB
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/tu_base_de_datos';
    
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    
    console.log('Conectado a MongoDB correctamente');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1); // Termina el proceso en caso de error
    }
};

module.exports = connectDB;