const colorStudVestimentaService = require("../services/colorStudVestimentaServices.js");

const registrarColorStudVestimenta = async (req, res) => {
  const { fkStudVestimenta, fkColor } = req.body;

  const nuevoColorStudVestimenta = {
    fkStudVestimenta,
    fkColor,
  };

  try {
    await colorStudVestimentaService.registrarColorStudVestimenta(
      nuevoColorStudVestimenta
    );
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el nuevo color para la vestimenta del stud de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarColorStudVestimenta = async (req, res) => {
  const {
    body,
    params: { colorStudVestimentaId },
  } = req;

  try {
    await colorStudVestimentaService.actualizarColorStudVestimenta(
      colorStudVestimentaId,
      body
    );
    res.send({
      status: "OK",
      data: `Se ha actualizado el color de la vestimenta del stud de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarColorStudVestimenta = async (req, res) => {
  const {
    params: { colorStudVestimentaId },
  } = req;

  try {
    await colorStudVestimentaService.borrarColorStudVestimenta(
      colorStudVestimentaId
    );
    res
      .status(200)
      .send({
        status: "OK",
        data: `El color de la vestimenta del stud con el id '${colorStudVestimentaId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  registrarColorStudVestimenta,
  actualizarColorStudVestimenta,
  borrarColorStudVestimenta,
};
