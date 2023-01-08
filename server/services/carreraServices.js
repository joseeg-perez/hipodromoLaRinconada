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
    try {
        const carreraCreada = await Carrera.registrarCarrera(nuevaCarrera);
        
        return(carreraCreada);
    } catch (error) {
        throw(error);
    }
};

const actualizarCarrera = async (carreraId, cambios) => {
    try {
        const carreraActualizada = await Carrera.actualizarCarrera(carreraId, cambios);
        
        return(carreraActualizada);
    } catch (error) {
        throw(error);
    }
};

const borrarCarrera = async (carreraId) => {
    try {
        await Carrera.borrarCarrera(carreraId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeCarreras,
    obtenerCarreraIndividual,
    registrarCarrera,
    actualizarCarrera,
    borrarCarrera,
};