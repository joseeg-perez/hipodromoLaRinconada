const apuestaParticipacionService = require("../services/apuestaParticipacionServices.js");

const obtenerListaDeApuestaParticipacion = async (req, res) => {
  try {
    const listaApuestaParticipacion =
      await apuestaParticipacionService.obtenerListaDeApuestaParticipacion();

    res.status(200).send({ status: "OK", data: listaApuestaParticipacion });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerApuestaParticipacionIndividual = async (req, res) => {
  const {
    params: { apuestaParticipacionId },
  } = req;

  try {
    const apuestaParticipacion =
      await apuestaParticipacionService.obtenerApuestaParticipacionIndividual(
        apuestaParticipacionId
      );
    res.status(200).send({ status: "OK", data: apuestaParticipacion });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarApuestaParticipacion = async (req, res) => { 
    const {
      fkParticipacion,
      fkTipoApuesta,
      posicion,
      fkpago,
     } =  req.body;

     const nuevoApuestaParticipacion = {
        fkParticipacion,
        fkTipoApuesta,
        posicion,
        fkpago,
    };

  try {
    await apuestaParticipacionService.registrarApuestaParticipacion(nuevoApuestaParticipacion);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado la apuesta de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarApuestaParticipacion = async (req, res) => {
  const {
    body,
    params: { apuestaParticipacionId },
  } = req;

  try {
    await apuestaParticipacionService.actualizarApuestaParticipacion(apuestaParticipacionId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion de la apuesta de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarApuestaParticipacion = async (req, res) => {
  const {
    params: { apuestaParticipacionId },
  } = req;

  try {
    await apuestaParticipacionService.borrarApuestaParticipacion(apuestaParticipacionId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `La apuesta con el id '${apuestaParticipacionId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeApuestaParticipacion,
  obtenerApuestaParticipacionIndividual,
  registrarApuestaParticipacion,
  actualizarApuestaParticipacion,
  borrarApuestaParticipacion,
};
