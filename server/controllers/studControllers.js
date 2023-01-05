const studService = require("../services/studServices.js");
const httpError = require("../helpers/httpMessages.js");

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
    const { 
        fechaCreacion,
        nombreStud,
        propietarioStud,
        color1,
        color2,
        vestimentas,
     } = req.body;

    const nuevoStud = {
        nombreStud: nombreStud.toLowerCase(),
        fechaCreacion,
        propietarioStud,
        color1,
        color2,
        vestimentas,
    };

    try {
        const studCreado = await studService.registrarStud(nuevoStud);
        res.status(200).send({ status: "OK", data: `Se ha creado el stud '${ studCreado }' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }

};

const actualizarStud = async (req, res) => {
    res.send("Estamos en actualizar stud");

};

const borrarStud = async (req, res) => {
    const {
        params: { studId },
    } = req;

    try {
        if (!studId)
            return(httpError.faltaInformacion(res));

        if (isNaN(studId) || studId === ' ')
            return(httpError.idInvalido(res, ":studId"));

        await studService.borrarStud(studId);
        res.status(200).send({ status: "OK", data: `El stud con el id '${studId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeStuds,
    obtenerStudIndividual,
    registrarStud,
    actualizarStud,
    borrarStud,
};