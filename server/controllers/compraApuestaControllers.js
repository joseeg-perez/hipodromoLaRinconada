const compraApuestaService = require("../services/compraApuestaServices.js");

const obtenerListaDeCompraApuesta = async (req, res) => {
  try {
    const listaCompraApuesta =
      await compraApuestaService.obtenerListaDeCompraApuesta();

    res.status(200).send({ status: "OK", data: listaCompraApuesta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerCompraApuestaIndividual = async (req, res) => {
  const {
    params: { compraApuestaId },
  } = req;

  try {
    const compraApuesta =
      await compraApuestaService.obtenerCompraApuestaIndividual(
        compraApuestaId
      );
    res.status(200).send({ status: "OK", data: compraApuesta });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarCompraApuesta = async (req, res) => { 
    const {
      montoTotal,
      fkUsuario,
      fkCliente,
      fkTipoApuesta,
      fkTaquilla,
     } =  req.body;

     const nuevaCompraApuesta = {
        montoTotal,
        fkUsuario,
        fkCliente,
        fkTipoApuesta,
        fkTaquilla,
    };

  try {
    await compraApuestaService.registrarCompraApuesta(nuevaCompraApuesta);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha realizado la compra de la apuesta de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarCompraApuesta = async (req, res) => {
  const {
    body,
    params: { compraApuestaId },
  } = req;

  try {
    await compraApuestaService.actualizarCompraApuesta(compraApuestaId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion de la  compra de la apuesta de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarCompraApuesta = async (req, res) => {
  const {
    params: { compraApuestaId },
  } = req;

  try {
    await compraApuestaService.borrarCompraApuesta(compraApuestaId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El compra de Apuesta con el id '${compraApuestaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeCompraApuesta,
  obtenerCompraApuestaIndividual,
  registrarCompraApuesta,
  actualizarCompraApuesta,
  borrarCompraApuesta,
};
