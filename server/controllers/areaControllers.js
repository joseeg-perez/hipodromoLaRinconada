const areaService = require("../services/areaServices.js");

const obtenerListaDeAreas = async (req, res) => {
    try {
        const listaAreas =  await areaService.obtenerListaDeAreas();

        res.status(200).send({ status: "OK", data: listaAreas });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerIGPFA = async (req, res) => { //Obtener Infraestructura, grada, patio, fila, asiento
    try {
        const listaEMP =  await areaService.obtenerIGPFA();

        res.status(200).send({ status: "OK", data: listaEMP });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

module.exports = {
    obtenerListaDeAreas,
    obtenerIGPFA,
};
