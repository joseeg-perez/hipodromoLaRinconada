const Ejemplar = require("../database/ejemplar.js");

const obtenerListaDeEjemplares = async () => {
  try {
    const listaEjemplares = await Ejemplar.obtenerListaDeEjemplares();

    return listaEjemplares;
  } catch (error) {
    throw error;
  }
};

const obtenerEjemplarIndividual = async (ejemplarId) => {
  try {
    const ejemplar = await Ejemplar.obtenerEjemplarIndividual(ejemplarId);

    return ejemplar;
  } catch (error) {
    throw error;
  }
};

const registrarEjemplar = async (nuevoEjemplar) => {
  try {
    const ejemplarCreado = await Ejemplar.registrarEjemplar(nuevoEjemplar);

    return ejemplarCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarEjemplar = async (ejemplarId, cambios) => {
  try {
    const ejemplarActualizado = await Ejemplar.actualizarEjemplar(
      ejemplarId,
      cambios
    );

    return ejemplarActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarEjemplar = async (ejemplarId) => {
  try {
    await Ejemplar.borrarEjemplar(ejemplarId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeEjemplares,
  obtenerEjemplarIndividual,
  registrarEjemplar,
  actualizarEjemplar,
  borrarEjemplar,
};
