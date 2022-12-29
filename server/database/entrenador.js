const dbConnection = require("../database/dbConfig.js");
const httpError = require("../services/httpMessages.js");

const obtenerListaDeEntrenadores = async () => {
    const query = {
        text: "SELECT * FROM persona_entrenador",
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun entrenador");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerEntrenadorIndividual = async (entrenadorId) => {
    const query = {
        text: "SELECT * FROM persona_entrenador WHERE codigo_persona=$1",
        values: [entrenadorId],
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El entrenador", entrenadorId); 

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarEntrenador = async (nuevoEntrenador) => {

};

const actualizarEntrenador = async (entrenadorId, cambios) => {

};

const borrarEntrenador = async (entrenadorId) => {

};

module.exports = {
    obtenerListaDeEntrenadores,
    obtenerEntrenadorIndividual,
    registrarEntrenador,
    actualizarEntrenador,
    borrarEntrenador,
};
