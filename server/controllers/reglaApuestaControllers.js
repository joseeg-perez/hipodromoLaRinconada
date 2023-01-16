const reglaApuestaService = require("../services/reglaApuestaServices.js");

const obtenerListaDeReglaApuesta = async (req, res) => {
  try {
    const listaReglaApuesta =
      await reglaApuestaService.obtenerListaDeReglaApuesta();

    res.status(200).send({ status: "OK", data: listaReglaApuesta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerReglaApuestaIndividual = async (req, res) => {
  const {
    params: { reglaApuestaId },
  } = req;

  try {
    const reglaApuesta =
      await reglaApuestaService.obtenerReglaApuestaIndividual(
        reglaApuestaId
      );
    res.status(200).send({ status: "OK", data: reglaApuesta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarReglaApuesta = async (req, res) => { 
    const {
        nombreReglaApuesta,
        descripcionReglaApuesta,
     } =  req.body;

     const nuevaReglaApuesta = {
        nombreReglaApuesta,
        descripcionReglaApuesta,
    };

  try {
    await reglaApuestaService.registrarReglaApuesta(nuevaReglaApuesta);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha creado la regla tipo apuesta de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarReglaApuesta = async (req, res) => {
  const {
    body,
    params: { reglaApuestaId },
  } = req;

  try {
    const reglaApuestaActualizado =
      await reglaApuestaService.actualizarReglaApuesta(reglaApuestaId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion de la regla tipo apuesta de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarReglaApuesta = async (req, res) => {
  const {
    params: { reglaApuestaId },
  } = req;

  try {
    await reglaApuestaService.borrarReglaApuesta(reglaApuestaId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `La regla tipo apuesta con el id '${reglaApuestaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeReglaApuesta,
  obtenerReglaApuestaIndividual,
  registrarReglaApuesta,
  actualizarReglaApuesta,
  borrarReglaApuesta,
};
