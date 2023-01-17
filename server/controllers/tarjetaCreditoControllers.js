const tarjetaCreditoService = require("../services/tarjetaCreditoServices.js");

const obtenerListaDeTarjetaCredito = async (req, res) => {
  try {
    const listaTarjetaCredito = await tarjetaCreditoService.obtenerListaDeTarjetaCredito();

    res.status(200).send({ status: "OK", data: listaTarjetaCredito });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerTarjetaCreditoIndividual = async (req, res) => {
  const {
    params: { tarjetaCreditoId },
  } = req;

  try {
    const tarjetaCredito = await tarjetaCreditoService.obtenerTarjetaCreditoIndividual(tarjetaCreditoId);
    res.status(200).send({ status: "OK", data: tarjetaCredito });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarTarjetaCredito = async (req, res) => { 
    const {
        fecha_vencimiento,
        numero_tarjeta,
        banco,
        TipoApuesta,
        costo,
        apuesta,
     } =  req.body;

    const nuevaTarjetaCredito = {
      fecha_vencimiento,
      numero_tarjeta,
      banco,
      TipoApuesta,
      costo,
      apuesta,
    };

  try {
    await tarjetaCreditoService.registrarTarjetaCredito(nuevaTarjetaCredito);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado la tarjeta de credito de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarTarjetaCredito = async (req, res) => {
  const {
    body,
    params: { tarjetaCreditoId },
  } = req;

  try {
    await tarjetaCreditoService.actualizarTarjetaCredito(tarjetaCreditoId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion de la tarjeta de credito de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarTarjetaCredito = async (req, res) => {
  const {
    params: { tarjetaCreditoId },
  } = req;

  try {
    await tarjetaCreditoService.borrarTarjetaCredito(tarjetaCreditoId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `La tarjeta de credito con el id '${tarjetaCreditoId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeTarjetaCredito,
  obtenerTarjetaCreditoIndividual,
  registrarTarjetaCredito,
  actualizarTarjetaCredito,
  borrarTarjetaCredito,
};
