const jineteService = require("../services/jineteServices.js");
const httpError = require("../services/httpMessages.js");

const obtenerListaDeJinetes = async (req, res) => {
    try {
        const listaJinetes = await jineteService.obtenerListaDeJinetes();

        res.status(200).send({ status: "OK", data: listaJinetes });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    };
};

const obtenerJineteIndividual = async (req, res) => {
    const {
        params: { jineteId },
    } = req;

    try {
        if (!jineteId)
            return(httpError.idVacio(res, ":jineteId"));

        if (isNaN(jineteId) || jineteId === ' ')
            return(httpError.idInvalido(res, ":jineteId"));

        const jinete = await jineteService.obtenerJineteIndividual(jineteId);
        res.status(200).send({ status: "OK", data: jinete});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const registrarJinete = async (req, res) => {
    
};

const actualizarJinete = async (req, res) => {
    res.send("Estamos en actualizar jinete");

};

const borrarJinete = async (req, res) => {
    const {
        params: {jineteId},
    } = req;

    try {
        if (isNaN(jineteId) || jineteId === ' ')
            return(httpError.idInvalido(res, ":jineteId"));

        if (!jineteId)
            httpError.faltaInformacion(res);

        await jineteService.borrarJinete(jineteId);
        res.status(200).send({ status: "OK", data: "Jinete eliminado con exito." });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeJinetes,
    obtenerJineteIndividual,
    registrarJinete,
    actualizarJinete,
    borrarJinete,
};