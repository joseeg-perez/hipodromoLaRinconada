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
    try {
        const entrenadorCreado = await Entrenador.registrarEntrenador(nuevoEntrenador);
        
        return(entrenadorCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarEntrenador = async (entrenadorId, cambios) => {

};

const borrarEntrenador = async (entrenadorId) => {
    try {
        await Entrenador.borrarEntrenador(entrenadorId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeEntrenadores,
    obtenerEntrenadorIndividual,
    registrarEntrenador,
    actualizarEntrenador,
    borrarEntrenador,
};