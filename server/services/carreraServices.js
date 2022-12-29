const Carrera = require("../database/carrera.js");

const obtenerListaDeCarreras = async () => {
    try {
        const listaCarreras = await Carrera.obtenerListaDeCarreras();

        return(listaCarreras);
    } catch (error) {
        throw(error);
    }
};

const obtenerCarreraIndividual = async (carreraId) => {
    try {
        const carrera = await Carrera.obtenerCarreraIndividual(carreraId);

        return(carrera);
    } catch (error) {
        throw(error);
    }
};

const registrarCarrera = async (nuevaCarrera) => {

};

const actualizarCarrera = async (carreraId, cambios) => {

};

const borrarCarrera = async (carreraId) => {

};

module.exports = {
    obtenerListaDeCarreras,
    obtenerCarreraIndividual,
    registrarCarrera,
    actualizarCarrera,
    borrarCarrera,
};