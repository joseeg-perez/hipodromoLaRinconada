const reglaTipoApuestaService = require("../services/reglaTipoApuestaServices.js");

const obtenerListaDeReglaTipoApuesta = async (req, res) => {
  try {
    const listaReglaTipoApuesta =
      await reglaTipoApuestaService.obtenerListaDeReglaTipoApuesta();

    res.status(200).send({ status: "OK", data: listaReglaTipoApuesta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerReglaTipoApuestaIndividual = async (req, res) => {
  const {
    params: { reglaTipoApuestaId },
  } = req;

  try {
    const reglaTipoApuesta =
      await reglaTipoApuestaService.obtenerReglaTipoApuestaIndividual(
        reglaTipoApuestaId
      );
    res.status(200).send({ status: "OK", data: reglaTipoApuesta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarReglaTipoApuesta = async (req, res) => { 
    const {
        fkReglaApuesta,
        fkTipoApuesta,
        carreraRegla,
     } =  req.body;

     const nuevaReglaTipoApuesta = {
        fkReglaApuesta,
        fkTipoApuesta,
        carreraRegla,
    };

  try {
    await reglaTipoApuestaService.registrarReglaTipoApuesta(nuevaReglaTipoApuesta);
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

const actualizarReglaTipoApuesta = async (req, res) => {
  const {
    body,
    params: { reglaTipoApuestaId },
  } = req;

  try {
    const reglaTipoApuestaActualizado =
      await reglaTipoApuestaService.actualizarReglaTipoApuesta(reglaTipoApuestaId, body);
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

const borrarReglaTipoApuesta = async (req, res) => {
  const {
    params: { reglaTipoApuestaId },
  } = req;

  try {
    await reglaTipoApuestaService.borrarReglaTipoApuesta(reglaTipoApuestaId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `La regla tipo apuesta con el id '${reglaTipoApuestaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeReglaTipoApuesta,
  obtenerReglaTipoApuestaIndividual,
  registrarReglaTipoApuesta,
  actualizarReglaTipoApuesta,
  borrarReglaTipoApuesta,
};
