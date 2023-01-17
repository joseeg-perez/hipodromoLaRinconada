const Efectivo = require("../database/efectivo.js");
const { obtenerUltimoId } = require("../helpers/queryHelper.js");
const { registrarCompraApuesta } = require("../database/compraApuesta.js");
const { registrarPago } = require("../database/pago.js");
const { registrarApuestaParticipacion } = require("../database/apuestaParticipacion.js");


const obtenerListaDeEfectivos = async () => {
  try {
    const listaEfectivos = await Efectivo.obtenerListaDeEfectivos();

    return listaEfectivos;
  } catch (error) {
    throw error;
  }
};

const obtenerEfectivoIndividual = async (efectivoId) => {
  try {
    const efectivo = await Efectivo.obtenerEfectivoIndividual(efectivoId);

    return efectivo;
  } catch (error) {
    throw error;
  }
};

const registrarEfectivo = async (nuevoEfectivo) => {
  try {
    await Efectivo.registrarEfectivo(nuevoEfectivo);
    const idEfectivoNuevo = await obtenerUltimoId("codigo_metodo", "metodo_pago_efectivo");
    const nuevaCompraApuesta = {
      montoTotal: nuevoEfectivo.costo,
      fkCliente: 1,
      fkTipoApuesta: nuevoEfectivo.TipoApuesta,
      fkTaquilla: 1,
    }
    await registrarCompraApuesta(nuevaCompraApuesta);
    const idCompraApuestaNueva = await obtenerUltimoId("codigo_compra", "compra_apuesta");

    const nuevoPago = {
        montoPago: nuevoEfectivo.costo,
        fkCompra: idCompraApuestaNueva,
        fkEfectivo: idEfectivoNuevo,
    }
    await registrarPago(nuevoPago);
    const idPagoNuevo = await obtenerUltimoId("codigo_pago", "pago");

    const listaApuesta = nuevoEfectivo.apuesta;
    for (let i = 0; i < listaApuesta.length; i++) {
      const nuevaApuestaParticipacion = {
        fkParticipacion: listaApuesta[i].participacion[0].codigo_participacion,
        fkTipoApuesta: nuevoEfectivo.TipoApuesta,
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

const actualizarEfectivo = async (efectivoId, cambios) => {
  try {
    await Efectivo.actualizarEfectivo(efectivoId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarEfectivo = async (efectivoId) => {
  try {
    await Efectivo.borrarEfectivo(efectivoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeEfectivos,
  obtenerEfectivoIndividual,
  registrarEfectivo,
  actualizarEfectivo,
  borrarEfectivo,
};
