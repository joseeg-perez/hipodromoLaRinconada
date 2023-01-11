const reglaService = require("../services/reglaServices.js");

const obtenerListaDeReglas = async (req, res) => {
  try {
    const listaReglas = await reglaService.obtenerListaDeReglas();

    res.status(200).send({ status: "OK", data: listaReglas });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerReglaIndividual = async (req, res) => {
  const {
    params: { reglaId },
  } = req;

  try {
    const regla = await reglaService.obtenerReglaIndividual(reglaId);
    res.status(200).send({ status: "OK", data: regla });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarRegla = async (req, res) => {
  const { nombreRegla, descripcionRegla } = req.body;

  const nuevaRegla = {
    nombreRegla: nombreRegla.toLowerCase(),
    descripcionRegla: descripcionRegla.toLowerCase(),
  };

  try {
    const reglaCreada = await reglaService.registrarRegla(nuevaRegla);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha creado el regla '${reglaCreada}' de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarRegla = async (req, res) => {
  const {
    body,
    params: { reglaId },
  } = req;

  try {
    const reglaActualizada = await reglaService.actualizarRegla(reglaId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion de la regla '${reglaActualizada}' de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarRegla = async (req, res) => {
  const {
    params: { reglaId },
  } = req;

  try {
    await reglaService.borrarRegla(reglaId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El regla con el id '${reglaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeReglas,
  obtenerReglaIndividual,
  registrarRegla,
  actualizarRegla,
  borrarRegla,
};
