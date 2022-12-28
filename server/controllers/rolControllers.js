const rolService = require("../services/rolServices.js");
const httpError = require("../services/httpMessages.js");

const obtenerListaDeRoles = async (req, res) => {
    try {
        const listaRoles =  await rolService.obtenerListaDeRoles();

        res.send({ status: "OK", data: listaRoles });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    };
};
//Este es el que esta dando el error
const obtenerRolIndividual = async (req, res) => {
    const {
        params: { rolId },
    } = req;
    
    try {
        if (!rolId)
            httpError.idVacio(res, ":rolId");

        const rol = await rolService.obtenerRolIndividual(rolId);
        if (rol.length === 0)
            return(res.status(202).send({status: "FAILED", data:`El rol con codigo '${rolId}' no se encuentra registrado.`}));

        return(res.status(200).send({ status: "OK", data: rol}));
    } catch (error) {
        throw(error);        
    }
};

const registrarRol = async (req, res) => {
    const { nombre } = req.body;

    if (!nombre)
        return (httpError.faltaInformacion(res));

    const nuevoRol = {
        nombre: nombre.toLowerCase()
    };

    try {
        const rolCreado = await rolService.registrarRol(nuevoRol);

        res.status(200).send({ status: "OK", data: `Se ha creado el rol '${rolCreado}' de forma satisfactoria` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarRol = (req, res) => {
    res.send("Estamos en actualizar rol");

};

const borrarRol = async (req, res) => {
    const {
        params: {rolId},
    } = req;

    if (!rolId)
        httpError.faltaInformacion(res);

    try {
        await rolService.borrarRol(rolId);

        res.status(200).send({ status: "OK", data: "Rol eliminado con exito." });
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