const jineteService = require("../services/jineteServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeJinetes = async (req, res) => {
    try {
        const listaJinetes = await jineteService.obtenerListaDeJinetes();

        res.status(200).send({ status: "OK", data: listaJinetes });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    };
};

const obtenerJineteIndividual = async (req, res) => {
    const {
        params: { jineteId },
    } = req;

    try {
        const jinete = await jineteService.obtenerJineteIndividual(jineteId);
        res.status(200).send({ status: "OK", data: jinete});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const registrarJinete = async (req, res) => {
    const { 
        cedulaPersona,
        nombre1Persona,
        nombre2Persona,
        apellido1Persona,
        apellido2Persona,
        fechaNacimiento,
        alturaJinete,
        fkRango,
        pesoJinete, 
    } = req.body;
    
    const nuevoJinete = {
        cedulaPersona,
        nombre1Persona: nombre1Persona.toLowerCase(),
        nombre2Persona: nombre2Persona.toLowerCase(),
        apellido1Persona: apellido1Persona.toLowerCase(),
        apellido2Persona: apellido2Persona.toLowerCase(),
        fechaNacimiento,
        alturaJinete,
        fkRango,
        pesoJinete,
    };

    try {
        const jineteCreado = await jineteService.registrarJinete(nuevoJinete);
        res.status(200).send({ status: "OK", data: `Se ha registrado el jinete '${jineteCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarJinete = async (req, res) => {
    res.send("Estamos en actualizar jinete");

};

const borrarJinete = async (req, res) => {
    const {
        params: {jineteId},
    } = req;

    try {
        await jineteService.borrarJinete(jineteId);
        res.status(200).send({ status: "OK", data: `El jinete con el id '${jineteId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeJinetes,
    obtenerJineteIndividual,
    registrarJinete,
    actualizarJinete,
    borrarJinete,
};