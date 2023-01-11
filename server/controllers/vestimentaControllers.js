const vestimentaService = require("../services/vestimentaServices.js");

const obtenerListaDeVestimentas = async (req, res) => {
  try {
    const listaVestimentas =
      await vestimentaService.obtenerListaDeVestimentas();

    res.status(200).send({ status: "OK", data: listaVestimentas });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerVestimentaIndividual = async (req, res) => {
  const {
    params: { vestimentaId },
  } = req;

  try {
    const vestimenta = await vestimentaService.obtenerVestimentaIndividual(
      vestimentaId
    );
    res.status(200).send({ status: "OK", data: vestimenta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarVestimenta = async (req, res) => {
  const { nombreVestimenta } = req.body;

  const nuevaVestimenta = {
    nombreVestimenta: nombreVestimenta.toLowerCase(),
  };

  try {
    const VestimentaCreada = await vestimentaService.registrarVestimenta(
      nuevaVestimenta
    );
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado la vestimenta '${VestimentaCreada}' de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarVestimenta = async (req, res) => {
  const {
    body,
    params: { vestimentaId },
  } = req;

  try {
    const vestimentaActualizada = await vestimentaService.actualizarVestimenta(
      vestimentaId,
      body
    );
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion de la vestimenta '${vestimentaActualizada}' de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarVestimenta = async (req, res) => {
  const {
    params: { vestimentaId },
  } = req;

  try {
    await vestimentaService.borrarVestimenta(vestimentaId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `La vestimenta con el id '${vestimentaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeVestimentas,
  obtenerVestimentaIndividual,
  registrarVestimenta,
  actualizarVestimenta,
  borrarVestimenta,
};
