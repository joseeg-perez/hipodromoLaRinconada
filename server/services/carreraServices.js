const Carrera = require("../database/carrera.js");
const { registrarCarreraRegla } = require("./carreraReglaServices.js");

const obtenerListaDeCarreras = async () => {
    try {
        const listaCarreras = await Carrera.obtenerListaDeCarreras();

        return(listaCarreras);
    } catch (error) {
        throw(error);
    }
};

const obtenerCarreraIndividual = async (carreraId) => {
    try {
        const carrera = await Carrera.obtenerCarreraIndividual(carreraId);

        return(carrera);
    } catch (error) {
        throw(error);
    }
};

const registrarCarrera = async (nuevaCarrera) => {
    try {
        const carreraCreada = await Carrera.registrarCarrera(nuevaCarrera);
        const idCarrreraCreada = (await Carrera.obtenerListaDeCarreras()).pop().codigo_carrera;//Saco el id de la ultima carrera registrada
        const listaCarreraRegla = nuevaCarrera.carreraRegla

        for (let i = 0; i < listaCarreraRegla.length; i++) {
            const nuevaCarreraRegla = {
                valorRegla: listaCarreraRegla[i].valor_regla,
                fkCarrera: idCarrreraCreada,
                fkRegla: listaCarreraRegla[i].fk_regla,
            }
            await registrarCarreraRegla(nuevaCarreraRegla);
        }
        return(carreraCreada);
    } catch (error) {
        throw(error);
    }
};

const actualizarCarrera = async (carreraId, cambios) => {
    try {
        const carreraActualizada = await Carrera.actualizarCarrera(carreraId, cambios);
        
        return(carreraActualizada);
    } catch (error) {
        throw(error);
    }
};

const borrarCarrera = async (carreraId) => {
    try {
        await Carrera.borrarCarrera(carreraId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeCarreras,
    obtenerCarreraIndividual,
    registrarCarrera,
    actualizarCarrera,
    borrarCarrera,
};