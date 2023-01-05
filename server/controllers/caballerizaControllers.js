const caballerizaService = require("../services/caballerizaServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCaballerizas = async (req, res) => {
  try {
    const listaCaballerizas =
      await caballerizaService.obtenerListaDeCaballerizas();

    res.status(200).send({ status: "OK", data: listaCaballerizas });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerCaballerizaIndividual = async (req, res) => {
  const {
    params: { caballerizaId },
  } = req;

  try {
    if (!caballerizaId) return httpError.idVacio(res, ":caballerizaId");

    if (isNaN(caballerizaId) || caballerizaId === " ")
      return httpError.idInvalido(res, ":caballerizaId");

    const caballeriza = await caballerizaService.obtenerCaballerizaIndividual(
      caballerizaId
    );
    res.status(200).send({ status: "OK", data: caballeriza });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarCaballeriza = async (req, res) => {
  const { cantidadPuestos } = req.body;

  const nuevaCaballeriza = {
    cantidadPuestos,
  };

  try {
    await caballerizaService.registrarCaballeriza(nuevaCaballeriza);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado la caballeriza de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarCaballeriza = async (req, res) => {};

const borrarCaballeriza = async (req, res) => {
  const {
    params: { caballerizaId },
  } = req;

  try {
    if (!caballerizaId) return httpError.idVacio(res, "caballerizaId");

    if (isNaN(caballerizaId) || caballerizaId === " ")
      return httpError.idInvalido(res, ":caballerizaId");

    await caballerizaService.borrarCaballeriza(caballerizaId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `La caballeriza con el id '${caballerizaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeCaballerizas,
  obtenerCaballerizaIndividual,
  registrarCaballeriza,
  actualizarCaballeriza,
  borrarCaballeriza,
};
