const restauranteService = require("../services/restauranteServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeRestaurantes = async (req, res) => {
    try {
        const listaRestaurantes =  await restauranteService.obtenerListaDeRestaurantes();

        res.status(200).send({ status: "OK", data: listaRestaurantes });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerRestauranteIndividual = async (req, res) => { 
    const {
        params: { restauranteId },
    } = req;
    
    try {
        const restaurante = await restauranteService.obtenerRestauranteIndividual(restauranteId);
        res.status(200).send({ status: "OK", data: restaurante});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarRestaurante = async (req, res) => { 
    const {
        nombreRestaurante,
        descripcionRestaurante,
        capacidadRestaurante,
        fk_area,
     } =  req.body;
   
    const nuevoRestaurante = {
        nombreRestaurante: nombreRestaurante.toLowerCase(),
        descripcionRestaurante: descripcionRestaurante.toLowerCase(),
        capacidadRestaurante,
        fk_area,
    };

    try {
        const restauranteCreado = await restauranteService.registrarRestaurante(nuevoRestaurante);
        res.status(200).send({ status: "OK", data: `Se ha registrado el restaurante '${restauranteCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarRestaurante = async (req, res) => {
    const {
        body,
        params: { restauranteId },
    } = req;

    try {
        const restauranteActualizado = await restauranteService.actualizarRestaurante(restauranteId, body);
        res.send({ status: "OK", data: `Se ha actualizado la informacion del restaurante '${restauranteActualizado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarRestaurante = async (req, res) => {
    const {
        params: { restauranteId },
    } = req;

    try {
        await restauranteService.borrarRestaurante(restauranteId);
        res.status(200).send({ status: "OK", data: `El restaurante con el id '${restauranteId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeRestaurantes,
    obtenerRestauranteIndividual,
    registrarRestaurante,
    actualizarRestaurante,
    borrarRestaurante,
};
