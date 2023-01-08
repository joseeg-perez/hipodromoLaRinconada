const MotivoRetiro = require("../database/MotivoRetiro.js");

const obtenerListaDeMotivosDeRetiro = async () => {
    try {
        const listaMotivoRetiros = await MotivoRetiro.obtenerListaDeMotivosDeRetiro();

        return(listaMotivoRetiros);
    } catch (error) {
        throw(error);
    }
};

const obtenerMotivoDeRetiroIndividual = async (motivoRetiroId) => {
    try {
        const motivoRetiro = await MotivoRetiro.obtenerMotivoDeRetiroIndividual(motivoRetiroId);

        return(motivoRetiro);
    } catch (error) {
        throw(error);
    }
};

const registrarMotivoDeRetiro = async (nuevoMotivoRetiro) => {
    try {
        const motivoRetiroCreado = await MotivoRetiro.registrarMotivoDeRetiro(nuevoMotivoRetiro);
        
        return(motivoRetiroCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarMotivoDeRetiro = async (motivoRetiroId, cambios) => {
    try {
        const motivoRetiroActualizado = await MotivoRetiro.actualizarMotivoDeRetiro(motivoRetiroId, cambios);
        
        return(motivoRetiroActualizado);
    } catch (error) {
        throw(error);
    }
};

const borrarMotivoDeRetiro = async (motivoRetiroId) => {
    try {
        await MotivoRetiro.borrarMotivoDeRetiro(motivoRetiroId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeMotivosDeRetiro,
    obtenerMotivoDeRetiroIndividual,
    registrarMotivoDeRetiro,
    actualizarMotivoDeRetiro,
    borrarMotivoDeRetiro,
};