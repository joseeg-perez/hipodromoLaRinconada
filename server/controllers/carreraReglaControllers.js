const carreraReglaService = require("../services/carreraReglaServices.js");

const obtenerListaDeCarreraReglas = async (req, res) => {
    try {
        const listaCarreraReglas =  await carreraReglaService.obtenerListaDeCarreraReglas();

        res.status(200).send({ status: "OK", data: listaCarreraReglas });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerCarreraReglaIndividual = async (req, res) => { 
    const {
        params: { carreraReglaId },
    } = req;
    
    try {
        const carreraRegla = await carreraReglaService.obtenerCarreraReglaIndividual(carreraReglaId);
        res.status(200).send({ status: "OK", data: carreraRegla});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarCarreraRegla = async (req, res) => { 
    const {
        valorRegla,
        fkCarrera,
        fkRegla,
     } =  req.body;

    const nuevaCarreraRegla = {
        valorRegla,
        fkCarrera,
        fkRegla,
    };

    try {
        const carreraReglaCreada = await carreraReglaService.registrarCarreraRegla(nuevaCarreraRegla);
        res.status(200).send({ status: "OK", data: `Se ha creado la regla de la carrera '${carreraReglaCreada}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarCarreraRegla = async (req, res) => {
    const {
        params: { carreraReglaId },
    } = req;

    try {
        await carreraReglaService.borrarCarreraRegla(carreraReglaId);
        res.status(200).send({ status: "OK", data: `La regla de la carrrera con el id '${carreraReglaId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeCarreraReglas,
    obtenerCarreraReglaIndividual,
    registrarCarreraRegla,
    borrarCarreraRegla,
};
