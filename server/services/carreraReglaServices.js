const CarreraRegla = require("../database/carreraRegla.js");

const obtenerListaDeCarreraReglas = async () => {
    try {
        const listaCarreraReglas = await CarreraRegla.obtenerListaDeCarreraReglas();

        return(listaCarreraReglas);
    } catch (error) {
        throw(error);
    }
};

const obtenerCarreraReglaIndividual = async (carreraReglaId) => { 
    try {
        const carreraRegla = await CarreraRegla.obtenerCarreraReglaIndividual(carreraReglaId);

        return(carreraRegla);
    } catch (error) {
        throw(error);
    } 
};

const registrarCarreraRegla = async (nuevaCategoriaRegla) => { 
    try {
        const carreraReglaCreada = await CarreraRegla.registrarCarreraRegla(nuevaCategoriaRegla);
        
        return(carreraReglaCreada);
    } catch (error) {
        throw(error);
    }  
};

const borrarCarreraRegla = async (carreraReglaId) => {
    try {
        await CarreraRegla.borrarCarreraRegla(carreraReglaId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeCarreraReglas,
    obtenerCarreraReglaIndividual,
    registrarCarreraRegla,
    borrarCarreraRegla,
};
