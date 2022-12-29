const Entrenador = require("../database/entrenador.js");

const obtenerListaDeEntrenadores = async () => {
    try {
        const listaEntrenadores = await Entrenador.obtenerListaDeEntrenadores();

        return(listaEntrenadores);
    } catch (error) {
        throw(error);
    }
};

const obtenerEntrenadorIndividual = async (entrenadorId) => {
    try {
        const entrenador = await Entrenador.obtenerEntrenadorIndividual(entrenadorId);

        return(entrenador);
    } catch (error) {
        throw(error);
    }
};

const registrarEntrenador = async (nuevoEntrenador) => {

};

const actualizarEntrenador = async (entrenadorId, cambios) => {

};

const borrarEntrenador = async (entrenadorId) => {

};

module.exports = {
    obtenerListaDeEntrenadores,
    obtenerEntrenadorIndividual,
    registrarEntrenador,
    actualizarEntrenador,
    borrarEntrenador,
};