const propietarioStudService = require("../services/propietarioStudServices.js");

const registrarPropietarioStud = async (req, res) => {
  const {
    porcentajePropiedad,
    fechaInicioPropiedad,
    fechaFinPropiedad,
    fkStud,
    fkPropietario,
  } = req.body;

  const nuevopropietarioStud = {
    porcentajePropiedad,
    fechaInicioPropiedad,
    fechaFinPropiedad,
    fkStud,
    fkPropietario,
  };

  try {
    await propietarioStudService.registrarPropietarioStud(nuevopropietarioStud);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado el propietario del stud de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarPropietarioStud = async (req, res) => {
  const {
    body,
    params: { propietarioStudId },
  } = req;

  try {
    await propietarioStudService.actualizarPropietarioStud(
      propietarioStudId,
      body
    );
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del propietario de stud de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarPropietarioStud = async (req, res) => {
  const {
    params: { propietarioStudId },
  } = req;

  try {
    await propietarioStudService.borrarPropietarioStud(propietarioStudId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El propietario de stud con el id '${propietarioStudId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  registrarPropietarioStud,
  actualizarPropietarioStud,
  borrarPropietarioStud,
};
