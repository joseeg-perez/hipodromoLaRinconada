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
    try {
        await StudVestimenta.actualizarStudVestimenta(studVestimentaId, cambios);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const borrarStudVestimenta = async (studVestimentaId) => {
    try {
        await StudVestimenta.borrarStudVestimenta(studVestimentaId);
    } catch (error) {
        throw(error);
    }
};

const buscarStudVestimentaId = async () => {
    try {
        const listaIds = await StudVestimenta.buscarStudVestimentaId();
        
        return(listaIds);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    registrarStudVestimenta,
    actualizarStudVestimenta,
    borrarStudVestimenta,
    buscarStudVestimentaId,
};