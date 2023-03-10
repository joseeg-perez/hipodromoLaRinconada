const rolService = require("../services/rolServices.js");

const obtenerListaDeRoles = async (req, res) => {
    try {
        const listaRoles =  await rolService.obtenerListaDeRoles();

        res.send({ status: "OK", data: listaRoles });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerRolIndividual = async (req, res) => {
    const {
        params: { rolId },
    } = req;

    try {
        const rol = await rolService.obtenerRolIndividual(rolId);
        res.status(200).send({ status: "OK", data: rol});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});       
    }
};

const registrarRol = async (req, res) => {
    const { nombre } = req.body;

    const nuevoRol = {
        nombre: nombre.toLowerCase(),
    };

    try {
        const rolCreado = await rolService.registrarRol(nuevoRol);
        res.status(200).send({ status: "OK", data: `Se ha creado el rol '${rolCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarRol = async (req, res) => {
    const {
        body,
        params: { rolId },
    } = req;

    try {
        const rolActualizado = await rolService.actualizarRol(rolId, body)
        res.send({ status: "OK", data: rolActualizado });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarRol = async (req, res) => {
    const {
        params: { rolId },
    } = req;

    try {
        await rolService.borrarRol(rolId);
        res.status(200).send({ status: "OK", data: `El rol con el id '${rolId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeRoles,
    obtenerRolIndividual,
    registrarRol,
    actualizarRol,
    borrarRol,
};