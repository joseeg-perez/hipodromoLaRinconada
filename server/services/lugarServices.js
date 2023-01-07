const Lugar = require("../database/Lugar.js");

const obtenerListaDeLugares = async () => {
  try {
    const listaLugares = await Lugar.obtenerListaDeLugares();

    return listaLugares;
  } catch (error) {
    throw error;
  }
};

const obtenerEMP = async () => {
  try {
    const listaEMP = await Lugar.obtenerEMP();

    return listaEMP;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeLugares,
  obtenerEMP,
};
