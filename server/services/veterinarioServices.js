const Veterinario = require("../database/Veterinario.js");

const obtenerListaDeVeterinarios = async () => {
    try {
        const listaVeterinarios = await Veterinario.obtenerListaDeVeterinarios();

        return(listaVeterinarios);
    } catch (error) {
        throw(error);
    }
};

const obtenerVeterinarioIndividual = async (veterinarioId) => {
    try {
        const veterinario = await Veterinario.obtenerVeterinarioIndividual(veterinarioId);

        return(veterinario);
    } catch (error) {
        throw(error);
    }
};

const registrarVeterinario = async (nuevaVeterinario) => {
    try {
        const veterinarioCreado = await Veterinario.registrarVeterinario(nuevaVeterinario);
        
        return(veterinarioCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarVeterinario = (veterinarioId, cambios) => {
    try {
        const veterinarioActualizada = Veterinario.actualizarVeterinario(veterinarioId, cambios);
        
        return(veterinarioActualizada);
    } catch (error) {
        throw(error);
    }
};

const borrarVeterinario = async (veterinarioId) => {
    try {
        await Veterinario.borrarVeterinario(veterinarioId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeVeterinarios,
    obtenerVeterinarioIndividual,
    registrarVeterinario,
    actualizarVeterinario,
    borrarVeterinario,
};