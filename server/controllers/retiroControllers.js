const retiroService = require("../services/retiroServices.js");

const obtenerListaDeRetiros = async (req, res) => {
  try {
    const listaRetiros = await retiroService.obtenerListaDeRetiros();

    res.status(200).send({ status: "OK", data: listaRetiros });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerRetiroIndividual = async (req, res) => {
  const {
    params: { retiroId },
  } = req;

  try {
    const retiro = await retiroService.obtenerRetiroIndividual(retiroId);
    res.status(200).send({ status: "OK", data: retiro });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarRetiro = async (req, res) => {
  const { fechaRetiro, fkMotivo } = req.body;

  const nuevoRetiro = {
    fechaRetiro,
    fkMotivo,
  };

  try {
    await retiroService.registrarRetiro(nuevoRetiro);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el retiro de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarRetiro = async (req, res) => {
  const {
    body,
    params: { retiroId },
  } = req;

  try {
    await retiroService.actualizarRetiro(retiroId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del retiro de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarRetiro = async (req, res) => {
  const {
    params: { retiroId },
  } = req;

  try {
    await retiroService.borrarRetiro(retiroId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El retiro con el id '${retiroId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeRetiros,
  obtenerRetiroIndividual,
  registrarRetiro,
  actualizarRetiro,
  borrarRetiro,
};
