const StudVestimenta = require("../database/studVestimenta.js");

const registrarStudVestimenta = async (nuevoStudVestimenta) => {
    try {
        await StudVestimenta.registrarStudVestimenta(nuevoStudVestimenta);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const actualizarStudVestimenta = async (studVestimentaId, cambios) => {

};

const borrarStudVestimenta = async (studVestimentaId) => {
    try {
        await StudVestimenta.borrarStudVestimenta(studVestimentaId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    registrarStudVestimenta,
    actualizarStudVestimenta,
    borrarStudVestimenta,
};