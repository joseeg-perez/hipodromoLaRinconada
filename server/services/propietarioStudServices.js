const PropietarioStud = require("../database/propietarioStud.js");

const registrarPropietarioStud = async (nuevoPropietarioStud) => {
    try {
        await PropietarioStud.registrarPropietarioStud(nuevoPropietarioStud);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const actualizarPropietarioStud = async (propietarioStudId, cambios) => {

};

const borrarPropietarioStud = async (propietarioStudId) => {
    try {
        await PropietarioStud.borrarPropietarioStud(propietarioStudId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    registrarPropietarioStud,
    actualizarPropietarioStud,
    borrarPropietarioStud,
};