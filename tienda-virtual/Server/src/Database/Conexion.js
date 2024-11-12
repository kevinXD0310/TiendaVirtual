const { execSync } = require('child_process');
const admin = require('firebase-admin');

try {
    // Ejecuta el comando para descifrar el archivo GPG y obtener el contenido en memoria
    const decryptedCredentials = execSync('gpg --batch --decrypt ./sknails-78b8f-firebase-adminsdk-gw4jd-e76f7c9372.json.gpg', { encoding: 'utf-8' });

    // Parsear las credenciales descifradas como JSON
    const serviceAccount = JSON.parse(decryptedCredentials);

    // Inicializa Firebase Admin
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: 'gs://sknails-78b8f.firebasestorage.app',
    });

    // Exportar Firestore, Storage y Authentication
    const db = admin.firestore(); // Firestore
    const bucket = admin.storage().bucket(); // Storage
    const auth = admin.auth(); // Authentication

    module.exports = { db, bucket, auth };
} catch (error) {
    console.error('Error al descifrar el archivo GPG o inicializar Firebase:', error.message);
    process.exit(1);
}
