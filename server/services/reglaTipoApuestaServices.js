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
    const ReglatipoApuesta = await ReglaTipoApuesta.obtenerReglaTipoApuestaIndividual(reglaTipoApuestaId);

    return ReglatipoApuesta;
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
    const ReglatipoApuestaActualizado =
      await ReglaTipoApuesta.actualizarReglaTipoApuesta(reglaTipoApuestaId, cambios);

    return ReglatipoApuestaActualizado;
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
