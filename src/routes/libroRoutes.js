const express = require('express');
const router = express.Router();
const { 
  listarLibros, 
  listarLibrosDisponibles, 
  listarLibrosNoDisponibles,
  obtenerLibroPorId
} = require('../controllers/libroController');

router.get('/', listarLibros);
router.get('/disponibles', listarLibrosDisponibles);
router.get('/no-disponibles', listarLibrosNoDisponibles);
router.get('/:id', obtenerLibroPorId);

module.exports = router;
