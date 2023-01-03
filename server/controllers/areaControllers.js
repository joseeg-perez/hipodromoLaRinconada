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

module.exports = {
    obtenerListaDeAreas,
};
