const resultadoservice = require("../services/resultadoservices.js");

const obtenerListaDeResultados = async (req, res) => {
  try {
    const listaResultados = await resultadoservice.obtenerListaDeResultados();

    res.status(200).send({ status: "OK", data: listaResultados });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerResultadoEvento = async (req, res) => {
  const {
    params: { resultadoId },
  } = req;

  try {
    const listaResultados = await resultadoservice.obtenerResultadoEvento(resultadoId);

    res.status(200).send({ status: "OK", data: listaResultados });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerResultadoIndividual = async (req, res) => {
  const {
    params: { resultadoId },
  } = req;

  try {
    const resultado = await resultadoservice.obtenerResultadoIndividual(
      resultadoId
    );
    res.status(200).send({ status: "OK", data: resultado });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarResultado = async (req, res) => {
  const {
    body
  } = req;

  try {
    await resultadoservice.registrarResultado(body);
    res.status(200).send({
      status: "OK",
      data: `Se ha registrado la resultado de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarResultado = async (req, res) => {
  const {
    body,
    params: { resultadoId },
  } = req;

  try {
    await resultadoservice.actualizarResultado(resultadoId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del resultado de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarResultado = async (req, res) => {
  const {
    params: { resultadoId },
  } = req;

  try {
    await resultadoservice.borrarResultado(resultadoId);
    res.status(200).send({
      status: "OK",
      data: `El resultado con el id '${resultadoId}' se ha eliminado con exito.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeResultados,
  obtenerResultadoEvento,
  obtenerResultadoIndividual,
  registrarResultado,
  actualizarResultado,
  borrarResultado,
};
