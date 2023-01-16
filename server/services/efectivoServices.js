const Efectivo = require("../database/efectivo.js");

const obtenerListaDeEfectivos = async () => {
  try {
    const listaEfectivos = await Efectivo.obtenerListaDeEfectivos();

    return listaEfectivos;
  } catch (error) {
    throw error;
  }
};

const obtenerEfectivoIndividual = async (efectivoId) => {
  try {
    const efectivo = await Efectivo.obtenerEfectivoIndividual(efectivoId);

    return efectivo;
  } catch (error) {
    throw error;
  }
};

const registrarEfectivo = async (nuevoEfectivo) => {
  try {
    await Efectivo.registrarEfectivo(nuevoEfectivo);

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarEfectivo = async (efectivoId, cambios) => {
  try {
    await Efectivo.actualizarEfectivo(efectivoId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarEfectivo = async (efectivoId) => {
  try {
    await Efectivo.borrarEfectivo(efectivoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeEfectivos,
  obtenerEfectivoIndividual,
  registrarEfectivo,
  actualizarEfectivo,
  borrarEfectivo,
};
