const tipoApuestaService = require("../services/tipoApuestaServices.js");

const obtenerListaDeTipoApuesta = async (req, res) => {
  try {
    const listaTipoApuesta =
      await tipoApuestaService.obtenerListaDeTipoApuesta();

    res.status(200).send({ status: "OK", data: listaTipoApuesta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerTipoApuestaIndividual = async (req, res) => {
  const {
    params: { tipoApuestaId },
  } = req;

  try {
    const tipoApuesta =
      await tipoApuestaService.obtenerTipoApuestaIndividual(
        tipoApuestaId
      );
    res.status(200).send({ status: "OK", data: tipoApuesta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarTipoApuesta = async (req, res) => { 
    const {
      nombreApuestaRegla,
      descripcionApuestaRegla,
      carreraRegla
     } =  req.body;

     const nuevoTipoApuesta = {
      nombreApuestaRegla: nombreApuestaRegla.toLowerCase(),
      descripcionApuestaRegla: descripcionApuestaRegla.toLowerCase(),
      carreraRegla,
    };

  try {
    await tipoApuestaService.registrarTipoApuesta(nuevoTipoApuesta);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha creado la apuesta '${nombreApuestaRegla}' de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarTipoApuesta = async (req, res) => {
  const {
    body,
    params: { tipoApuestaId },
  } = req;

  try {
    const tipoApuestaActualizado =
      await tipoApuestaService.actualizarTipoApuesta(tipoApuestaId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del tipo de Apuesta '${tipoApuestaActualizado}' de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarTipoApuesta = async (req, res) => {
  const {
    params: { tipoApuestaId },
  } = req;

  try {
    await tipoApuestaService.borrarTipoApuesta(tipoApuestaId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El tipo de Apuesta con el id '${tipoApuestaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeTipoApuesta,
  obtenerTipoApuestaIndividual,
  registrarTipoApuesta,
  actualizarTipoApuesta,
  borrarTipoApuesta,
};
