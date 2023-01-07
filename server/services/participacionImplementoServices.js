const ParticipacionImplemento = require("../database/participacionImplemento.js");

const obtenerListaDeParticipacionImplementos = async () => {
    try {
        const listaParticipacionImplementos = await ParticipacionImplemento.obtenerListaDeParticipacionImplementos();

        return(listaParticipacionImplementos);
    } catch (error) {
        throw(error);
    } 
};

const obtenerParticipacionImplementoIndividual = async (participacionImplementoId) => { 
    try {
        const participacionImplemento = await ParticipacionImplemento.obtenerParticipacionImplementoIndividual(participacionImplementoId);

        return(participacionImplemento);
    } catch (error) {
        throw(error);
    }  
};

const registrarParticipacionImplemento = async (nuevaParticipacionImplemento) => { 
    try {
        await ParticipacionImplemento.registrarParticipacionImplemento(nuevaParticipacionImplemento);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const actualizarParticipacionImplemento = async (participacionImplementoId, cambios) => {
    try {
        const participacionImplementoActualizado = articipacionImplemento.actualizarParticipacionImplemento(participacionImplementoId, cambios);
        
        return(participacionImplementoActualizado);
    } catch (error) {
        throw(error);
    }
};

const borrarParticipacionImplemento = async (participacionImplementoId) => {
    try {
        await ParticipacionImplemento.borrarParticipacionImplemento(participacionImplementoId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeParticipacionImplementos,
    obtenerParticipacionImplementoIndividual,
    registrarParticipacionImplemento,
    actualizarParticipacionImplemento,
    borrarParticipacionImplemento,
};
