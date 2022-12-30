const haraService = require("../services/haraServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeHaras = async (req, res) => {
    try {
        const listaHaras =  await haraService.obtenerListaDeHaras();

        res.status(200).send({ status: "OK", data: listaHaras });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerHaraIndividual = async (req, res) => {
    const {
        params: { haraId },
    } = req;
    
    try {
        if (!haraId)
            return(httpError.idVacio(res, ":haraId"));

        if (isNaN(haraId) || haraId === ' ')
            return(httpError.idInvalido(res, ":haraId"));

        const hara = await haraService.obtenerHaraIndividual(haraId);
        res.status(200).send({ status: "OK", data: hara});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarHara = async (req, res) => {
    const { 
        nombreHara,
        fkLugar,
     } =  req.body;

    if (!nombreHara || !fkLugar)
        return (httpError.faltaInformacion(res));
    
    if (isNaN(fkLugar))
        return(res.status(422).send({ status:"FAILED", data: "Uno de los campos que espera valores numericos es invalido." }))
   
    const nuevaHara = {
        nombreHara: nombreHara.toLowerCase(),
        fkLugar,
    };

    try {
        const haraCreada = await haraService.registrarHara(nuevaHara);
        res.status(200).send({ status: "OK", data: `Se ha registrado el hara '${haraCreada}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarHara = async (req, res) => {

};

const borrarHara = async (req, res) => {
    const {
        params: { haraId },
    } = req;

    try {
        if (!haraId)
            return(httpError.idVacio(res, "haraId"));

        if (isNaN(haraId) || haraId === ' ')
            return(httpError.idInvalido(res, ":haraId"));

        await haraService.borrarHara(haraId);
        res.status(200).send({ status: "OK", data: `El hara con el id '${haraId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeHaras,
    obtenerHaraIndividual,
    registrarHara,
    actualizarHara,
    borrarHara,
};
