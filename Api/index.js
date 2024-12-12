const express = require('express');
const cors = require('cors');

const autorRoutes = require('../src/routes/autorRoutes');
const libroRoutes = require('../src/routes/libroRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/autores', autorRoutes);
app.use('/api/libros', libroRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    mensaje: "Bienvenido a la API de Biblioteca",
    rutas: {
      autores: "/api/autores",
      libros: "/api/libros",
      librosDisponibles: "/api/libros/disponibles",
      librosNoDisponibles: "/api/libros/no-disponibles"
    }
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ mensaje: "Ruta no encontrada" });
});

module.exports = app;
