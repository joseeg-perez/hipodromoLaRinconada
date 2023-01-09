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
        const stud = await studService.obtenerStudIndividual(studId);
        res.status(200).send({ status: "OK", data: stud});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const obtenerPropietarioDeStud = async (req, res) => {
    const {
        params: { studId },
    } = req;
    
    try {
        const stud = await studService.obtenerPropietarioDeStud(studId);
        res.status(200).send({ status: "OK", data: stud});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const obtenerPropietarioDeStudDistintos = async (req, res) => {
    const {
        params: { studId },
    } = req;
    
    try {
        const stud = await studService.obtenerPropietarioDeStudDistintos(studId);
        res.status(200).send({ status: "OK", data: stud});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const obtenerVestimentaStud = async (req, res) => {
    const {
        params: { studId },
    } = req;
    
    try {
        const stud = await studService.obtenerVestimentaStud(studId);
        res.status(200).send({ status: "OK", data: stud});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const obtenerCaballoStud = async (req, res) => {
    const {
        params: { studId },
    } = req;
    
    try {
        const stud = await studService.obtenerCaballoStud(studId);
        res.status(200).send({ status: "OK", data: stud});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const obtenerPosibleCaballoStud = async (req, res) => {
    const {
        params: { studId },
    } = req;
    
    try {
        const stud = await studService.obtenerPosibleCaballoStud(studId);
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
    const {
        body,
        params: { studId },
    } = req;

    try {
        const studActualizado = await studService.actualizarStud(studId, body);
        res.send({ status: "OK", data: `Se ha actualizado la informacion del stud '${studActualizado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarStud = async (req, res) => {
    const {
        params: { studId },
    } = req;

    try {
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
    obtenerPropietarioDeStud,
    obtenerPropietarioDeStudDistintos,
    obtenerVestimentaStud,
    obtenerCaballoStud,
    obtenerPosibleCaballoStud,
    registrarStud,
    actualizarStud,
    borrarStud,
};