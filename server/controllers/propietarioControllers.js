const propietarioService = require("../services/propietarioServices.js");

const obtenerListaDePropietarios = async (req, res) => {
  try {
    const listaPropietarios =
      await propietarioService.obtenerListaDePropietarios();

    res.status(200).send({ status: "OK", data: listaPropietarios });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerPropietarioIndividual = async (req, res) => {
  console.log('Controler de PROPIETARIO INDIVIDUAL')
  const {
    params: { propietarioId },
  } = req;

  try {
    const propietario = await propietarioService.obtenerPropietarioIndividual(
      propietarioId
    );
    console.log(propietario)
    res.status(200).send({ status: "OK", data: propietario });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarPropietario = async (req, res) => {
  const {
    cedulaPersona,
    nombre1Persona,
    nombre2Persona,
    apellido1Persona,
    apellido2Persona,
    fechaNacimiento,
    correo,
    fkLugar,
    extension_tlf,
    cuerpo_tlf,
  } = req.body;

    const nuevoPropietario = {
        cedulaPersona,
        nombre1Persona: nombre1Persona.toLowerCase(),
        nombre2Persona: nombre2Persona.toLowerCase(),
        apellido1Persona: apellido1Persona.toLowerCase(),
        apellido2Persona: apellido2Persona.toLowerCase(),
        fechaNacimiento,
        correo: correo,
        fkLugar,
        extension_tlf,
        cuerpo_tlf,
    };
    console.log(nuevoPropietario, 'CONTROLER')
    try {
        const propietarioCreado = await propietarioService.registrarPropietario(nuevoPropietario);
        res.status(200).send({ status: "OK", data: `Se ha registrado el propietario '${propietarioCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarPropietario = async (req, res) => {
  const {
    body,
    params: { propietarioId },
  } = req;

  try {
    const propietarioActualizado =
      await propietarioService.actualizarPropietario(propietarioId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del propietario '${propietarioActualizado}' de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarPropietario = async (req, res) => {
  const {
    params: { propietarioId },
  } = req;

  try {
    await propietarioService.borrarPropietario(propietarioId);
    res.status(200).send({
      status: "OK",
      data: `El propietario con el id '${propietarioId}' se ha eliminado con exito.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDePropietarios,
  obtenerPropietarioIndividual,
  registrarPropietario,
  actualizarPropietario,
  borrarPropietario,
};
