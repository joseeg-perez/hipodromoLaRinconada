const Regla = require("../database/regla.js");

const obtenerListaDeReglas = async () => {
    try {
        const listaReglas = await Regla.obtenerListaDeReglas();

        return(listaReglas);
    } catch (error) {
        throw(error);
    }
};

const obtenerReglaIndividual = async (reglaId) => {
    try {
        const regla = await Regla.obtenerReglaIndividual(reglaId);

        return(regla);
    } catch (error) {
        throw(error);
    }
};

const registrarRegla = async (nuevaRegla) => {
    try {
        const reglaCreada = await Regla.registrarRegla(nuevaRegla);
        
        return(reglaCreada);
    } catch (error) {
        throw(error);
    }
};

const actualizarRegla = (reglaId, cambios) => {
    try {
        const reglaActualizada = Regla.actualizarRegla(reglaId, cambios);
        
        return(reglaActualizada);
    } catch (error) {
        throw(error);
    }
};

const borrarRegla = async (reglaId) => {
    try {
        await Regla.borrarRegla(reglaId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeReglas,
    obtenerReglaIndividual,
    registrarRegla,
    actualizarRegla,
    borrarRegla,
};