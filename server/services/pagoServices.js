const Pago = require("../database/pago.js");

const obtenerListaDePagos = async () => {
  try {
    const listaPagos = await Pago.obtenerListaDePagos();

    return listaPagos;
  } catch (error) {
    throw error;
  }
};

const obtenerPagoIndividual = async (pagoId) => {
  try {
    const pago = await Pago.obtenerPagoIndividual(pagoId);

    return pago;
  } catch (error) {
    throw error;
  }
};

const registrarPago = async (nuevoPago) => {
  try {
    await Pago.registrarPago(nuevoPago);

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarPago = async (pagoId, cambios) => {
  try {
    await Pago.actualizarPago(pagoId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarPago = async (pagoId) => {
  try {
    await Pago.borrarPago(pagoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDePagos,
  obtenerPagoIndividual,
  registrarPago,
  actualizarPago,
  borrarPago,
};
