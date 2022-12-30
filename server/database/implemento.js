const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeImplementos = async () => {
    const query = {
        text: "SELECT * FROM implemento",
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun implemento");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerImplementoIndividual = async (implementoId) => {
    const query = {
        text: "SELECT * FROM implemento WHERE codigo_implemento=$1",
        values: [implementoId],
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El implemento", implementoId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarImplemento = async (nuevoImplemento) => {
    const { 
        nombreImplemento,
        descripcionImplemento,
     } = nuevoImplemento;

    const text = `INSERT INTO implemento(nombre_implemento, descripcion_implemento) VALUES($1, $2)`;
        
    const values = [
        nombreImplemento,
        descripcionImplemento
    ];

    try {
        const res = await dbConnection.query(text, values);
        dbConnection.end;

        return (nombreImplemento);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El implemento '${nombreImplemento}' ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarImplemento = async (implementoId, cambios) => {

};

const borrarImplemento = async (implementoId) => {
    const query = {
        text: "DELETE FROM implemento WHERE codigo_implemento=$1",
        values: [implementoId],
        rowMode: "array",
    };

    try {
        const res = await dbConnection.query(query);        
        if (res.rowCount === 0)
            httpError.idNoEncontrado("El implemento", implementoId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeImplementos,
    obtenerImplementoIndividual,
    registrarImplemento,
    actualizarImplemento,
    borrarImplemento,
};
