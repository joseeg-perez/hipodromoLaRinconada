const entrenadorService = require("../services/entrenadorServices.js");


const obtenerListaDeEntrenadores = (req, res) => {
    res.send("Estamos en lista de entrenadores ROUTER");
};

const obtenerEntrenadorIndividual = (req, res) => {
    res.send("Estamos en entrenador individual ROUTER");

};

const registrarEntrenador = (req, res) => {
    res.send("Estamos en registrar entrenador ROUTER");

};

const actualizarEntrenador = (req, res) => {
    res.send("Estamos en actualizar entrenador ROUTER");

};

const borrarEntrenador = (req, res) => {
    res.send("Estamos en borrar entrenador ROUTER");

};

module.exports = {
    obtenerListaDeEntrenadores,
    obtenerEntrenadorIndividual,
    registrarEntrenador,
    actualizarEntrenador,
    borrarEntrenador,
};
