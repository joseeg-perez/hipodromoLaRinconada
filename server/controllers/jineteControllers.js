const jineteService = require("../services/jineteServices.js");

const obtenerListaDeJinetes = (req, res) => {
    res.send("Estamos en listado de jinetes");

};

const obtenerJineteIndividual = (req, res) => {
    res.send("Estamos en jinete individual");
};

const registrarJinete = (req, res) => {
    res.send("Estamos en registar jinete");

};

const actualizarJinete = (req, res) => {
    res.send("Estamos en actualizar jinete");

};

const borrarJinete = (req, res) => {
    res.send("Estamos en borrar jinete");

};

module.exports = {
    obtenerListaDeJinetes,
    obtenerJineteIndividual,
    registrarJinete,
    actualizarJinete,
    borrarJinete,
};