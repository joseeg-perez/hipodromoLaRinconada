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
    try {
        const studCreado = await Stud.registrarStud(nuevoStud);
        const idStudCreado = await Stud.obtenerIdStudNueva(nuevoStud);
        console.log(idStudCreado);
        
        return(studCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarStud = async (studId, cambios) => {

};

const borrarStud = async (studId) => {
    try {
        await Stud.borrarStud(studId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeStuds,
    obtenerStudIndividual,
    registrarStud,
    actualizarStud,
    borrarStud,
};