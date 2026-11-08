const express = require('express');
const cors = require('cors');
const { createClient } = require('@libsql/client');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a Turso usando las variables de entorno
const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Crear tabla si no existe
async function initDB() {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS usuarios_piloto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        email TEXT,
        carrera TEXT,
        fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Base de datos y tabla verificadas correctamente.");
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
  }
}
initDB();

// Ruta de prueba para verificar que el servidor responde
app.get('/', (req, res) => {
  res.send('Servidor de EcoKit Universitario funcionando correctamente 🚀');
});

// Ruta para recibir los datos del formulario de la web
app.post('/api/registrar', async (req, res) => {
  const { nombre, email, carrera } = req.body;
  
  if (!nombre || !email || !carrera) {
    return res.status(400).json({ success: false, message: 'Faltan datos obligatorios.' });
  }

  try {
    await db.execute({
      sql: 'INSERT INTO usuarios_piloto (nombre, email, carrera) VALUES (?, ?, ?)',
      args: [nombre, email, carrera]
    });
    res.status(200).json({ success: true, message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error("Error al guardar en la base de datos:", error);
    res.status(500).json({ success: false, message: 'Error interno al guardar en la base de datos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));