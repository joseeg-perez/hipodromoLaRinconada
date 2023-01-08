const studVestimentaService = require("../services/studVestimentaServices.js");
const httpError = require("../helpers/httpMessages.js");

const registrarStudVestimenta = async (req, res) => {
  const { fkVestimenta, fkStud } = req.body;

  const nuevostudVestimenta = {
    fkVestimenta,
    fkStud,
  };

  try {
    await studVestimentaService.registrarStudVestimenta(nuevostudVestimenta);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado la vestimenta del stud de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarStudVestimenta = async (req, res) => {
  const {
    body,
    params: { studVestimentaId },
  } = req;

  try {
    await studVestimentaService.actualizarStudVestimenta(
      studVestimentaId,
      body
    );
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion de la vestimenta asociada al stud de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarStudVestimenta = async (req, res) => {
  const {
    params: { studVestimentaId },
  } = req;

  try {
    await studVestimentaService.borrarStudVestimenta(studVestimentaId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El color de stud con el id '${studVestimentaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  registrarStudVestimenta,
  actualizarStudVestimenta,
  borrarStudVestimenta,
};
