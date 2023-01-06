const CuerpoDiferencia = require("../database/cuerpoDiferencia.js");

const obtenerListaDeCuerpoDiferencia = async () => {
    try {
        const listaCuerpoDiferencia = await CuerpoDiferencia.obtenerListaDeCuerpoDiferencia();

        return(listaCuerpoDiferencia);
    } catch (error) {
        throw(error);
    }
};

const obtenerCuerpoDiferenciaIndividual = async (cuerpoDiferenciaId) => { 
    try {
        const cuerpoDiferencia = await CuerpoDiferencia.obtenerCuerpoDiferenciaIndividual(cuerpoDiferenciaId);

        return(cuerpoDiferencia);
    } catch (error) {
        throw(error);
    }
};

const registrarCuerpoDiferencia = async (nuevoCuerpoDiferencia) => { 
    try {
        const cuerpoDiferenciaCreado = await CuerpoDiferencia.registrarCuerpoDiferencia(nuevoCuerpoDiferencia);
        
        return(cuerpoDiferenciaCreado);
    } catch (error) {
        throw(error);
    }
};


const borrarCuerpoDiferencia = async (cuerpoDiferenciaId) => {
    try {
        await CuerpoDiferencia.borrarCuerpoDiferencia(cuerpoDiferenciaId)
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeCuerpoDiferencia,
    obtenerCuerpoDiferenciaIndividual,
    registrarCuerpoDiferencia,
    borrarCuerpoDiferencia,
};
