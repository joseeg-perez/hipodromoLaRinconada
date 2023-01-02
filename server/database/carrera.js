const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCarreras = async () => {
    const query = {
        text: "SELECT * FROM carrera",
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
    const { 
        codigoCarrera,
        nombreCarrera,
        numeroCarrera,
        premioPrimero,
        premioSegundo,
        premioTercero,
        premioCuarto,
        premioQuinto,
        horaCarrera,
        fkEvento,
        fkCategorioCarrera,
     } = nuevaCarrera;

    const text = `INSERT INTO carrera(
        codigo_carrera,
        nombre_carrera,
        numero_carrera,
        premio_primero,
        premio_segundo,
        premio_tercero,
        premio_cuarto,
        premio_quinto,
        hora_carrera,
        fk_evento,
        fk_categoria_carrera) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;

    const values = [
        codigoCarrera,
        nombreCarrera,
        numeroCarrera,
        premioPrimero,
        premioSegundo,
        premioTercero,
        premioCuarto,
        premioQuinto,
        horaCarrera,
        fkEvento,
        fkCategorioCarrera
    ];

    try {
        await dbConnection.query(text, values);
        
        dbConnection.end;
        return (nombreCarrera);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `la carrera '${nombreCarrera}' ya ha sido registrada.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarCarrera = async (carreraId, cambios) => {

};

const borrarCarrera = async (carreraId) => {
    const query = {
        text: "DELETE FROM carrera WHERE codigo_carrera=$1",
        values: [carreraId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("La carrera", carreraId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeCarreras,
    obtenerCarreraIndividual,
    registrarCarrera,
    actualizarCarrera,
    borrarCarrera,
};
