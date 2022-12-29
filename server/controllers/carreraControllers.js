const carreraService = require("../services/carreraServices.js");
const httpError = require("../services/httpMessages.js");

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

};

const actualizarCarrera = async (req, res) => {

};

const borrarCarrera = async (req, res) => {

};

module.exports = {
    obtenerListaDeCarreras,
    obtenerCarreraIndividual,
    registrarCarrera,
    actualizarCarrera,
    borrarCarrera,
};
