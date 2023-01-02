const Retiro = require("../database/Retiro.js");

const obtenerListaDeRetiros = async () => {
    try {
        const listaRetiros = await Retiro.obtenerListaDeRetiros();

        return(listaRetiros);
    } catch (error) {
        throw(error);
    }
};

const obtenerRetiroIndividual = async (retiroId) => {
    try {
        const retiro = await Retiro.obtenerRetiroIndividual(retiroId);

        return(retiro);
    } catch (error) {
        throw(error);
    }
};

const registrarRetiro = async (nuevoRetiro) => {
    try {
        await Retiro.registrarRetiro(nuevoRetiro);
        
    } catch (error) {
        throw(error);
    }
};

const actualizarRetiro = (retiroId, cambios) => {
    try {
        const retiroActualizado = Retiro.actualizarRetiro(retiroId, cambios);
        
        return(retiroActualizado);
    } catch (error) {
        throw(error);
    }
};

const borrarRetiro = async (retiroId) => {
    try {
        await Retiro.borrarRetiro(retiroId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeRetiros,
    obtenerRetiroIndividual,
    registrarRetiro,
    actualizarRetiro,
    borrarRetiro,
};