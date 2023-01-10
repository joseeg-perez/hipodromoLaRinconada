const eventoService = require("../services/eventoServices.js");

const obtenerListaDeEventos = async (req, res) => {
    try {
        const listaEventos =  await eventoService.obtenerListaDeEventos();

        res.status(200).send({ status: "OK", data: listaEventos });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerEventoIndividual = async (req, res) => { 
    const {
        params: { eventoId },
    } = req;
    
    try {
        const evento = await eventoService.obtenerEventoIndividual(eventoId);
        res.status(200).send({ status: "OK", data: evento});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarEvento = async (req, res) => { 
    const {
        fechaEvento,
     } =  req.body;

    const nuevoEvento = {
        fechaEvento,
    };

    try {
        await eventoService.registrarEvento(nuevoEvento);
        res.status(200).send({ status: "OK", data: `Se ha creado el evento de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarEvento = async (req, res) => {
    const {
        body,
        params: { eventoId },
    } = req;

    try {
        await eventoService.actualizarEvento(eventoId, body);
        res.send({ status: "OK", data: `Se ha actualizado la informacion del evento de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarEvento = async (req, res) => {
    const {
        params: { eventoId },
    } = req;

    try {
        await eventoService.borrarEvento(eventoId);
        res.status(200).send({ status: "OK", data: `El evento con el id '${eventoId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeEventos,
    obtenerEventoIndividual,
    registrarEvento,
    actualizarEvento,
    borrarEvento,
};
