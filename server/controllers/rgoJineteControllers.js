const rgoJineteService = require("../services/rgoJineteServices.js");

const obtenerListaDeRgoJinetes = async (req, res) => {
  try {
    const listaRgoJinetes = await rgoJineteService.obtenerListaDeRgoJinetes();

    res.status(200).send({ status: "OK", data: listaRgoJinetes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerRgoJineteIndividual = async (req, res) => {
  const {
    params: { rgoJineteId },
  } = req;

  try {
    const rgoJinete = await rgoJineteService.obtenerRgoJineteIndividual(
      rgoJineteId
    );
    res.status(200).send({ status: "OK", data: rgoJinete });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarRgoJinete = async (req, res) => {
  const { nombreRango, descripcionRango, pesoMin, pesoMax } = req.body;

  const nuevoRgoJinete = {
    nombreRango: nombreRango.toLowerCase(),
    descripcionRango: descripcionRango.toLowerCase(),
    pesoMin,
    pesoMax,
  };

  try {
    const rgoJineteCreado = await rgoJineteService.registrarRgoJinete(
      nuevoRgoJinete
    );
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el rango asociado a un jinete '${rgoJineteCreado}' de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarRgoJinete = async (req, res) => {
  const {
    body,
    params: { rgoJineteId },
  } = req;

  try {
    const rangoJineteActualizado = await rgoJineteService.actualizarRgoJinete(
      rgoJineteId,
      body
    );
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del rango asociado a un jinete '${rangoJineteActualizado}' de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarRgoJinete = async (req, res) => {
  const {
    params: { rgoJineteId },
  } = req;

  try {
    await rgoJineteService.borrarRgoJinete(rgoJineteId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El rango asociado a un jinete con el id '${rgoJineteId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeRgoJinetes,
  obtenerRgoJineteIndividual,
  registrarRgoJinete,
  actualizarRgoJinete,
  borrarRgoJinete,
};
