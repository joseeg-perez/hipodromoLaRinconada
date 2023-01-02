const Lugar = require("../database/Lugar.js");

const obtenerListaDeLugares = async () => {
    try {
        const listaLugares = await Lugar.obtenerListaDeLugares();

        return(listaLugares);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeLugares,
};