const pelajeService = require("../services/pelajeServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDePelajes = async (req, res) => {
    try {
        const listaPelajes =  await pelajeService.obtenerListaDePelajes();

        res.status(200).send({ status: "OK", data: listaPelajes });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerPelajeIndividual = async (req, res) => { 
    const {
        params: { pelajeId },
    } = req;
    
    try {
        if (!pelajeId)
            return(httpError.idVacio(res, ":pelajeId"));

        if (isNaN(pelajeId) || pelajeId === ' ')
            return(httpError.idInvalido(res, ":pelajeId"));

        const pelaje = await pelajeService.obtenerPelajeIndividual(pelajeId);
        res.status(200).send({ status: "OK", data: pelaje});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarPelaje = async (req, res) => { 
    const {
        nombrePelaje,
        abrevPelaje,
     } =  req.body;

    const nuevoPelaje = {
        nombrePelaje: nombrePelaje.toLowerCase(),
        abrevPelaje: abrevPelaje.toLowerCase(),
    };

    try {
        const pelajeCreado = await pelajeService.registrarPelaje(nuevoPelaje);
        res.status(200).send({ status: "OK", data: `Se ha creado el pelaje '${pelajeCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarPelaje = async (req, res) => {

};

const borrarPelaje = async (req, res) => {
    const {
        params: { pelajeId },
    } = req;

    try {
        if (!pelajeId)
            return(httpError.idVacio(res, "pelajeId"));

        if (isNaN(pelajeId) || pelajeId === ' ')
            return(httpError.idInvalido(res, ":pelajeId"));

        await pelajeService.borrarPelaje(pelajeId);
        res.status(200).send({ status: "OK", data: `El pelaje con el id '${pelajeId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDePelajes,
    obtenerPelajeIndividual,
    registrarPelaje,
    actualizarPelaje,
    borrarPelaje,
};
