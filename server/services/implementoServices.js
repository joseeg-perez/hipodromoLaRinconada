const Implemento = require("../database/implemento.js");

const obtenerListaDeImplementos = async () => {
    try {
        const listaEjemplares = await Implemento.obtenerListaDeImplementos();

        return(listaEjemplares);
    } catch (error) {
        throw(error);
    }
};

const obtenerImplementoIndividual = async (implementoId) => {
    try {
        const implemento = await Implemento.obtenerImplementoIndividual(implementoId);

        return(implemento);
    } catch (error) {
        throw(error);
    }
};

const registrarImplemento = async (nuevoImplemento) => {
    try {
        const implementoCreado = await Implemento.registrarImplemento(nuevoImplemento);
        
        return(implementoCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarImplemento = async (implementoId, cambios) => {

};

const borrarImplemento = async (implementoId) => {
    try {
        await Implemento.borrarImplemento(implementoId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeImplementos,
    obtenerImplementoIndividual,
    registrarImplemento,
    actualizarImplemento,
    borrarImplemento,
};