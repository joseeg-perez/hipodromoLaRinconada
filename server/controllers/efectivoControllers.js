const efectivoService = require("../services/efectivoServices.js");

const obtenerListaDeEfectivos = async (req, res) => {
  try {
    const listaEfectivos = await efectivoService.obtenerListaDeEfectivos();

    res.status(200).send({ status: "OK", data: listaEfectivos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerEfectivoIndividual = async (req, res) => {
  const {
    params: { efectivoId },
  } = req;

  try {
    const efectivo = await efectivoService.obtenerEfectivoIndividual(efectivoId);
    res.status(200).send({ status: "OK", data: efectivo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarEfectivo = async (req, res) => {
  const { 
      TipoApuesta,
      costo,
      denominacion,
      apuesta,
  } = req.body;

  const nuevoEfectivo = {
      TipoApuesta,
      costo,
      denominacion,
      apuesta,
  };

  try {
    await efectivoService.registrarEfectivo(nuevoEfectivo);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el efectivo de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarEfectivo = async (req, res) => {
  const {
    body,
    params: { efectivoId },
  } = req;

  try {
    await efectivoService.actualizarEfectivo(efectivoId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del efectivo de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarEfectivo = async (req, res) => {
  const {
    params: { efectivoId },
  } = req;

  try {
    await efectivoService.borrarEfectivo(efectivoId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El efectivo con el id '${efectivoId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeEfectivos,
  obtenerEfectivoIndividual,
  registrarEfectivo,
  actualizarEfectivo,
  borrarEfectivo,
};
