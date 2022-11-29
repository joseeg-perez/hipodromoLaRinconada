const ejemplarService = require("../services/ejemplarServices.js");


const obtenerListaDeEjemplares = (req, res) => {
    res.send("Estamos en lista de ejemplares ROUTER");
};

const obtenerEjemplarIndividual = (req, res) => {
    res.send("Estamos en ejemplar individual ROUTER");

};

const registrarEjemplar = (req, res) => {
    res.send("Estamos en registrar ejemplar ROUTER");

};

const actualizarEjemplar = (req, res) => {
    res.send("Estamos en actualizar ejemplar ROUTER");

};

const borrarEjemplar = (req, res) => {
    res.send("Estamos en borrar ejemplar ROUTER");

};

module.exports = {
    obtenerListaDeEjemplares,
    obtenerEjemplarIndividual,
    registrarEjemplar,
    actualizarEjemplar,
    borrarEjemplar,
};
