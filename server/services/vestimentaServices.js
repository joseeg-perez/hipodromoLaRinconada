const Vestimenta = require("../database/vestimenta.js");

const obtenerListaDeVestimentas = async () => {
    try {
        const listaVestimentas = await Vestimenta.obtenerListaDeVestimentas();

        return(listaVestimentas);
    } catch (error) {
        throw(error);
    }
};

const obtenerVestimentaIndividual = async (vestimentaId) => {
    try {
        const vestimenta = await Vestimenta.obtenerVestimentaIndividual(vestimentaId);

        return(vestimenta);
    } catch (error) {
        throw(error);
    }
};

const registrarVestimenta = async (nuevaVestimenta) => {
    try {
        const vestimentaCreada = await Vestimenta.registrarVestimenta(nuevaVestimenta);
        
        return(vestimentaCreada);
    } catch (error) {
        throw(error);
    }
};

const actualizarVestimenta = async (vestimentaId, cambios) => {
    try {
        const vestimentaActualizada = await Vestimenta.actualizarVestimenta(vestimentaId, cambios);
        
        return(vestimentaActualizada);
    } catch (error) {
        throw(error);
    }
};

const borrarVestimenta = async (vestimentaId) => {
    try {
        await Vestimenta.borrarVestimenta(vestimentaId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeVestimentas,
    obtenerVestimentaIndividual,
    registrarVestimenta,
    actualizarVestimenta,
    borrarVestimenta,
};