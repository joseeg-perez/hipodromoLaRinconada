const propietarioService = require("../services/propietarioServices.js");
const validator = require("email-validator");
const httpError = require("../helpers/httpMessages.js");

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
  const {
    params: { propietarioId },
  } = req;

  try {
    if (!propietarioId) return httpError.idVacio(res, ":propietarioId");

    if (isNaN(propietarioId) || propietarioId === " ")
      return httpError.idInvalido(res, ":propietarioId");

    const propietario = await propietarioService.obtenerPropietarioIndividual(
      propietarioId
    );
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

  if (
    !cedulaPersona ||
    !nombre1Persona ||
    !apellido1Persona ||
    !fechaNacimiento ||
    !correo
  )
    return httpError.faltaInformacion(res);

  const emailValido = validator.validate(correo);

  if (!emailValido) return httpError.campoInvalido(res, "correo");

  if (isNaN(cedulaPersona) || isNaN(fkLugar))
    return res.status(422).send({
      status: "FAILED",
      data: "Uno de los campos que espera valores numericos es invalido.",
    });

    const nuevoPropietario = {
        cedulaPersona,
        nombre1Persona: nombre1Persona.toLowerCase(),
        nombre2Persona: nombre2Persona.toLowerCase(),
        apellido1Persona: apellido1Persona.toLowerCase(),
        apellido2Persona: apellido2Persona.toLowerCase(),
        fechaNacimiento,
        correo,
        fkLugar,
        extension_tlf,
        cuerpo_tlf,
    };

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
  res.send("Estamos en actualizar Propietario");
};

const borrarPropietario = async (req, res) => {
  const {
    params: { propietarioId },
  } = req;

  try {
    if (!propietarioId) return httpError.faltaInformacion(res);

    if (isNaN(propietarioId) || propietarioId === " ")
      return httpError.idInvalido(res, ":propietarioId");

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
