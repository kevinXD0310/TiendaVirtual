const express = require('express');
const { db, bucket, auth } = require('./conexion');

const app = express();
app.use(express.json());

// Ruta para agregar datos a Firestore
app.post('/add-product', async (req, res) => {
    try {
        const { nombre, precio } = req.body;
        const docRef = await db.collection('productos').add({ nombre, precio });
        res.status(201).json({ id: docRef.id, message: 'Producto agregado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar producto' });
    }
});

// Ruta para subir un archivo al Storage
app.post('/upload', async (req, res) => {
    try {
        const { filePath, fileName } = req.body; // Ruta local del archivo y nombre
        await bucket.upload(filePath, {
            destination: `uploads/${fileName}`,
            metadata: {
            contentType: 'image/jpeg', // Cambia según el tipo de archivo
        },
    });
        res.status(201).json({ message: 'Archivo subido exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al subir archivo' });
    }
});

// Ruta para crear un usuario con Authentication
app.post('/create-user', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await auth.createUser({ email, password });
        res.status(201).json({ uid: user.uid, message: 'Usuario creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear usuario' });
    }
});

// Inicia el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
