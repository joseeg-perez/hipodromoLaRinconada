const pagoService = require("../services/pagoServices.js");

const obtenerListaDePagos = async (req, res) => {
  try {
    const listaPagos = await pagoService.obtenerListaDePagos();

    res.status(200).send({ status: "OK", data: listaPagos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerPagoIndividual = async (req, res) => {
  const {
    params: { pagoId },
  } = req;

  try {
    const pago = await pagoService.obtenerPagoIndividual(pagoId);
    res.status(200).send({ status: "OK", data: pago });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarPago = async (req, res) => {
  const { 
        montoPago,
        fechaPago,
        fkCompra,
        fkTd,
        fkTc,
        fkEfectivo,
    } = req.body;

  const nuevoPago = {
        montoPago,
        fechaPago,
        fkCompra,
        fkTd,
        fkTc,
        fkEfectivo,
  };

  try {
    await pagoService.registrarPago(nuevoPago);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el pago de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarPago = async (req, res) => {
  const {
    body,
    params: { pagoId },
  } = req;

  try {
    await pagoService.actualizarPago(pagoId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del pago de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarPago = async (req, res) => {
  const {
    params: { pagoId },
  } = req;

  try {
    await pagoService.borrarPago(pagoId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El pago con el id '${pagoId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDePagos,
  obtenerPagoIndividual,
  registrarPago,
  actualizarPago,
  borrarPago,
};
