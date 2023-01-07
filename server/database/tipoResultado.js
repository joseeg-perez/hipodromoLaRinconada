const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeTipoResultado = async () => {
    const query = {
        text: "SELECT * FROM tipo_resultado",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ninguna categoria");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerTipoResultadoIndividual = async (tipoResultadoId) => {
    const query = {
        text: "SELECT * FROM tipo_resultado WHERE codigo_tipo_resultado=$1",
        values: [tipoResultadoId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El tipo de resultado", tipoResultadoId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }   
};

const registrarTipoResultado = async (nuevoTipoResultado) => {
    const { 
        nombreTipoResultado
     } = nuevoTipoResultado;

    const text = `INSERT INTO tipo_resultado(nombre_tipo_resultado) VALUES($1)`;
        
    const values = [
        nombreTipoResultado 
    ];

    try {
         const { rows } = await dbConnection.query(text, values);    
        dbConnection.end;
        return(nombreTipoResultado);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El tipo de resultado ${nombreTipoResultado} ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }   
};

const actualizarTipoResultado = (tipoResultadoId, cambios) => {
    
};

const borrarTipoResultado = async (tipoResultadoId) => {
    const query = {
        text: "DELETE FROM tipo_resultado WHERE codigo_tipo_resultado=$1",
        values: [tipoResultadoId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El tipo de resultado", tipoResultadoId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeTipoResultado,
    obtenerTipoResultadoIndividual,
    registrarTipoResultado,
    actualizarTipoResultado,
    borrarTipoResultado,
};