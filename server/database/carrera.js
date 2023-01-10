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

const obtenerCarreraXEvento = async (carreraId) => {
    const query = {
        text: `SELECT 
                nombre_carrera , nombre_categoria, numero_carrera, premio_primero, premio_segundo, premio_tercero, premio_cuarto, premio_quinto, hora_carrera
               FROM 
                carrera
               INNER JOIN 
                categoria_carrera ON fk_categoria_carrera = codigo_categoria
               WHERE 
                fk_evento = $1;`,
        values: [carreraId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("La carrera perteneciente al evento", carreraId);

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
        fkCategoriaCarrera,
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
        fkCategoriaCarrera
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
    const { 
        nombreCarrera,
        numeroCarrera,
        premioPrimero,
        premioSegundo,
        premioTercero,
        premioCuarto,
        premioQuinto,
        horaCarrera,
        fkEvento,
        fkCategoriaCarrera,
       } = cambios;
    
    const query = {
        text:`UPDATE carrera
        SET nombre_carrera=$1,
        numero_carrera=$2,
        premio_primero=$3,
        premio_segundo=$4,
        premio_tercero=$5,
        premio_cuarto=$6,
        premio_quinto=$7,
        hora_carrera=$8,
        fk_evento=$9,
        fk_categoria_carrera=$10
        WHERE codigo_carrera=$11;`,
        values: [
            nombreCarrera,
            numeroCarrera,
            premioPrimero,
            premioSegundo,
            premioTercero,
            premioCuarto,
            premioQuinto,
            horaCarrera,
            fkEvento,
            fkCategoriaCarrera,
            carreraId
        ],
    }
        try {
            const { rowCount } = await dbConnection.query(query);
            if (rowCount === 0)
                httpError.idNoEncontrado("La carrera", carreraId);
                
            dbConnection.end;
            return(nombreCarrera);
        } catch (error) {
            if (error.code === "23505") {
                throw {
                    status: 409,
                    message: `Ya hay una carrera con el id '${carreraId}' registrada.`,
                };
            }
            throw { status: error?.status || 500, message: error?.message || error };
        }
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
    obtenerCarreraXEvento,
    registrarCarrera,
    actualizarCarrera,
    borrarCarrera,
};
