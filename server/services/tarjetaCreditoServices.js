const TarjetaCredito = require("../database/tarjetaCredito.js");
const { obtenerUltimoId } = require("../helpers/queryHelper.js");
const { registrarCompraApuesta } = require("../database/compraApuesta.js");
const { registrarPago } = require("../database/pago.js");
const { registrarApuestaParticipacion } = require("../database/apuestaParticipacion.js");

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
    const idTarjetaCreditoNueva = await obtenerUltimoId("codigo_metodo", "metodo_pago_tc");
    const nuevaCompraApuesta = {
      montoTotal: nuevaTarjetaCredito.costo,
      fkCliente: 1,
      fkTipoApuesta: nuevaTarjetaCredito.TipoApuesta,
      fkTaquilla: 1,
    }
    await registrarCompraApuesta(nuevaCompraApuesta);
    const idCompraApuestaNueva = await obtenerUltimoId("codigo_compra", "compra_apuesta");

    const nuevoPago = {
        montoPago: nuevaTarjetaCredito.costo,
        fkCompra: idCompraApuestaNueva,
        fkTc: idTarjetaCreditoNueva,
    }
    await registrarPago(nuevoPago);
    const idPagoNuevo = await obtenerUltimoId("codigo_pago", "pago");

    const listaApuesta = nuevaTarjetaCredito.apuesta;
    for (let i = 0; i < listaApuesta.length; i++) {
      const nuevaApuestaParticipacion = {
        fkParticipacion: listaApuesta[i].participacion[0].codigo_participacion,
        fkTipoApuesta: nuevaTarjetaCredito.TipoApuesta,
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
