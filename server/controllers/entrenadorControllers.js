const entrenadorService = require("../services/entrenadorServices.js");

const obtenerListaDeEntrenadores = async (req, res) => {
  try {
    const listaEntrenadores =
      await entrenadorService.obtenerListaDeEntrenadores();

    res.status(200).send({ status: "OK", data: listaEntrenadores });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerListaDeCaballerizasVacias = async (req, res) => {
  try {
    const listaCaballerizas =
      await entrenadorService.obtenerListaDeCaballerizasVacias();

    res.status(200).send({ status: "OK", data: listaCaballerizas });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerEntrenadorIndividual = async (req, res) => {
  const {
    params: { entrenadorId },
  } = req;

  try {
    const entrenador = await entrenadorService.obtenerEntrenadorIndividual(
      entrenadorId
    );
    res.status(200).send({ status: "OK", data: entrenador });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarEntrenador = async (req, res) => {
    const { 
        codigoPersona,
        cedulaPersona,
        nombre1Persona,
        nombre2Persona,
        apellido1Persona,
        apellido2Persona,
        fechaNacimiento, 
        fkCaballeriza,
    } = req.body;

    const nuevoEntrenador = {
        codigoPersona, //aqui me quede
        cedulaPersona,
        nombre1Persona: nombre1Persona.toLowerCase(),
        nombre2Persona: nombre2Persona.toLowerCase(),
        apellido1Persona: apellido1Persona.toLowerCase(),
        apellido2Persona: apellido2Persona.toLowerCase(),
        fechaNacimiento,
        fkCaballeriza,
    };
    try {
        const entrenadorCreado = await entrenadorService.registrarEntrenador(nuevoEntrenador);
        res.status(200).send({ status: "OK", data: `Se ha registrado el entrenador '${entrenadorCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarEntrenador = async (req, res) => {
  const {
    body,
    params: { entrenadorId },
  } = req;

  try {
    const entrenadorActualizado = await entrenadorService.actualizarEntrenador(
      entrenadorId,
      body
    );
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion del entrenador '${entrenadorActualizado}' de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarEntrenador = async (req, res) => {
    const {
        params: { entrenadorId },
    } = req;

    try {
        await entrenadorService.borrarEntrenador(entrenadorId);
        res.status(200).send({ status: "OK", data: `El entrenador con el id '${entrenadorId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
  obtenerListaDeEntrenadores,
  obtenerListaDeCaballerizasVacias,
  obtenerEntrenadorIndividual,
  registrarEntrenador,
  actualizarEntrenador,
  borrarEntrenador,
};
