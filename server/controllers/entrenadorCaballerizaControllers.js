const entrenadorCaballerizaService = require("../services/entrenadorCaballerizaServices.js");
const httpError = require("../helpers/httpMessages.js");

const registrarEntrenadorCaballeriza = async (req, res) => {
  const { fechaInicio, fechaFin, fkCaballeriza, fkEntrenador } = req.body;

  const nuevoEntrenadorCaballeriza = {
    fechaInicio,
    fechaFin,
    fkCaballeriza,
    fkEntrenador,
  };

  try {
    await entrenadorCaballerizaService.registrarEntrenadorCaballeriza(
      nuevoEntrenadorCaballeriza
    );
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el entrenador de la caballeriza de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarEntrenadorCaballeriza = async (req, res) => {
  const {
    body,
    params: { entrenadorCaballerizaId },
  } = req;

  try {
    await entrenadorCaballerizaService.actualizarEntrenadorCaballeriza(
      entrenadorCaballerizaId,
      body
    );
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del entrenador relacionado a una caballeriza de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarEntrenadorCaballeriza = async (req, res) => {
  const {
    params: { entrenadorCaballerizaId },
  } = req;

  try {
    await entrenadorCaballerizaService.borrarEntrenadorCaballeriza(
      entrenadorCaballerizaId
    );
    res
      .status(200)
      .send({
        status: "OK",
        data: `El entrenador de la caballeriza con el id '${entrenadorCaballerizaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  registrarEntrenadorCaballeriza,
  actualizarEntrenadorCaballeriza,
  borrarEntrenadorCaballeriza,
};
