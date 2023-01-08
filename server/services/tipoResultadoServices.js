const TipoResultado = require("../database/tipoResultado.js");

const obtenerListaDeTipoResultado = async () => {
    try {
        const listaTipoResultado = await TipoResultado.obtenerListaDeTipoResultado();

        return(listaTipoResultado);
    } catch (error) {
        throw(error);
    }
};

const obtenerTipoResultadoIndividual = async (tipoResultadoId) => {
    try {
        const tipoResultado = await TipoResultado.obtenerTipoResultadoIndividual(tipoResultadoId);

        return(tipoResultado);
    } catch (error) {
        throw(error);
    }
};

const registrarTipoResultado = async (nuevoTipoResultado) => {
    try {
        const tipoResultadoCreado = await TipoResultado.registrarTipoResultado(nuevoTipoResultado);
        
        return(tipoResultadoCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarTipoResultado = (tipoResultadoId, cambios) => {
    try {
        const tipoResultadoActualizado = TipoResultado.actualizarTipoResultado(tipoResultadoId, cambios);
        
        return(tipoResultadoActualizado);
    } catch (error) {
        throw(error);
    }
};

const borrarTipoResultado = async (tipoResultadoId) => {
    try {
        await TipoResultado.borrarTipoResultado(tipoResultadoId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeTipoResultado,
    obtenerTipoResultadoIndividual,
    registrarTipoResultado,
    actualizarTipoResultado,
    borrarTipoResultado,
};