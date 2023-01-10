const motivoRetiroService = require("../services/motivoRetiroServices.js");

const obtenerListaDeMotivosDeRetiro = async (req, res) => {
    try {
        const listaDeMotivosDeRetiros = await motivoRetiroService.obtenerListaDeMotivosDeRetiro();

        res.status(200).send({ status: "OK", data: listaDeMotivosDeRetiros });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    };
};

const obtenerMotivoDeRetiroIndividual = async (req, res) => {
    const {
        params: { motivoRetiroId },
    } = req;

    try {
        const motivoRetiro = await motivoRetiroService.obtenerMotivoDeRetiroIndividual(motivoRetiroId);
        res.status(200).send({ status: "OK", data: motivoRetiro});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const registrarMotivoDeRetiro = async (req, res) => {
    const { 
        nombreMotivo,
        descripcionMotivo, 
    } = req.body;
    
    const nuevomotivoRetiro = {
        nombreMotivo: nombreMotivo.toLowerCase(),
        descripcionMotivo: descripcionMotivo.toLowerCase(),
    };

    try {
        const motivoRetiroCreado = await motivoRetiroService.registrarMotivoDeRetiro(nuevomotivoRetiro);
        res.status(200).send({ status: "OK", data: `Se ha registrado el motivoRetiro '${motivoRetiroCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarMotivoDeRetiro = async (req, res) => {
    const {
        body,
        params: { motivoRetiroId },
    } = req;

    try {
        const motivoRetiroActualizado = await motivoRetiroService.actualizarMotivoDeRetiro(motivoRetiroId, body);
        res.send({ status: "OK", data: `Se ha actualizado la informacion del motivo de retiro '${motivoRetiroActualizado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarMotivoDeRetiro = async (req, res) => {
    const {
        params: {motivoRetiroId},
    } = req;

    try {
        await motivoRetiroService.borrarMotivoDeRetiro(motivoRetiroId);
        res.status(200).send({ status: "OK", data: `El motivoRetiro con el id '${motivoRetiroId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeMotivosDeRetiro,
    obtenerMotivoDeRetiroIndividual,
    registrarMotivoDeRetiro,
    actualizarMotivoDeRetiro,
    borrarMotivoDeRetiro,
};