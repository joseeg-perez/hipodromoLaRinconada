const Resultado = require("../database/resultado.js");

const obtenerListaDeResultados = async () => {
    try {
        const listaResultados = await Resultado.obtenerListaDeResultados();

        return(listaResultados);
    } catch (error) {
        throw(error);
    }
};

const obtenerResultadoIndividual = async (resultadoId) => {
    try {
        const resultado = await Resultado.obtenerResultadoIndividual(resultadoId);

        return(resultado);
    } catch (error) {
        throw(error);
    }
};

const registrarResultado = async (nuevoResultado) => {
    try {
        const resultadoCreado = await Resultado.registrarResultado(nuevoResultado);

        return(resultadoCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarResultado = (resultadoId, cambios) => {
    try {
        const resultadoActualizado = Resultado.actualizarResultado(resultadoId, cambios);
        
        return(resultadoActualizado);
    } catch (error) {
        throw(error);
    }
};

const borrarResultado = async (resultadoId) => {
    try {
        await Resultado.borrarResultado(resultadoId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeResultados,
    obtenerResultadoIndividual,
    registrarResultado,
    actualizarResultado,
    borrarResultado,
};