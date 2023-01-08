const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeReglas = async () => {
    const query = {
        text: "SELECT * FROM regla",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun tipo de regla");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerReglaIndividual = async (reglaId) => {
    const query = {
        text: "SELECT * FROM regla WHERE codigo_regla=$1",
        values: [reglaId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("La regla", reglaId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarRegla = async (nuevaRegla) => {
    const { 
        nombreRegla,
        descripcionRegla,
     } = nuevaRegla;

    const text = `INSERT INTO regla(nombre_regla, descripcion_regla) VALUES($1, $2)`;
        
    const values = [nombreRegla, descripcionRegla];

    try {
        await dbConnection.query(text, values);
    
        dbConnection.end;
        return (nombreRegla);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `La regla con el nombre '${ nombreRegla }' ya ha sido registrada.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }  
};

const actualizarRegla = (reglaId, cambios) => {
    
};

const borrarRegla = async (reglaId) => {
    const query = {
        text: "DELETE FROM regla WHERE codigo_regla=$1",
        values: [reglaId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("La regla ", reglaId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }  
};

module.exports = {
    obtenerListaDeReglas,
    obtenerReglaIndividual,
    registrarRegla,
    actualizarRegla,
    borrarRegla,
};