const Propietario = require("../database/propietario.js");

const obtenerListaDePropietarios = async () => {
    try {
        const listaPropietarios = await Propietario.obtenerListaDePropietarios();

        return(listaPropietarios);
    } catch (error) {
        throw(error);
    }
};

const obtenerPropietarioIndividual = async(propietarioId) => {
    try {
        const propietario = await Propietario.obtenerPropietarioIndividual(propietarioId);

        return(propietario);
    } catch (error) {
        throw(error);
    }
};

const registrarPropietario = async (nuevoPropietario) => {
    try {
        const propietarioCreado = await Propietario.registrarPropietario(nuevoPropietario);
        
        return(propietarioCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarPropietario = async (propietarioId, cambios) => {

};

const borrarPropietario = async (propietarioId) => {
    try {
        await Propietario.borrarPropietario(propietarioId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDePropietarios,
    obtenerPropietarioIndividual,
    registrarPropietario,
    actualizarPropietario,
    borrarPropietario,
};