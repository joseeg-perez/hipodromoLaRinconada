const TarjetaDebito = require("../database/tarjetaDebito.js");

const obtenerListaDeTarjetaDebito = async () => {
  try {
    const listaTarjetaDebitos = await TarjetaDebito.obtenerListaDeTarjetaDebito();

    return listaTarjetaDebitos;
  } catch (error) {
    throw error;
  }
};

const obtenerTarjetaDebitoIndividual = async (tarjetaDebitoId) => {
  try {
    const tarjetaDebito = await TarjetaDebito.obtenerTarjetaDebitoIndividual(tarjetaDebitoId);

    return tarjetaDebito;
  } catch (error) {
    throw error;
  }
};

const registrarTarjetaDebito = async (nuevaTarjetaDebito) => {
  try {
    await TarjetaDebito.registrarTarjetaDebito(nuevaTarjetaDebito);

    return;
  } catch (error) {
    
    throw error;
  }
};

const actualizarTarjetaDebito = async (tarjetaDebitoId, cambios) => {
  try {
    await TarjetaDebito.actualizarTarjetaDebito(tarjetaDebitoId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarTarjetaDebito = async (tarjetaDebitoId) => {
  try {
    await TarjetaDebito.borrarTarjetaDebito(tarjetaDebitoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeTarjetaDebito,
  obtenerTarjetaDebitoIndividual,
  registrarTarjetaDebito,
  actualizarTarjetaDebito,
  borrarTarjetaDebito,
};
