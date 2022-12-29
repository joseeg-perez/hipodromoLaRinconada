const Stud = require("../database/stud.js");

const obtenerListaDeStuds = async () => {
    try {
        const listaStuds = await Stud.obtenerListaDeStuds();

        return(listaStuds);
    } catch (error) {
        throw(error);
    }
};  

const obtenerStudIndividual = async (studId) => {
    try {
        const stud = await Stud.obtenerStudIndividual(studId);

        return(stud);
    } catch (error) {
        throw(error);
    }
};

const registrarStud = async (nuevoStud) => {

};

const actualizarStud = async (studId, cambios) => {

};

const borrarStud = async (studId) => {

};

module.exports = {
    obtenerListaDeStuds,
    obtenerStudIndividual,
    registrarStud,
    actualizarStud,
    borrarStud,
};