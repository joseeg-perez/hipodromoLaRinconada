const TarjetaCredito = require("../database/tarjetaCredito.js");

const obtenerListaDeTarjetaCredito = async () => {
  try {
    const listaTarjetaCredito = await TarjetaCredito.obtenerListaDeTarjetaCredito();

    return listaTarjetaCredito;
  } catch (error) {
    throw error;
  }
};

const obtenerTarjetaCreditoIndividual = async (tarjetaCreditoId) => {
  try {
    const tarjetaCredito = await TarjetaCredito.obtenerTarjetaCreditoIndividual(tarjetaCreditoId);

    return tarjetaCredito;
  } catch (error) {
    throw error;
  }
};

const registrarTarjetaCredito = async (nuevaTarjetaCredito) => {
  try {
    await TarjetaCredito.registrarTarjetaCredito(nuevaTarjetaCredito);

    return;
  } catch (error) {
    
    throw error;
  }
};

const actualizarTarjetaCredito = async (tarjetaCreditoId, cambios) => {
  try {
    await TarjetaCredito.actualizarTarjetaCredito(tarjetaCreditoId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarTarjetaCredito = async (tarjetaCreditoId) => {
  try {
    await TarjetaCredito.borrarTarjetaCredito(tarjetaCreditoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeTarjetaCredito,
  obtenerTarjetaCreditoIndividual,
  registrarTarjetaCredito,
  actualizarTarjetaCredito,
  borrarTarjetaCredito,
};
