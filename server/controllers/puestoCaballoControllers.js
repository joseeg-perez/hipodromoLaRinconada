const puestoCaballoService = require("../services/puestoCaballoServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDePuestoCaballos = async (req, res) => {
  try {
    const listaPuestoCaballos =
      await puestoCaballoService.obtenerListaDePuestoCaballos();

    res.status(200).send({ status: "OK", data: listaPuestoCaballos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerPuestoCaballoIndividual = async (req, res) => {
  const {
    params: { puestoCaballoId },
  } = req;

  try {
    const puestoCaballo =
      await puestoCaballoService.obtenerPuestoCaballoIndividual(
        puestoCaballoId
      );
    res.status(200).send({ status: "OK", data: puestoCaballo });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarPuestoCaballo = async (req, res) => {
  const {
    body,
    params: { puestoCaballoId },
  } = req;

  try {
    await puestoCaballoService.actualizarPuestoCaballo(puestoCaballoId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del puesto de caballo de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarPuestoCaballo = async (req, res) => {
  const {
    params: { puestoCaballoId },
  } = req;

  try {
    await puestoCaballoService.borrarPuestoCaballo(puestoCaballoId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El puesto para caballo con el id '${puestoCaballoId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDePuestoCaballos,
  obtenerPuestoCaballoIndividual,
  actualizarPuestoCaballo,
  borrarPuestoCaballo,
};
