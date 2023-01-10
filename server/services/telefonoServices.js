const Telefono = require("../database/Telefono.js");

const obtenerListaDeTelefonos = async () => {
    try {
        const listaTelefonos = await Telefono.obtenerListaDeTelefonos();

        return(listaTelefonos);
    } catch (error) {
        throw(error);
    }
};

const obtenerTelefonoIndividual = async (telefonoId) => {
    try {
        const telefono = await Telefono.obtenerTelefonoIndividual(telefonoId);

        return(telefono);
    } catch (error) {
        throw(error);
    }
};

const registrarTelefono = async (nuevoTelefono) => {
    try {
        const telefonoCreado = await Telefono.registrarTelefono(nuevoTelefono);
        
        return(telefonoCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarTelefono = async (telefonoId, cambios) => {
    try {
        Telefono.actualizarTelefono(telefonoId, cambios);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const borrarTelefono = async (telefonoId) => {
    try {
        await Telefono.borrarTelefono(telefonoId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeTelefonos,
    obtenerTelefonoIndividual,
    registrarTelefono,
    actualizarTelefono,
    borrarTelefono,
};