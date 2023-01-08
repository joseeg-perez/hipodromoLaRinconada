const participacionImplementoService = require("../services/participacionImplementoServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeParticipacionImplementos = async (req, res) => {
    try {
        const listaParticipacionImplemento =  await participacionImplementoService.obtenerListaDeParticipacionImplementos();

        res.status(200).send({ status: "OK", data: listaParticipacionImplemento });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerParticipacionImplementoIndividual = async (req, res) => { 
    const {
        params: { participacionImplementoId },
    } = req;
    
    try {
        const participacionImplemento = await participacionImplementoService.obtenerParticipacionImplementoIndividual(participacionImplementoId);
        res.status(200).send({ status: "OK", data: participacionImplemento});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarParticipacionImplemento = async (req, res) => { 
    const {
        fkImplemento,
        fkParticipacion,
     } =  req.body;

    const nuevaParticipacionImplemento = {
        fkImplemento,
        fkParticipacion,
    };

    try {
        await participacionImplementoService.registrarParticipacionImplemento(nuevaParticipacionImplemento);
        res.status(200).send({ status: "OK", data: `Se ha registrado el implemento en la participacion de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarParticipacionImplemento = async (req, res) => {
    const {
        body,
        params: { participacionImplementoId },
    } = req;

    try {
        await participacionImplementoService.actualizarParticipacionImplemento(participacionImplementoId, body);
        res.send({ status: "OK", data: `Se ha actualizado la informacion del implemento asociado a una participacion de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarParticipacionImplemento = async (req, res) => {
    const {
        params: { participacionImplementoId },
    } = req;

    try {
        await participacionImplementoService.borrarParticipacionImplemento(participacionImplementoId);
        res.status(200).send({ status: "OK", data: `El implemento en la participacion con el id '${participacionImplementoId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeParticipacionImplementos,
    obtenerParticipacionImplementoIndividual,
    registrarParticipacionImplemento,
    actualizarParticipacionImplemento,
    borrarParticipacionImplemento,
};
