const EntrenadorCaballeriza = require("../database/entrenadorCaballeriza.js");

const registrarEntrenadorCaballeriza = async (nuevoEntrenadorCaballeriza) => {
    try {
        await EntrenadorCaballeriza.registrarEntrenadorCaballeriza(nuevoEntrenadorCaballeriza);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const actualizarEntrenadorCaballeriza = async (entrenadorCaballerizaId, cambios) => {

};

const borrarEntrenadorCaballeriza = async (entrenadorCaballerizaId) => {
    try {
        await EntrenadorCaballeriza.borrarEntrenadorCaballeriza(entrenadorCaballerizaId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    registrarEntrenadorCaballeriza,
    actualizarEntrenadorCaballeriza,
    borrarEntrenadorCaballeriza,
};