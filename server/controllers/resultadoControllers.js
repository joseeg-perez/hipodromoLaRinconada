const resultadoservice = require("../services/resultadoservices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeResultados = async (req, res) => {
  try {
    const listaResultados =
      await resultadoservice.obtenerListaDeResultados();

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
    if (!resultadoId) return httpError.idVacio(res, ":resultadoId");

    if (isNaN(resultadoId) || resultadoId === " ")
      return httpError.idInvalido(res, ":resultadoId");

    const resultado = await resultadoId.obtenerResultadoIndividual(
      resultadoId
    );
    res.status(200).send({ status: "OK", data: resultado });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarresultado = async (req, res) => {
  const { 
    diferenciaTiempo,
    speedRating,
    speedRating300m,
    speedRating400m,
    speedRating800m,
    observacion,
    gananciaEntrenador,
    gananciaJinete,
    gananciaPropietario,
    tiempoTotal,
    fkTipoResultado,
    fkCuerpoDiferencia,
 } = req.body;

  if (!diferenciaTiempo ||
      !speedRating ||
      !speedRating300m ||
      !speedRating400m ||
      !speedRating800m ||
      !gananciaEntrenador ||
      !gananciaJinete ||
      !gananciaPropietario ||
      !tiempoTotal ||
      !fkTipoResultado ||
      !fkCuerpoDiferencia) 
    return httpError.faltaInformacion(res);

  if (isNaN(cantidadPuestos) || cantidadPuestos === " ")
    return httpError.idInvalido(res, "cantidad puestos");

  const nuevaresultado = {
    cantidadPuestos,
  };

  try {
    await Resultadoservice.registrarresultado(nuevaresultado);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado la resultado de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarresultado = async (req, res) => {};

const borrarresultado = async (req, res) => {
  const {
    params: { resultadoId },
  } = req;

  try {
    if (!resultadoId) return httpError.idVacio(res, "resultadoId");

    if (isNaN(resultadoId) || resultadoId === " ")
      return httpError.idInvalido(res, ":resultadoId");

    await Resultadoservice.borrarresultado(resultadoId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `La resultado con el id '${resultadoId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeResultados,
  obtenerresultadoIndividual,
  registrarresultado,
  actualizarresultado,
  borrarresultado,
};
