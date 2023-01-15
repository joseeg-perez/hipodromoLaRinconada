const tarjetaDebitoService = require("../services/tarjetaDebitoServices.js");

const obtenerListaDeTarjetaDebito = async (req, res) => {
  try {
    const listaTarjetaDebitos = await tarjetaDebitoService.obtenerListaDeTarjetaDebito();

    res.status(200).send({ status: "OK", data: listaTarjetaDebitos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerTarjetaDebitoIndividual = async (req, res) => {
  const {
    params: { tarjetaDebitoId },
  } = req;

  try {
    const tarjetaDebito = await tarjetaDebitoService.obtenerTarjetaDebitoIndividual(tarjetaDebitoId);
    res.status(200).send({ status: "OK", data: tarjetaDebito });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarTarjetaDebito = async (req, res) => { 
    const {
        fechaVencimiento,
        tipoCuenta,
        numeroTarjeta,
        fkBanco,
     } =  req.body;

    const nuevaTarjetaDebito = {
        fechaVencimiento,
        tipoCuenta,
        numeroTarjeta,
        fkBanco,
    };

  try {
    await tarjetaDebitoService.registrarTarjetaDebito(nuevaTarjetaDebito);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado la tarjeta de debito de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarTarjetaDebito = async (req, res) => {
  const {
    body,
    params: { tarjetaDebitoId },
  } = req;

  try {
    await tarjetaDebitoService.actualizarTarjetaDebito(tarjetaDebitoId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion de la tarjeta de debito de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarTarjetaDebito = async (req, res) => {
  const {
    params: { tarjetaDebitoId },
  } = req;

  try {
    await tarjetaDebitoService.borrarTarjetaDebito(tarjetaDebitoId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `La tarjeta de debito con el id '${tarjetaDebitoId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeTarjetaDebito,
  obtenerTarjetaDebitoIndividual,
  registrarTarjetaDebito,
  actualizarTarjetaDebito,
  borrarTarjetaDebito,
};
