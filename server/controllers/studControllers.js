const studService = require("../services/studServices.js");

const obtenerListaDeStuds = (req, res) => {
    res.send("Estamos en listado de studs");

};

const obtenerStudIndividual = (req, res) => {
    res.send("Estamos en stud individual");
};

const registrarStud = (req, res) => {
    res.send("Estamos en registar stud");

};

const actualizarStud = (req, res) => {
    res.send("Estamos en actualizar stud");

};

const borrarStud = (req, res) => {
    res.send("Estamos en borrar stud");

};

module.exports = {
    obtenerListaDeStuds,
    obtenerStudIndividual,
    registrarStud,
    actualizarStud,
    borrarStud,
};