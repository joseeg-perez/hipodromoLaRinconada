const categoriaCarreraService = require("../services/categoriaCarreraServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCategorias = async (req, res) => {
    try {
        const listaCategorias =  await categoriaCarreraService.obtenerListaDeCategorias();

        res.status(200).send({ status: "OK", data: listaCategorias });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerCategoriaIndividual = async (req, res) => { 
    const {
        params: { categoriaId },
    } = req;
    
    try {
        if (!categoriaId)
            return(httpError.idVacio(res, ":categoriaId"));

        if (isNaN(categoriaId) || categoriaId === ' ')
            return(httpError.idInvalido(res, ":categoriaId"));

        const categoria = await categoriaCarreraService.obtenerCategoriaIndividual(categoriaId);
        res.status(200).send({ status: "OK", data: categoria});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarCategoria = async (req, res) => { 
    const {
        nombreCategoria,
     } =  req.body;

    const nuevaCategoria = {
        nombreCategoria: nombreCategoria.toLowerCase(),
    };

    try {
        const categoriaCreada = await categoriaCarreraService.registrarCategoria(nuevaCategoria);
        res.status(200).send({ status: "OK", data: `Se ha creado la categoria '${categoriaCreada}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarCategoria = async (req, res) => {

};

const borrarCategoria = async (req, res) => {
    const {
        params: { categoriaId },
    } = req;

    try {
        if (!categoriaId)
            return(httpError.idVacio(res, "categoriaId"));

        if (isNaN(categoriaId) || categoriaId === ' ')
            return(httpError.idInvalido(res, ":categoriaId"));

        await categoriaCarreraService.borrarCategoria(categoriaId);
        res.status(200).send({ status: "OK", data: `La categoria con el id '${categoriaId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeCategorias,
    obtenerCategoriaIndividual,
    registrarCategoria,
    actualizarCategoria,
    borrarCategoria,
};
