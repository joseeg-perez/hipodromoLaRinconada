const entrenadorService = require("../services/entrenadorServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEntrenadores = async (req, res) => {
    try {
        const listaEntrenadores =  await entrenadorService.obtenerListaDeEntrenadores();

        res.status(200).send({ status: "OK", data: listaEntrenadores });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerEntrenadorIndividual = async (req, res) => {
    const {
        params: { entrenadorId },
    } = req;
    
    try {
        if (!entrenadorId)
            return(httpError.idVacio(res, ":entrenadorId"));

        if (isNaN(entrenadorId) || entrenadorId === ' ')
            return(httpError.idInvalido(res, ":entrenadorId"));
            
        const entrenador = await entrenadorService.obtenerEntrenadorIndividual(entrenadorId);
        res.status(200).send({ status: "OK", data: entrenador});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const registrarEntrenador = async (req, res) => {
    const { 
        cedulaPersona,
        nombre1Persona,
        nombre2Persona,
        apellido1Persona,
        apellido2Persona,
        fechaNacimiento, 
    } = req.body;

    if (!cedulaPersona ||
        !nombre1Persona||
        !apellido1Persona ||
        !fechaNacimiento)
        return (httpError.faltaInformacion(res));

    const nuevoEntrenador = {
        cedulaPersona,
        nombre1Persona: nombre1Persona.toLowerCase(),
        nombre2Persona: nombre2Persona.toLowerCase(),
        apellido1Persona: apellido1Persona.toLowerCase(),
        apellido2Persona: apellido2Persona.toLowerCase(),
        fechaNacimiento,
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
    res.send("Estamos en actualizar entrenador ROUTER");

};

const borrarEntrenador = async (req, res) => {
    const {
        params: { entrenadorId },
    } = req;

    try {
        if (!entrenadorId)
            return(httpError.faltaInformacion(res));

        if (isNaN(entrenadorId) || entrenadorId === ' ')
            return(httpError.idInvalido(res, ":entrenadorId"));

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
    obtenerEntrenadorIndividual,
    registrarEntrenador,
    actualizarEntrenador,
    borrarEntrenador,
};
