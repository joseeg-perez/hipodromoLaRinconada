const Hara = require("../database/hara.js");

const obtenerListaDeHaras = async () => {
  try {
    const listaHaras = await Hara.obtenerListaDeHaras();

    return listaHaras;
  } catch (error) {
    throw error;
  }
};

const obtenerHaraIndividual = async (haraId) => {
  try {
    const hara = await Hara.obtenerHaraIndividual(haraId);

    return hara;
  } catch (error) {
    throw error;
  }
};

const registrarHara = async (nuevaHara) => {
  try {
    const haraCreada = await Hara.registrarHara(nuevaHara);

    return haraCreada;
  } catch (error) {
    throw error;
  }
};

const actualizarHara = async (haraId, cambios) => {
  try {
    const haraActualizada = await Hara.actualizarHara(haraId, cambios);

    return haraActualizada;
  } catch (error) {
    throw error;
  }
};

const borrarHara = async (haraId) => {
  try {
    await Hara.borrarHara(haraId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeHaras,
  obtenerHaraIndividual,
  registrarHara,
  actualizarHara,
  borrarHara,
};
