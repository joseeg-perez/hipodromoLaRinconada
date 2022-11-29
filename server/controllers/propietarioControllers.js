const propietarioService = require("../services/propietarioServices.js");

const obtenerListaDePropietarios = (req, res) => {
    res.send("Estamos en listado de Propietarios");

};

const obtenerPropietarioIndividual = (req, res) => {
    res.send("Estamos en Propietario individual");
};

const registrarPropietario = (req, res) => {
    res.send("Estamos en registar Propietario");

};

const actualizarPropietario = (req, res) => {
    res.send("Estamos en actualizar Propietario");

};

const borrarPropietario = (req, res) => {
    res.send("Estamos en borrar Propietario");

};

module.exports = {
    obtenerListaDePropietarios,
    obtenerPropietarioIndividual,
    registrarPropietario,
    actualizarPropietario,
    borrarPropietario,
};