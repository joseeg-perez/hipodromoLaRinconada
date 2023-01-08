const ColorStudVestimenta = require("../database/colorStudVestimenta.js");

const registrarColorStudVestimenta = async (nuevoColorStudVestimenta) => {
    try {
        await ColorStudVestimenta.registrarColorStudVestimenta(nuevoColorStudVestimenta);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const actualizarColorStudVestimenta = async (colorStudVestimentaId, cambios) => {
    try {
        await ColorStudVestimenta.actualizarColorStudVestimenta(colorStudVestimentaId, cambios);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const borrarColorStudVestimenta = async (colorStudVestimentaId) => {
    try {
        await ColorStudVestimenta.borrarColorStudVestimenta(colorStudVestimentaId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    registrarColorStudVestimenta,
    actualizarColorStudVestimenta,
    borrarColorStudVestimenta,
};