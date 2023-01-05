const tipoResultadoService = require("../services/tipoResultadoServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeTipoResultado = async (req, res) => {
    try {
        const listaTipoResultado =  await tipoResultadoService.obtenerListaDeTipoResultado();

        res.status(200).send({ status: "OK", data: listaTipoResultado });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerTipoResultadoIndividual = async (req, res) => { 
    const {
        params: { tipoResultado },
    } = req;
    
    try {
        if (!tipoResultado)
            return(httpError.idVacio(res, ":tipoResultado"));

        if (isNaN(tipoResultado) || tipoResultado === ' ')
            return(httpError.idInvalido(res, ":tipoResultado"));

        const TipoResultado = await tipoResultadoService.obtenerTipoResultadoIndividual(tipoResultado);
        res.status(200).send({ status: "OK", data: TipoResultado});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarTipoResultado = async (req, res) => { 
    const {
        nombreTipoResultado,
     } =  req.body;

    const nuevoTipoResultado = {
        nombreTipoResultado: nombreTipoResultado.toLowerCase(),
    };

    try {
        const tipoResultadoCreado = await tipoResultadoService.registrarTipoResultado(nuevoTipoResultado);
        res.status(200).send({ status: "OK", data: `Se ha creado el tipo de resultado '${tipoResultadoCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarTipoResultado = async (req, res) => {

};

const borrarTipoResultado = async (req, res) => {
    const {
        params: { tipoResultado },
    } = req;

    try {
        if (!tipoResultado)
            return(httpError.idVacio(res, "tipoResultado"));

        if (isNaN(tipoResultado) || tipoResultado === ' ')
            return(httpError.idInvalido(res, ":tipoResultado"));

        await tipoResultadoService.borrarTipoResultado(tipoResultado);
        res.status(200).send({ status: "OK", data: `El tipo de resultado con el id '${tipoResultado}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeTipoResultado,
    obtenerTipoResultadoIndividual,
    registrarTipoResultado,
    actualizarTipoResultado,
    borrarTipoResultado,
};
