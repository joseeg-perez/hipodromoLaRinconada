const ejemplarPropietarioService = require("../services/ejemplarPropietarioServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEjemplarPropietarios = async (req, res) => {
    try {
        const listaEjemplarPropietarios =  await ejemplarPropietarioService.obtenerListaDeEjemplarPropietarios();

        res.status(200).send({ status: "OK", data: listaEjemplarPropietarios });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerEjemplarPropietarioIndividual = async (req, res) => { 
    const {
        params: { ejemplarPropietarioId },
    } = req;
    
    try {
        const ejemplarPropietario = await ejemplarPropietarioService.obtenerEjemplarPropietarioIndividual(ejemplarPropietarioId);
        res.status(200).send({ status: "OK", data: ejemplarPropietario});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarEjemplarPropietario = async (req, res) => { 
    const { 
        porcentajePropiedad,
        fechaInicioPropiedad,
        fechaFinPropiedad,
        fkEjemplar,
        fkPropStud,
     } =  req.body;

    const nuevoEjemplarPropietario = {
        porcentajePropiedad,
        fechaInicioPropiedad,
        fechaFinPropiedad,
        fkEjemplar,
        fkPropStud,
    };

    try {
        const ejemplarPropietarioCreado = await ejemplarPropietarioService.registrarEjemplarPropietario(nuevoEjemplarPropietario);
        res.status(200).send({ status: "OK", data: `Se ha creado el ejemplarPropietario '${ejemplarPropietarioCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarEjemplarPropietario = async (req, res) => {
    const {
        body,
        params: { ejemplarPropietarioId },
    } = req;

    try {
        await ejemplarPropietarioService.actualizarEjemplarPropietario(ejemplarPropietarioId, body);
        res.send({ status: "OK", data: `El ejemplar asociado a un propietario fue actualizado con exito` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarEjemplarPropietario = async (req, res) => {
    const {
        params: { ejemplarPropietarioId },
    } = req;

    try {
        await ejemplarPropietarioService.borrarEjemplarPropietario(ejemplarPropietarioId);
        res.status(200).send({ status: "OK", data: `El ejemplarPropietario con el id '${ejemplarPropietarioId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeEjemplarPropietarios,
    obtenerEjemplarPropietarioIndividual,
    registrarEjemplarPropietario,
    actualizarEjemplarPropietario,
    borrarEjemplarPropietario,
};
