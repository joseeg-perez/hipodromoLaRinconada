const TarjetaDebito = require("../database/tarjetaDebito.js");
const { obtenerUltimoId } = require("../helpers/queryHelper.js");
const { registrarCompraApuesta } = require("../database/compraApuesta.js");
const { registrarPago } = require("../database/pago.js");
const { registrarApuestaParticipacion } = require("../database/apuestaParticipacion.js");

const obtenerListaDeTarjetaDebito = async () => {
  try {
    const listaTarjetaDebito = await TarjetaDebito.obtenerListaDeTarjetaDebito();

    return listaTarjetaDebito;
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
    const idTarjetaDebitoNueva = await obtenerUltimoId("codigo_metodo", "metodo_pago_td");
    const nuevaCompraApuesta = {
      montoTotal: nuevaTarjetaDebito.costo,
      fkCliente: 1,
      fkTipoApuesta: nuevaTarjetaDebito.TipoApuesta,
      fkTaquilla: 1,
    }
    await registrarCompraApuesta(nuevaCompraApuesta);
    const idCompraApuestaNueva = await obtenerUltimoId("codigo_compra", "compra_apuesta");

    const nuevoPago = {
        montoPago: nuevaTarjetaDebito.costo,
        fkCompra: idCompraApuestaNueva,
        fkTd: idTarjetaDebitoNueva,
    }
    await registrarPago(nuevoPago);
    const idPagoNuevo = await obtenerUltimoId("codigo_pago", "pago");


    const listaApuesta = nuevaTarjetaDebito.apuesta;
    for (let i = 0; i < listaApuesta.length; i++) {
      const nuevaApuestaParticipacion = {
        fkParticipacion: listaApuesta[i].participacion[0].codigo_participacion,
        fkTipoApuesta: nuevaTarjetaDebito.TipoApuesta,
        posicion: listaApuesta[i].posicion,
        fkPago: idPagoNuevo,
      }
      await registrarApuestaParticipacion(nuevaApuestaParticipacion)      
    }

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
