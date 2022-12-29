const entrenadorService = require("../services/entrenadorServices.js");
const httpError = require("../services/httpMessages.js");

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
    res.send("Estamos en registrar entrenador ROUTER");

};

const actualizarEntrenador = async (req, res) => {
    res.send("Estamos en actualizar entrenador ROUTER");

};

const borrarEntrenador = async (req, res) => {
    res.send("Estamos en borrar entrenador ROUTER");

};

module.exports = {
    obtenerListaDeEntrenadores,
    obtenerEntrenadorIndividual,
    registrarEntrenador,
    actualizarEntrenador,
    borrarEntrenador,
};
