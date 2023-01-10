const Area = require("../database/area.js");

const obtenerListaDeAreas = async () => {
    try {
        const listaAreas = await Area.obtenerListaDeAreas();

        return(listaAreas);
    } catch (error) {
        throw(error);
    }
};

const obtenerIGPFA = async () => {
    try {
        const listaIGPFA = await Area.obtenerIGPFA();

        return(listaIGPFA);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeAreas,
    obtenerIGPFA,
};