const express = require('express');
const router = express.Router();
const { 
  listarAutores, 
  obtenerAutorPorId 
} = require('../controllers/autorController');

router.get('/', listarAutores);
router.get('/:id', obtenerAutorPorId);

module.exports = router;