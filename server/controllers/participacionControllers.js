const participacionService = require("../services/participacionServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeParticipaciones = async (req, res) => {
    try {
        const listaDeParticipaciones = await participacionService.obtenerListaDeParticipaciones();

        res.status(200).send({ status: "OK", data: listaDeParticipaciones });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    };
};

const obtenerParticipacionIndividual = async (req, res) => {
    const {
        params: { participacionId },
    } = req;

    try {
        const participacion = await participacionService.obtenerParticipacionIndividual(participacionId);
        res.status(200).send({ status: "OK", data: participacion});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const registrarParticipacion = async (req, res) => {
    const { 
        gualdrapa,
        puestoPista,
        pesoCaballo,
        precioEjemplar,
        comentario,
        fkEjemplar,
        fkCarrera,
        fkJinete,
        fkEntrenador,
        fkRetiro,
        fkResultado,
        fkStud,
    } = req.body;

    const nuevaParticipacion = {
        gualdrapa,
        puestoPista,
        pesoCaballo,
        precioEjemplar,
        comentario: comentario.toLowerCase(),
        fkEjemplar,
        fkCarrera,
        fkJinete,
        fkEntrenador,
        fkRetiro,
        fkResultado,
        fkStud,
    };

    try {
        const participacionCreada = await participacionService.registrarParticipacion(nuevaParticipacion);
        res.status(200).send({ status: "OK", data: `Se ha registrado la participacion en el puesto '${ participacionCreada }' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarParticipacion = async (req, res) => {
    const {
        body,
        params: { participacionId },
    } = req;

    try {
        await participacionService.actualizarParticipacion(participacionId, body);
        res.send({ status: "OK", data: `Se ha actualizado la informacion de la participacion de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }

};

const borrarParticipacion = async (req, res) => {
    const {
        params: { participacionId },
    } = req;

    try {
        await participacionService.borrarParticipacion(participacionId);
        res.status(200).send({ status: "OK", data: `El participacion con el id '${ participacionId }' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeParticipaciones,
    obtenerParticipacionIndividual,
    registrarParticipacion,
    actualizarParticipacion,
    borrarParticipacion,
};