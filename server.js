// ==========================================================
// SERVIDOR DE ECOKIT UNIVERSITARIO
// Express + Turso (libSQL), desplegado en Render
// ==========================================================

const express = require('express');
const cors = require('cors');
const { createClient } = require('@libsql/client');
require('dotenv').config();

const aplicacion = express();
aplicacion.use(express.json());
aplicacion.use(cors());

// ----------------------------------------------------------
// 1. VERIFICAR VARIABLES DE ENTORNO
// Si faltan, lo mostramos claro en los logs de Render
// ----------------------------------------------------------
const urlBaseDatos = process.env.TURSO_DATABASE_URL;
const tokenBaseDatos = process.env.TURSO_AUTH_TOKEN;

if (!urlBaseDatos || !tokenBaseDatos) {
  console.error("❌ FALTAN VARIABLES DE ENTORNO: revisa TURSO_DATABASE_URL y TURSO_AUTH_TOKEN en Render > Environment.");
} else {
  console.log("✅ Variables de entorno de Turso encontradas.");
}

// ----------------------------------------------------------
// 2. CONEXIÓN A TURSO
// ----------------------------------------------------------
const baseDatos = createClient({
  url: urlBaseDatos,
  authToken: tokenBaseDatos,
});

// ----------------------------------------------------------
// 3. CREAR LA TABLA SI NO EXISTE
// ----------------------------------------------------------
async function inicializarBaseDatos() {
  try {
    await baseDatos.execute(`
      CREATE TABLE IF NOT EXISTS usuarios_piloto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        email TEXT,
        carrera TEXT,
        fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Base de datos y tabla 'usuarios_piloto' verificadas correctamente.");
  } catch (error) {
    console.error("❌ Error al inicializar la base de datos:", error.message);
  }
}
inicializarBaseDatos();

// ----------------------------------------------------------
// 4. RUTA DE PRUEBA: ¿el servidor está vivo?
// ----------------------------------------------------------
aplicacion.get('/', (peticion, respuesta) => {
  respuesta.send('Servidor de EcoKit Universitario funcionando correctamente 🚀');
});

// ----------------------------------------------------------
// 5. RUTA DE DIAGNÓSTICO: ¿hay conexión con Turso?
// Abre en el navegador: https://ecokit-universitario.onrender.com/api/salud
// ----------------------------------------------------------
aplicacion.get('/api/salud', async (peticion, respuesta) => {
  try {
    const resultado = await baseDatos.execute('SELECT COUNT(*) AS total FROM usuarios_piloto');
    respuesta.json({
      conexionTurso: 'OK',
      totalRegistrados: resultado.rows[0].total
    });
  } catch (error) {
    respuesta.status(500).json({
      conexionTurso: 'ERROR',
      detalle: error.message
    });
  }
});

// ----------------------------------------------------------
// 6. RUTA PARA REGISTRAR USUARIOS DEL FORMULARIO
// ----------------------------------------------------------
aplicacion.post('/api/registrar', async (peticion, respuesta) => {
  const { nombre, email, carrera } = peticion.body;
  console.log("📩 Registro recibido:", { nombre, email, carrera });

  if (!nombre || !email || !carrera) {
    return respuesta.status(400).json({ success: false, message: 'Faltan datos obligatorios.' });
  }

  try {
    await baseDatos.execute({
      sql: 'INSERT INTO usuarios_piloto (nombre, email, carrera) VALUES (?, ?, ?)',
      args: [nombre, email, carrera]
    });
    console.log("✅ Usuario guardado en Turso:", email);
    respuesta.status(200).json({ success: true, message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error("❌ Error al guardar en Turso:", error.message);
    respuesta.status(500).json({ success: false, message: 'Error interno al guardar en la base de datos' });
  }
});

// ----------------------------------------------------------
// 7. INICIAR SERVIDOR
// ----------------------------------------------------------
const PUERTO = process.env.PORT || 3000;
aplicacion.listen(PUERTO, () => console.log(`🚀 Servidor corriendo en el puerto ${PUERTO}`));