const RgoJinete = require("../database/rgoJinete.js");

const obtenerListaDeRgoJinetes = async () => {
  try {
    const listaRgoJinetes = await RgoJinete.obtenerListaDeRgoJinetes();

    return listaRgoJinetes;
  } catch (error) {
    throw error;
  }
};

const obtenerRgoJineteIndividual = async (rgoJineteId) => {
  try {
    const rgoJinete = await RgoJinete.obtenerRgoJineteIndividual(rgoJineteId);

    return rgoJinete;
  } catch (error) {
    throw error;
  }
};

const registrarRgoJinete = async (nuevoRgoJinete) => {
  try {
    const rgoJineteCreado = await RgoJinete.registrarRgoJinete(nuevoRgoJinete);

    return rgoJineteCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarRgoJinete = async (rgoJineteId, cambios) => {
  try {
    const rangoJineteActualizado = await RgoJinete.actualizarRgoJinete(
      rgoJineteId,
      cambios
    );

    return rangoJineteActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarRgoJinete = async (rgoJineteId) => {
  try {
    await RgoJinete.borrarRgoJinete(rgoJineteId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeRgoJinetes,
  obtenerRgoJineteIndividual,
  registrarRgoJinete,
  actualizarRgoJinete,
  borrarRgoJinete,
};
