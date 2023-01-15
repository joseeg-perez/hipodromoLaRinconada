const ReglaApuesta = require("../database/reglaApuesta.js");

const obtenerListaDeReglaApuesta = async () => {
  try {
    const listaReglaApuesta =
      await ReglaApuesta.obtenerListaDeReglaApuesta();

    return listaReglaApuesta;
  } catch (error) {
    throw error;
  }
};

const obtenerReglaApuestaIndividual = async (reglaApuestaId) => {
  try {
    const reglaApuesta = await ReglaApuesta.obtenerReglaApuestaIndividual(reglaApuestaId);

    return reglaApuesta;
  } catch (error) {
    throw error;
  }
};

const registrarReglaApuesta = async (nuevoReglaApuesta) => {
  try {
    await ReglaApuesta.registrarReglaApuesta(nuevoReglaApuesta);

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarReglaApuesta = async (reglaApuestaId, cambios) => {
  try {
    const ReglaApuestaActualizado =
      await ReglaApuesta.actualizarReglaApuesta(reglaApuestaId, cambios);

    return ReglaApuestaActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarReglaApuesta = async (reglaApuestaId) => {
  try {
    await ReglaApuesta.borrarReglaApuesta(reglaApuestaId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeReglaApuesta,
  obtenerReglaApuestaIndividual,
  registrarReglaApuesta,
  actualizarReglaApuesta,
  borrarReglaApuesta,
};
