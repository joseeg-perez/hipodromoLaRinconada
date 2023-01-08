const Evento = require("../database/evento.js");

const obtenerListaDeEventos = async () => {
    try {
        const listaEventos = await Evento.obtenerListaDeEventos();

        return(listaEventos);
    } catch (error) {
        throw(error);
    }
};

const obtenerEventoIndividual = async (eventoId) => {
    try {
        const evento = await Evento.obtenerEventoIndividual(eventoId);

        return(evento);
    } catch (error) {
        throw(error);
    }
};

const registrarEvento = async (nuevoEvento) => {
    try {
        await Evento.registrarEvento(nuevoEvento);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const actualizarEvento = (eventoId, cambios) => {
    try {
        const eventoActualizado = Evento.actualizarEvento(eventoId, cambios);
        
        return(eventoActualizado);
    } catch (error) {
        throw(error);
    }
};

const borrarEvento = async (eventoId) => {
    try {
        await Evento.borrarEvento(eventoId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeEventos,
    obtenerEventoIndividual,
    registrarEvento,
    actualizarEvento,
    borrarEvento,
};