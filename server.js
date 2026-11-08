const express = require('express');
const cors = require('cors');
const { createClient } = require('@libsql/client');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a Turso usando tus variables de entorno
const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Crear tabla si no existe
async function initDB() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS usuarios_piloto (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      email TEXT,
      carrera TEXT,
      fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}
initDB();

// Ruta para recibir los datos del formulario de la web
app.post('/api/registrar', async (req, res) => {
  const { nombre, email, carrera } = req.body;
  try {
    await db.execute({
      sql: 'INSERT INTO usuarios_piloto (nombre, email, carrera) VALUES (?, ?, ?)',
      args: [nombre, email, carrera]
    });
    res.status(200).json({ success: true, message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al guardar en la base de datos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));