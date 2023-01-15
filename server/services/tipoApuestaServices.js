const TipoApuesta = require("../database/tipoApuesta.js");
const { registrarReglaTipoApuesta } = require("./reglaTipoApuestaServices.js");

const obtenerListaDeTipoApuesta = async () => {
  try {
    const listaTipoApuesta =
      await TipoApuesta.obtenerListaDeTipoApuesta();

    return listaTipoApuesta;
  } catch (error) {
    throw error;
  }
};

const obtenerTipoApuestaIndividual = async (tipoApuestaId) => {
  try {
    const tipoApuesta = await TipoApuesta.obtenerTipoApuestaIndividual(
      tipoApuestaId
    );

    return tipoApuesta;
  } catch (error) {
    throw error;
  }
};

const registrarTipoApuesta = async (nuevoTipoApuesta) => {
  try {
    const tipoApuestaCreado = await TipoApuesta.registrarTipoApuesta(nuevoTipoApuesta);
    const idTipoApuestaCreado = (await TipoApuesta.obtenerListaDeTipoApuesta()).pop().codigo_apuesta;

    const listadoCarreraRegla = nuevoTipoApuesta.carreraRegla;
    for (let i = 0; i < listadoCarreraRegla.length; i++) {

      const reglaTipoApuestaNuevo = {
        fkReglaApuesta: listadoCarreraRegla[i].fk_regla,
        fkTipoApuesta: idTipoApuestaCreado,  
        valorRegla: listadoCarreraRegla[i].valor_regla
      }
      await registrarReglaTipoApuesta(reglaTipoApuestaNuevo);
    }

    return tipoApuestaCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarTipoApuesta = async (tipoApuestaId, cambios) => {
  try {
    const tipoApuestaActualizado =
      await TipoApuesta.actualizarTipoApuesta(tipoApuestaId, cambios);

    return tipoApuestaActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarTipoApuesta = async (tipoApuestaId) => {
  try {
    await TipoApuesta.borrarTipoApuesta(tipoApuestaId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeTipoApuesta,
  obtenerTipoApuestaIndividual,
  registrarTipoApuesta,
  actualizarTipoApuesta,
  borrarTipoApuesta,
};
