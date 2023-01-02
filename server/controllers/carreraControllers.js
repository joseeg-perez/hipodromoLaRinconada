const carreraService = require("../services/carreraServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCarreras = async (req, res) => {
    try {
        const listaCarreras =  await carreraService.obtenerListaDeCarreras();

        res.status(200).send({ status: "OK", data: listaCarreras });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerCarreraIndividual = async (req, res) => {
    const {
        params: { carreraId },
    } = req;

    try {
        if (!carreraId)
            return(httpError.idVacio(res, ":carreraId"));

        if (isNaN(carreraId) || carreraId === ' ')
            return(httpError.idInvalido(res, ":carreraId"));
            
        const carrera = await carreraService.obtenerCarreraIndividual(carreraId);
        res.status(200).send({ status: "OK", data: carrera});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const registrarCarrera = async (req, res) => {
    const {
        codigoCarrera,
        nombreCarrera,
        numeroCarrera,
        premioPrimero,
        premioSegundo,
        premioTercero,
        premioCuarto,
        premioQuinto,
        horaCarrera,
        fkEvento,
        fkCategorioCarrera,
     } = req.body;

    if (!codigoCarrera ||
        !nombreCarrera ||
        !numeroCarrera ||
        !premioPrimero ||
        !premioSegundo ||
        !premioTercero ||
        !premioCuarto ||
        !premioQuinto ||
        !horaCarrera ||
        !fkEvento ||
        !fkCategorioCarrera)
        return (httpError.faltaInformacion(res));

    const nuevaCarrera = {
        codigoCarrera,
        nombreCarrera: nombreCarrera.toLowerCase(),
        numeroCarrera,
        premioPrimero,
        premioSegundo,
        premioTercero,
        premioCuarto,
        premioQuinto,
        horaCarrera,
        fkEvento,
        fkCategorioCarrera,
    };

    try {
        const carreraCreada = await carreraService.registrarCarrera(nuevaCarrera);
        res.status(200).send({ status: "OK", data: `Se ha creado la carrera '${carreraCreada}' de forma satisfactoria` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarCarrera = async (req, res) => {

};

const borrarCarrera = async (req, res) => {
    const {
        params: { carreraId },
    } = req;

    try {
        if (!carreraId)
            return(httpError.faltaInformacion(res));
        
        if (isNaN(carreraId) || carreraId === ' ')
            return(httpError.idInvalido(res, ":carreraId"));

        await carreraService.borrarCarrera(carreraId);
        res.status(200).send({ status: "OK", data: `La carrera con el id '${carreraId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeCarreras,
    obtenerCarreraIndividual,
    registrarCarrera,
    actualizarCarrera,
    borrarCarrera,
};
