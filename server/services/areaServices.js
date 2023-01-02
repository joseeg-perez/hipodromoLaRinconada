const Area = require("../database/Area.js");

const obtenerListaDeAreas = async () => {
    try {
        const listaAreas = await Area.obtenerListaDeAreas();

        return(listaAreas);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeAreas,
};