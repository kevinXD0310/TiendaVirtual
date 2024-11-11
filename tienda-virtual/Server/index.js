const express = require('express');
const connectDB = require('./src/Database/Conexion'); // Asegúrate de usar la ruta correcta a 'conexion.js'

const app = express();

// Conectar a MongoDB
connectDB();

// Configurar middlewares, rutas, etc.
app.use(express.json());

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
