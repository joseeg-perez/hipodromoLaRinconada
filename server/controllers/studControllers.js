const studService = require("../services/studServices.js");
const httpError = require("../services/httpMessages.js");

const obtenerListaDeStuds = async (req, res) => {
    try {
        const listaStuds = await studService.obtenerListaDeStuds();

        res.status(200).send({ status: "OK", data: listaStuds });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerStudIndividual = async (req, res) => {
    const {
        params: { studId },
    } = req;
    
    try {
        if (!studId)
            return(httpError.idVacio(res, ":studId"));

        if (isNaN(studId) || studId === ' ')
            return(httpError.idInvalido(res, ":studId"));

        const stud = await studService.obtenerStudIndividual(studId);
        res.status(200).send({ status: "OK", data: stud});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const registrarStud = async (req, res) => {
    res.send("Estamos en registar stud");

};

const actualizarStud = async (req, res) => {
    res.send("Estamos en actualizar stud");

};

const borrarStud = async (req, res) => {
    res.send("Estamos en borrar stud");

};

module.exports = {
    obtenerListaDeStuds,
    obtenerStudIndividual,
    registrarStud,
    actualizarStud,
    borrarStud,
};