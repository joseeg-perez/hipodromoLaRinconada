const dbConnection = require("../database/dbConfig.js");
const httpError = require("../services/httpMessages.js");

const obtenerListaDePropietarios = async () => {
    const query = {
        text: "SELECT * FROM persona_propietario",
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun propietario");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerPropietarioIndividual = async(propietarioId) => {
    const query = {
        text: "SELECT * FROM persona_propietario WHERE codigo_persona=$1",
        values: [propietarioId],
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El propietario", propietarioId);

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarPropietario = async (nuevoPropietario) => {

};

const actualizarPropietario = async (propietarioId, cambios) => {

};

const borrarPropietario = async (propietarioId) => {

};

module.exports = {
    obtenerListaDePropietarios,
    obtenerPropietarioIndividual,
    registrarPropietario,
    actualizarPropietario,
    borrarPropietario,
};
