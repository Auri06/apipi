const Autor = require('../models/Autor');
const Libro = require('../models/Libro');

const autores = [
  new Autor(1, "Gabriel García Márquez", "Colombiana"),
  new Autor(2, "Jorge Luis Borges", "Argentina"),
  new Autor(3, "Isabel Allende", "Chilena")
];

const libros = [
  new Libro(1, "Cien Años de Soledad", "Gabriel García Márquez", 1967, true),
  new Libro(2, "El Aleph", "Jorge Luis Borges", 1949, false),
  new Libro(3, "La Casa de los Espíritus", "Isabel Allende", 1982, true),
  new Libro(4, "Crónica de una Muerte Anunciada", "Gabriel García Márquez", 1981, false)
];

module.exports = { autores, libros };