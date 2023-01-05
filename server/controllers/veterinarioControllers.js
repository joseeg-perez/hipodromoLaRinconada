const veterinarioService = require("../services/veterinarioServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeVeterinarios = async (req, res) => {
  try {
    const listaveterinarios =
      await veterinarioService.obtenerListaDeVeterinarios();

    res.status(200).send({ status: "OK", data: listaveterinarios });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerListaDeCaballerizasVacias = async (req, res) => {
  try {
    const listaCaballerizas =
      await veterinarioService.obtenerListaDeCaballerizasVacias();

    res.status(200).send({ status: "OK", data: listaCaballerizas });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerVeterinarioIndividual = async (req, res) => {
  const {
    params: { veterinarioId },
  } = req;

  try {
    if (!veterinarioId) return httpError.idVacio(res, ":veterinarioId");

    if (isNaN(veterinarioId) || veterinarioId === " ")
      return httpError.idInvalido(res, ":veterinarioId");

    const veterinario = await veterinarioService.obtenerVeterinarioIndividual(
      veterinarioId
    );
    res.status(200).send({ status: "OK", data: veterinario });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarVeterinario = async (req, res) => {
  const {
    cedulaPersona,
    nombre1Persona,
    nombre2Persona,
    apellido1Persona,
    apellido2Persona,
    fechaNacimiento,
    fkCaballeriza,
  } = req.body;

  const nuevoVeterinario = {
    cedulaPersona,
    nombre1Persona: nombre1Persona.toLowerCase(),
    nombre2Persona: nombre2Persona.toLowerCase(),
    apellido1Persona: apellido1Persona.toLowerCase(),
    apellido2Persona: apellido2Persona.toLowerCase(),
    fechaNacimiento,
    fkCaballeriza,
  };

  try {
    const veterinarioCreado = await veterinarioService.registrarVeterinario(
      nuevoVeterinario
    );
    res.status(200).send({
      status: "OK",
      data: `Se ha registrado el veterinario '${veterinarioCreado}' de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarVeterinario = async (req, res) => {};

const borrarVeterinario = async (req, res) => {
  const {
    params: { veterinarioId },
  } = req;

  try {
    if (!veterinarioId) return httpError.idVacio(res, "veterinarioId");

    if (isNaN(veterinarioId) || veterinarioId === " ")
      return httpError.idInvalido(res, ":veterinarioId");

    await veterinarioService.borrarVeterinario(veterinarioId);
    res.status(200).send({
      status: "OK",
      data: `El veterinario con el id '${veterinarioId}' se ha eliminado con exito.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeVeterinarios,
  obtenerListaDeCaballerizasVacias,
  obtenerVeterinarioIndividual,
  registrarVeterinario,
  actualizarVeterinario,
  borrarVeterinario,
};
