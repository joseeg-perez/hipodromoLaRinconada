const dbConnection = require("../database/dbConfig.js");
const httpError = require("../services/httpMessages.js");

const obtenerListaDeCarreras = async () => {
    const query = {
        text: "SELECT * FROM carrera",
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ninguna carrera");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerCarreraIndividual = async (carreraId) => {
    const query = {
        text: "SELECT * FROM carrera WHERE codigo_carrera=$1",
        values: [carreraId],
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("La carrera", carreraId);

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarCarrera = async (nuevaCarrera) => {

};

const actualizarCarrera = async (carreraId, cambios) => {

};

const borrarCarrera = async (carreraId) => {

};

module.exports = {
    obtenerListaDeCarreras,
    obtenerCarreraIndividual,
    registrarCarrera,
    actualizarCarrera,
    borrarCarrera,
};
