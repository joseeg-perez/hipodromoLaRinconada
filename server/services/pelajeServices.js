const Pelaje = require("../database/Pelaje.js");

const obtenerListaDePelajes = async () => {
    try {
        const listaPelajes = await Pelaje.obtenerListaDePelajes();

        return(listaPelajes);
    } catch (error) {
        throw(error);
    }
};

const obtenerPelajeIndividual = async (pelajeId) => {
    try {
        const pelaje = await Pelaje.obtenerPelajeIndividual(pelajeId);

        return(pelaje);
    } catch (error) {
        throw(error);
    }
};

const registrarPelaje = async (nuevoPelaje) => {
    try {
        const pelajeCreado = await Pelaje.registrarPelaje(nuevoPelaje);
        
        return(pelajeCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarPelaje = (pelajeId, cambios) => {
    try {
        const pelajeActualizado = Pelaje.actualizarPelaje(pelajeId, cambios);
        
        return(pelajeActualizado);
    } catch (error) {
        throw(error);
    }
};

const borrarPelaje = async (pelajeId) => {
    try {
        await Pelaje.borrarPelaje(pelajeId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDePelajes,
    obtenerPelajeIndividual,
    registrarPelaje,
    actualizarPelaje,
    borrarPelaje,
};