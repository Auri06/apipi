const { libros } = require('../data/datos');

exports.listarLibros = (req, res) => {
  res.json(libros);
};

exports.listarLibrosDisponibles = (req, res) => {
  const librosDisponibles = libros.filter(libro => libro.disponible);
  res.json(librosDisponibles);
};

exports.listarLibrosNoDisponibles = (req, res) => {
  const librosNoDisponibles = libros.filter(libro => !libro.disponible);
  res.json(librosNoDisponibles);
};

exports.obtenerLibroPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const libro = libros.find(l => l.id === id);
  
  if (libro) {
    res.json(libro);
  } else {
    res.status(404).json({ mensaje: "Libro no encontrado" });
  }
};

