const implementoService = require("../services/implementoServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeImplementos = async (req, res) => {
  try {
    const listaImplementos =
      await implementoService.obtenerListaDeImplementos();

    res.status(200).send({ status: "OK", data: listaImplementos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerImplementoIndividual = async (req, res) => {
  const {
    params: { implementoId },
  } = req;

  try {
    const implemento = await implementoService.obtenerImplementoIndividual(
      implementoId
    );
    res.status(200).send({ status: "OK", data: implemento });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarImplemento = async (req, res) => {
  const { nombreImplemento, descripcionImplemento } = req.body;

  const nuevoImplemento = {
    nombreImplemento: nombreImplemento.toLowerCase(),
    descripcionImplemento: descripcionImplemento.toLowerCase(),
  };

  try {
    const implementoCreado = await implementoService.registrarImplemento(nuevoImplemento);
    res.status(200).send({ status: "OK", data: `Se ha registrado el implemento '${implementoCreado}' de forma satisfactoria.` });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarImplemento = async (req, res) => {};

const borrarImplemento = async (req, res) => {
  const {
    params: { implementoId },
  } = req;

  try {
    await implementoService.borrarImplemento(implementoId);
    res.status(200).send({ status: "OK", data: `El implemento con el id '${implementoId}' se ha eliminado con exito.` });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeImplementos,
  obtenerImplementoIndividual,
  registrarImplemento,
  actualizarImplemento,
  borrarImplemento,
};
