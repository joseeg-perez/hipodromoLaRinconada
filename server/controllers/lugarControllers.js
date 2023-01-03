const lugarService = require("../services/lugarServices.js");

const obtenerListaDelugares = async (req, res) => {
    try {
        const listaLugares =  await lugarService.obtenerListaDeLugares();

        res.status(200).send({ status: "OK", data: listaLugares });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerEMP = async (req, res) => { //Obtener Estados, municipios y parroquias
    try {
        const listaEMP =  await lugarService.obtenerEMP();

        res.status(200).send({ status: "OK", data: listaEMP });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

module.exports = {
    obtenerListaDelugares,
    obtenerEMP,
};
