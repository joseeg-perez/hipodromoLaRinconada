const EjemplarPropietario = require("../database/ejemplarPropietario.js");

const obtenerListaDeEjemplarPropietarios = async () => {
    try {
        const listaEjemplarPropietarioes = await EjemplarPropietario.obtenerListaDeEjemplarPropietarios();

        return(listaEjemplarPropietarioes);
    } catch (error) {
        throw(error);
    }   
};

const obtenerEjemplarPropietarioIndividual = async (ejemplarPropietarioId) => { 
    try {
        const ejemplarPropietario = await EjemplarPropietario.obtenerEjemplarPropietarioIndividual(ejemplarPropietarioId);

        return(ejemplarPropietario);
    } catch (error) {
        throw(error);
    }   
};

const registrarEjemplarPropietario = async (nuevoEjemplarPropietario) => { 
    try {
        const ejemplarPropietarioCreado = await EjemplarPropietario.registrarEjemplarPropietario(nuevoEjemplarPropietario);
        
        return(ejemplarPropietarioCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarEjemplarPropietario = async (ejemplarPropietarioId, cambios) => {
    try {
        await EjemplarPropietario.actualizarEjemplarPropietario(ejemplarPropietarioId, cambios);
        
        return;
    } catch (error) {
        throw(error);
    }   
};

const borrarEjemplarPropietario = async (ejemplarPropietarioId) => {
    try {
        await EjemplarPropietario.borrarEjemplarPropietario(ejemplarPropietarioId);
    } catch (error) {
        throw(error);
    } 
};

module.exports = {
    obtenerListaDeEjemplarPropietarios,
    obtenerEjemplarPropietarioIndividual,
    registrarEjemplarPropietario,
    actualizarEjemplarPropietario,
    borrarEjemplarPropietario,
};
