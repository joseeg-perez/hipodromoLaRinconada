const retiroService = require("../services/retiroServices.js");
const httpError = require("../helpers/httpMessages.js");

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
    if (!retiroId) return httpError.idVacio(res, ":retiroId");

    if (isNaN(retiroId) || retiroId === " ")
      return httpError.idInvalido(res, ":retiroId");

    const retiro = await retiroService.obtenerRetiroIndividual(retiroId);
    res.status(200).send({ status: "OK", data: retiro });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarRetiro = async (req, res) => {
  const { codigoRetiro, fechaRetiro, fkMotivo } = req.body;

  if (!codigoRetiro || !fechaRetiro || !fkMotivo)
    return httpError.faltaInformacion(res);

  if (isNaN(codigoRetiro)) return httpError.idInvalido(res, "codigo retiro");
  else if (isNaN(fkMotivo)) return httpError.idInvalido(res, "fk_motivo");

  const nuevoRetiro = {
    codigoRetiro,
    fechaRetiro,
    fkMotivo,
  };

  try {
    const retiroCreado = await retiroService.registrarRetiro(nuevoRetiro);
    res.status(200).send({
      status: "OK",
      data: `Se ha registrado el retiro numero '${retiroCreado}' de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarRetiro = async (req, res) => {};

const borrarRetiro = async (req, res) => {
  const {
    params: { retiroId },
  } = req;

  try {
    if (!retiroId) return httpError.idVacio(res, "retiroId");

    if (isNaN(retiroId) || retiroId === " ")
      return httpError.idInvalido(res, ":retiroId");

    await retiroService.borrarRetiro(retiroId);
    res.status(200).send({
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
