const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeRetiros = async () => {
    const query = {
        text: "SELECT * FROM retiro",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun retiro");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }   
};

const obtenerRetiroIndividual = async (retiroId) => {
    const query = {
        text: "SELECT * FROM retiro WHERE codigo_retiro=$1",
        values: [retiroId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El retiro", retiroId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarRetiro = async (nuevoRetiro) => {
    const { 
        fechaRetiro,
        fkMotivo,
     } = nuevoRetiro;

    const text = `INSERT INTO retiro(fecha_retiro, fk_motivo) VALUES($1, $2)`;
        
    const values = [fechaRetiro, fkMotivo];

    try {
        await dbConnection.query(text, values);
    
        dbConnection.end;
        return;
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El retiro ya ha sido registrado con anterioridad.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarRetiro = (retiroId, cambios) => {
 
};

const borrarRetiro = async (retiroId) => {
    const query = {
        text: "DELETE FROM retiro WHERE codigo_retiro=$1",
        values: [retiroId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El retiro", retiroId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeRetiros,
    obtenerRetiroIndividual,
    registrarRetiro,
    actualizarRetiro,
    borrarRetiro,
};