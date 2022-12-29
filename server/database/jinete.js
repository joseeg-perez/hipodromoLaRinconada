const dbConnection = require("../database/dbConfig.js");
const httpError = require("../services/httpMessages.js");

const obtenerListaDeJinetes = async () => {
    const query = {
        text: "SELECT * FROM persona_jinete",
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun jinete");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerJineteIndividual = async( jineteId) => {
    const query = {
        text: "SELECT * FROM persona_jinete WHERE codigo_persona=$1",
        values: [jineteId],
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El jinete", jineteId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarJinete = async (nuevoJinete) => {

};

const actualizarJinete = async (jineteId, cambios) => {

};

const borrarJinete = async (jineteId) => {
    const query = {
        text: "DELETE FROM persona_jinete WHERE codigo_persona=$1",
        values: [jineteId],
        rowMode: "array",
    };

    try {
        const res = await dbConnection.query(query);        
        if (res.rowCount === 0)
            httpError.idNoEncontrado("El jinete", jineteId);
        
        dbConnection.end;
        return(res.rowCount > 0);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeJinetes,
    obtenerJineteIndividual,
    registrarJinete,
    actualizarJinete,
    borrarJinete,
};
