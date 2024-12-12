const { autores } = require('../data/datos');

exports.listarAutores = (req, res) => {
  res.json(autores);
};

exports.obtenerAutorPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const autor = autores.find(a => a.id === id);
  
  if (autor) {
    res.json(autor);
  } else {
    res.status(404).json({ mensaje: "Autor no encontrado" });
  }
};
