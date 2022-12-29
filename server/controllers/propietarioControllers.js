const propietarioService = require("../services/propietarioServices.js");
const httpError = require("../services/httpMessages.js");

const obtenerListaDePropietarios = async (req, res) => {
    try {
        const listaPropietarios = await propietarioService.obtenerListaDePropietarios();

        res.status(200).send({ status: "OK", data: listaPropietarios });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    };
};

const obtenerPropietarioIndividual = async (req, res) => {
    const {
        params: { propietarioId },
    } = req;
    
    try {
        if (!propietarioId)
            return(httpError.idVacio(res, ":propietarioId"));

        if (isNaN(propietarioId) || propietarioId === ' ')
            return(httpError.idInvalido(res, ":propietarioId"));

        const propietario = await propietarioService.obtenerPropietarioIndividual(propietarioId);
        res.status(200).send({ status: "OK", data: propietario});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const registrarPropietario = async (req, res) => {
    res.send("Estamos en registar Propietario");

};

const actualizarPropietario = async (req, res) => {
    res.send("Estamos en actualizar Propietario");

};

const borrarPropietario = async (req, res) => {
    res.send("Estamos en borrar Propietario");

};

module.exports = {
    obtenerListaDePropietarios,
    obtenerPropietarioIndividual,
    registrarPropietario,
    actualizarPropietario,
    borrarPropietario,
};