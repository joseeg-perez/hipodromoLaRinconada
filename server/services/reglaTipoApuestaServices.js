const ReglaTipoApuesta = require("../database/reglaTipoApuesta.js");

const obtenerListaDeReglaTipoApuesta = async () => {
  try {
    const listaReglaTipoApuesta =
      await ReglaTipoApuesta.obtenerListaDeReglaTipoApuesta();

    return listaReglaTipoApuesta;
  } catch (error) {
    throw error;
  }
};

const obtenerReglaTipoApuestaIndividual = async (reglaTipoApuestaId) => {
  try {
    const reglaTipoApuesta = await ReglaTipoApuesta.obtenerReglaTipoApuestaIndividual(reglaTipoApuestaId);

    return reglaTipoApuesta;
  } catch (error) {
    throw error;
  }
};

const registrarReglaTipoApuesta = async (nuevoReglaTipoApuesta) => {
  try {
    await ReglaTipoApuesta.registrarReglaTipoApuesta(nuevoReglaTipoApuesta);

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarReglaTipoApuesta = async (reglaTipoApuestaId, cambios) => {
  try {
    const reglatipoApuestaActualizado =
      await ReglaTipoApuesta.actualizarReglaTipoApuesta(reglaTipoApuestaId, cambios);

    return reglatipoApuestaActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarReglaTipoApuesta = async (reglaTipoApuestaId) => {
  try {
    await ReglaTipoApuesta.borrarReglaTipoApuesta(reglaTipoApuestaId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeReglaTipoApuesta,
  obtenerReglaTipoApuestaIndividual,
  registrarReglaTipoApuesta,
  actualizarReglaTipoApuesta,
  borrarReglaTipoApuesta,
};
