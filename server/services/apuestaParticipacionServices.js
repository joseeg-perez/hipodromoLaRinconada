const ApuestaParticipacion = require("../database/apuestaParticipacion.js");

const obtenerListaDeApuestaParticipacion = async () => {
  try {
    const listaApuestaParticipacion =
      await ApuestaParticipacion.obtenerListaDeApuestaParticipacion();

    return listaApuestaParticipacion;
  } catch (error) {
    throw error;
  }
};

const obtenerApuestaParticipacionIndividual = async (apuestaParticipacionId) => {
  try {
    const apuestaParticipacion = await ApuestaParticipacion.obtenerApuestaParticipacionIndividual(apuestaParticipacionId);

    return apuestaParticipacion;
  } catch (error) {
    throw error;
  }
};

const registrarApuestaParticipacion = async (nuevoApuestaParticipacion) => {
  try {
    await ApuestaParticipacion.registrarApuestaParticipacion(nuevoApuestaParticipacion);

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarApuestaParticipacion = async (apuestaParticipacionId, cambios) => {
  try {
    await ApuestaParticipacion.actualizarApuestaParticipacion(apuestaParticipacionId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarApuestaParticipacion = async (apuestaParticipacionId) => {
  try {
    await ApuestaParticipacion.borrarApuestaParticipacion(apuestaParticipacionId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeApuestaParticipacion,
  obtenerApuestaParticipacionIndividual,
  registrarApuestaParticipacion,
  actualizarApuestaParticipacion,
  borrarApuestaParticipacion,
};
