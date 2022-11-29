const rolService = require("../services/rolServices.js");

const obtenerListaDeRoles = (req, res) => {
    res.send("Estamos en listado de roles");

};

const obtenerRolIndividual = (req, res) => {
    res.send("Estamos en rol individual");
};

const registrarRol = (req, res) => {
    res.send("Estamos en registar rol");

};

const actualizarRol = (req, res) => {
    res.send("Estamos en actualizar rol");

};

const borrarRol = (req, res) => {
    res.send("Estamos en borrar rol");

};

module.exports = {
    obtenerListaDeRoles,
    obtenerRolIndividual,
    registrarRol,
    actualizarRol,
    borrarRol,
};