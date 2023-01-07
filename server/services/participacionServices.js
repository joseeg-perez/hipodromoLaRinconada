const Participacion = require("../database/participacion.js");

const obtenerListaDeParticipaciones = async () => {
  try {
    const listaParticipaciones =
      await Participacion.obtenerListaDeParticipaciones();

    return listaParticipaciones;
  } catch (error) {
    throw error;
  }
};

const obtenerParticipacionIndividual = async (participacionId) => {
  try {
    const participacion = await Participacion.obtenerParticipacionIndividual(
      participacionId
    );

    return participacion;
  } catch (error) {
    throw error;
  }
};

const registrarParticipacion = async (nuevaParticipacion) => {
  try {
    const participacionCreada = await Participacion.registrarParticipacion(
      nuevaParticipacion
    );

    return participacionCreada;
  } catch (error) {
    throw error;
  }
};

const actualizarParticipacion = async (participacionId, cambios) => {};

const borrarParticipacion = async (participacionId) => {
  try {
    await Participacion.borrarParticipacion(participacionId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeParticipaciones,
  obtenerParticipacionIndividual,
  registrarParticipacion,
  actualizarParticipacion,
  borrarParticipacion,
};
