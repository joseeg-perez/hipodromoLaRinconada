const veterinarioCaballerizaService = require("../services/veterinarioCaballerizaServices.js");
const httpError = require("../helpers/httpMessages.js");

const registrarVeterinarioCaballeriza = async (req, res) => {
  const { fechaInicio, fechaFin, fkCaballeriza, fkVeterinario } = req.body;

  const nuevoVeterinarioCaballeriza = {
    fechaInicio,
    fechaFin,
    fkCaballeriza,
    fkVeterinario,
  };

  try {
    await veterinarioCaballerizaService.registrarVeterinarioCaballeriza(
      nuevoVeterinarioCaballeriza
    );
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el veterinario de la caballeriza de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarVeterinarioCaballeriza = async (req, res) => {
  const {
    body,
    params: { veterinarioCaballerizaId },
  } = req;

  try {
    await veterinarioCaballerizaService.actualizarVeterinarioCaballeriza(
      veterinarioCaballerizaId,
      body
    );
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del veterinario asociado a una caballeriza de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarVeterinarioCaballeriza = async (req, res) => {
  const {
    params: { veterinarioCaballerizaId },
  } = req;

  try {
    await veterinarioCaballerizaService.borrarVeterinarioCaballeriza(
      veterinarioCaballerizaId
    );
    res
      .status(200)
      .send({
        status: "OK",
        data: `El veterinario de la caballeriza con el id '${veterinarioCaballerizaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  registrarVeterinarioCaballeriza,
  actualizarVeterinarioCaballeriza,
  borrarVeterinarioCaballeriza,
};
