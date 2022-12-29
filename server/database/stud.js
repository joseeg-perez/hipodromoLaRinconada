const dbConnection = require("../database/dbConfig.js");
const httpError = require("../services/httpMessages.js");

const obtenerListaDeStuds = async () => {
    const query = {
        text: "SELECT * FROM stud",
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun stud");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerStudIndividual = async (studId) => {
    const query = {
        text: "SELECT * FROM stud WHERE codigo_stud=$1",
        values: [studId],
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El stud", studId);

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarStud = async (nuevoStud) => {

};

const actualizarStud = async (studId, cambios) => {

};

const borrarStud = async (studId) => {

};

module.exports = {
    obtenerListaDeStuds,
    obtenerStudIndividual,
    registrarStud,
    actualizarStud,
    borrarStud,
};