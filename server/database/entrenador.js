const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEntrenadores = async () => {
    const query = {
        text: `SELECT codigo_persona, nombre1_persona, apellido1_persona, to_char(fecha_inicio :: DATE, 'dd/mm/yyyy') as fecha_inicio, codigo_caballeriza, cantidad_puestos 
        FROM persona_veterinario, veterinario_caballeriza, caballeriza 
        WHERE fk_veterinario = codigo_persona and fk_caballeriza = codigo_caballeriza and fecha_fin IS NULL`,
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun entrenador");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerListaDeCaballerizasVacias = async () => {
    const query = {
        text: `SELECT codigo_caballeriza, cantidad_puestos 
        FROM caballeriza, entrenador_caballeriza
        WHERE codigo_caballeriza NOT IN (
            SELECT fk_caballeriza
            FROM entrenador_caballeriza
            WHERE fecha_fin IS NULL
        )`,
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ninguna caballeriza");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerEntrenadorIndividual = async (entrenadorId) => {
    const query = {
        text: "SELECT * FROM persona_entrenador WHERE codigo_persona=$1",
        values: [entrenadorId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El entrenador", entrenadorId); 

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarEntrenador = async (nuevoEntrenador) => {
    const { 
        cedulaPersona,
        nombre1Persona,
        nombre2Persona,
        apellido1Persona,
        apellido2Persona,
        fechaNacimiento,
     } = nuevoEntrenador;
     
    const text = `INSERT INTO persona_entrenador(
        cedula_persona,
        nombre1_persona,
        nombre2_persona,
        apellido1_persona,
        apellido2_persona,
        fecha_nacimiento_persona) VALUES($1, $2, $3, $4, $5, $6)`;

    const values = [
        cedulaPersona,
        nombre1Persona,
        nombre2Persona,
        apellido1Persona,
        apellido2Persona,
        fechaNacimiento,
    ];

    try {
        await dbConnection.query(text, values);

        dbConnection.end;
        return (nombre1Persona+" "+apellido1Persona);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El entrenador con cedula '${ cedulaPersona }' ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarEntrenador = async (entrenadorId, cambios) => {

};

const borrarEntrenador = async (entrenadorId) => {
    const query = {
        text: "DELETE FROM persona_entrenador WHERE codigo_persona=$1",
        values: [entrenadorId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El entrenador", entrenadorId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerIdEntrenadorNuevo = async (nuevoEntrenador) => {
    const { 
        cedulaPersona,
     } = nuevoEntrenador;

    const query = {
        text: `SELECT codigo_persona
        FROM persona_entrenador
        WHERE cedula_persona = $1`,
        values: [cedulaPersona],
    };

    try {
        const { rows } = await dbConnection.query(query);
        const idEntrenador = rows[0].codigo_persona;

        return(idEntrenador);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeEntrenadores,
    obtenerListaDeCaballerizasVacias,
    obtenerEntrenadorIndividual,
    registrarEntrenador,
    actualizarEntrenador,
    borrarEntrenador,
    obtenerIdEntrenadorNuevo,
};
