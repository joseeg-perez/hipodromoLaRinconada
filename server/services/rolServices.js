const Rol = require("../database/rol.js");

const obtenerListaDeRoles = async () => {
    try {
        const listaRoles = await Rol.obtenerListaDeRoles();

        return(listaRoles);
    } catch (error) {
        throw(error);
    }
};

const obtenerRolIndividual = async (rolId) => {
    try {
        const rol = await Rol.obtenerRolIndividual(rolId);

        return(rol);
    } catch (error) {
        throw(error);
    }
};

const registrarRol = async(nuevoRol) => {
    try {
        const rolCreado = await Rol.registrarRol(nuevoRol);
        
        return(rolCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarRol = (rolId, cambios) => {

};

const borrarRol = async(rolId) => {
    try {
        await Rol.borrarRol(rolId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeRoles,
    obtenerRolIndividual,
    registrarRol,
    actualizarRol,
    borrarRol,
};