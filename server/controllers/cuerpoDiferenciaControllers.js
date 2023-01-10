const cuerpoDiferenciaService = require("../services/cuerpoDiferenciaServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCuerpoDiferencia = async (req, res) => {
    try {
        const listaCuerpoDiferencia =  await cuerpoDiferenciaService.obtenerListaDeCuerpoDiferencia();

        res.status(200).send({ status: "OK", data: listaCuerpoDiferencia });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerCuerpoDiferenciaIndividual = async (req, res) => { 
    const {
        params: { cuerpoDiferenciaId },
    } = req;
    
    try {
        const cuerpoDiferencia = await cuerpoDiferenciaService.obtenerCuerpoDiferenciaIndividual(cuerpoDiferenciaId);
        res.status(200).send({ status: "OK", data: cuerpoDiferencia});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarCuerpoDiferencia = async (req, res) => { 
    const {
        nombreCuerpoDiferencia,
     } =  req.body;

    const nuevoCuerpoDiferencia = {
        nombreCuerpoDiferencia: nombreCuerpoDiferencia.toLowerCase(),
    };

    try {
        const cuerpoDiferenciaCreado = await cuerpoDiferenciaService.registrarCuerpoDiferencia(nuevoCuerpoDiferencia);
        res.status(200).send({ status: "OK", data: `Se ha registrado el cuerpo de diferencia '${cuerpoDiferenciaCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarCuerpoDiferencia = async (req, res) => {
    const {
        params: { cuerpoDiferenciaId },
    } = req;

    try {
        await cuerpoDiferenciaService.borrarCuerpoDiferencia(cuerpoDiferenciaId);
        res.status(200).send({ status: "OK", data: `El cuerpo de diferencia con el id '${cuerpoDiferenciaId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeCuerpoDiferencia,
    obtenerCuerpoDiferenciaIndividual,
    registrarCuerpoDiferencia,
    borrarCuerpoDiferencia,
};
