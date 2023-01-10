const telefonoService = require("../services/telefonoServices.js");

const obtenerListaDeTelefonos = async (req, res) => {
  try {
    const listaTelefonos = await telefonoService.obtenerListaDeTelefonos();

    res.status(200).send({ status: "OK", data: listaTelefonos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerTelefonoIndividual = async (req, res) => {
  const {
    params: { telefonoId },
  } = req;

  try {
    const telefono = await telefonoService.obtenerTelefonoIndividual(
      telefonoId
    );
    res.status(200).send({ status: "OK", data: telefono });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarTelefono = async (req, res) => {
  const { extensionTelefono, cuerpoTelefono, fkPropietario, fkCliente } =
    req.body;

  const nuevoTelefono = {
    extensionTelefono,
    cuerpoTelefono,
    fkPropietario,
    fkCliente,
  };

  try {
    await telefonoService.registrarTelefono(nuevoTelefono);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el telefono de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarTelefono = async (req, res) => {
  const {
    body,
    params: { telefonoId },
  } = req;

  try {
    await telefonoService.actualizarTelefono(telefonoId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del telefono de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarTelefono = async (req, res) => {
  const {
    params: { telefonoId },
  } = req;

  try {
    await telefonoService.borrarTelefono(telefonoId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `La telefono con el id '${telefonoId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeTelefonos,
  obtenerTelefonoIndividual,
  registrarTelefono,
  actualizarTelefono,
  borrarTelefono,
};
