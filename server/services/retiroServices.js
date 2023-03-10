const Retiro = require("../database/Retiro.js");
const { actualizarParticipacion } = require("./participacionServices.js");

const obtenerListaDeRetiros = async () => {
  try {
    const listaRetiros = await Retiro.obtenerListaDeRetiros();

    return listaRetiros;
  } catch (error) {
    throw error;
  }
};

const obtenerRetiroIndividual = async (retiroId) => {
  try {
    const retiro = await Retiro.obtenerRetiroIndividual(retiroId);

    return retiro;
  } catch (error) {
    throw error;
  }
};

const registrarRetiro = async (nuevoRetiro) => {
  try {
      await Retiro.registrarRetiro(nuevoRetiro);
      const fkRetiro = (await Retiro.obtenerListaDeRetiros()).pop().codigo_retiro;
      const nuevaParticipacion = {
        fkRetiro,
      }
      await actualizarParticipacion(nuevoRetiro.codigoParticipacion, nuevaParticipacion);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const actualizarRetiro = async (retiroId, cambios) => {
  try {
    await Retiro.actualizarRetiro(retiroId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarRetiro = async (retiroId) => {
  try {
    await Retiro.borrarRetiro(retiroId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeRetiros,
  obtenerRetiroIndividual,
  registrarRetiro,
  actualizarRetiro,
  borrarRetiro,
};
