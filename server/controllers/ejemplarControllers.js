const ejemplarService = require("../services/ejemplarServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEjemplares = async (req, res) => {
    try {
        const listaEjemplares =  await ejemplarService.obtenerListaDeEjemplares();

        res.status(200).send({ status: "OK", data: listaEjemplares });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerEjemplarIndividual = async (req, res) => { 
    const {
        params: { ejemplarId },
    } = req;
    
    try {
        if (!ejemplarId)
            return(httpError.idVacio(res, ":ejemplarId"));

        if (isNaN(ejemplarId) || ejemplarId === ' ')
            return(httpError.idInvalido(res, ":ejemplarId"));

        const ejemplar = await ejemplarService.obtenerEjemplarIndividual(ejemplarId);
        res.status(200).send({ status: "OK", data: ejemplar});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarEjemplar = async (req, res) => { 
    const { 
        nombreEjemplar,
        numeroEjemplar,
        tatlabialEjemplar,
        precioEjemplar,
        fecha_nacEjemplar,
        pesoEjemplar,
        padreEjemplar,
        madreEjemplar,
        imagenEjemplar,
        haraEjemplar,
        pelajeEjemplar,
        generoEjemplar,
     } =  req.body;

    const nuevoEjemplar = {
        nombreEjemplar: nombreEjemplar.toLowerCase(),
        numeroEjemplar,
        tatlabialEjemplar,
        precioEjemplar,
        fecha_nacEjemplar,
        pesoEjemplar,
        padreEjemplar,
        madreEjemplar,
        imagenEjemplar,
        haraEjemplar,
        pelajeEjemplar,
        generoEjemplar: generoEjemplar.toLowerCase(),
    };

    try {
        const ejemplarCreado = await ejemplarService.registrarEjemplar(nuevoEjemplar);
        res.status(200).send({ status: "OK", data: `Se ha creado el ejemplar '${ejemplarCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarEjemplar = async (req, res) => {
    const {
        body,
        params: { ejemplarId },
    } = req;

    console.log(ejemplarId)

    if (!ejemplarId)
        httpError.idVacio(res, "ejemplarId");

    try {
        const ejemplarActualizado = await ejemplarService.actualizarEjemplar(ejemplarId, body);
        res.send({ status: "OK", data: ejemplarActualizado });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }

};

const borrarEjemplar = async (req, res) => {
    const {
        params: { ejemplarId },
    } = req;

    try {
        if (!ejemplarId)
            return(httpError.idVacio(res, "ejemplarId"));

        if (isNaN(ejemplarId) || ejemplarId === ' ')
            return(httpError.idInvalido(res, ":ejemplarId"));

        await ejemplarService.borrarEjemplar(ejemplarId);
        res.status(200).send({ status: "OK", data: `El ejemplar con el id '${ejemplarId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeEjemplares,
    obtenerEjemplarIndividual,
    registrarEjemplar,
    actualizarEjemplar,
    borrarEjemplar,
};
