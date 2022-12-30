const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEntrenadores = async () => {
    const query = {
        text: "SELECT * FROM persona_entrenador",
        rowMode: "array",
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

const obtenerEntrenadorIndividual = async (entrenadorId) => {
    const query = {
        text: "SELECT * FROM persona_entrenador WHERE codigo_persona=$1",
        values: [entrenadorId],
        rowMode: "array",
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
                message: `El entrenador con cedula '${ cedulaPersona}' ya ha sido registrado.`,
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
        rowMode: "array",
    };

    try {
        const res = await dbConnection.query(query);        
        if (res.rowCount === 0)
            httpError.idNoEncontrado("El entrenador", entrenadorId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeEntrenadores,
    obtenerEntrenadorIndividual,
    registrarEntrenador,
    actualizarEntrenador,
    borrarEntrenador,
};
