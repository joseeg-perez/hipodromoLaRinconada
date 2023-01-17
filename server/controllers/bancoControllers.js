const bancoService = require("../services/bancoServices.js");

const obtenerListaDeBancos = async (req, res) => {
  try {
    const listaBancos = await bancoService.obtenerListaDeBancos();

    res.status(200).send({ status: "OK", data: listaBancos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerBancoIndividual = async (req, res) => {
  const {
    params: { bancoId },
  } = req;

  try {
    const banco = await bancoService.obtenerBancoIndividual(bancoId);
    res.status(200).send({ status: "OK", data: banco });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarBanco = async (req, res) => {
  const { 
        nombreBanco,
    } = req.body;

  const nuevoBanco = {
    nombreBanco,
  };

  try {
    await bancoService.registrarBanco(nuevoBanco);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el banco de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarBanco = async (req, res) => {
  const {
    body,
    params: { bancoId },
  } = req;

  try {
    await bancoService.actualizarBanco(bancoId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del banco de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarBanco = async (req, res) => {
  const {
    params: { bancoId },
  } = req;

  try {
    await bancoService.borrarBanco(bancoId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El banco con el id '${bancoId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeBancos,
  obtenerBancoIndividual,
  registrarBanco,
  actualizarBanco,
  borrarBanco,
};
