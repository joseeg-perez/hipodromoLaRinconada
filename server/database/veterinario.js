const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeVeterinarios = async () => {
    const query = {
        text: "SELECT * FROM persona_veterinario",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun veterinario");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerVeterinarioIndividual = async (veterinarioId) => {
    const query = {
        text: "SELECT * FROM persona_veterinario WHERE codigo_persona=$1",
        values: [veterinarioId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El veterinario", veterinarioId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarVeterinario = async (nuevoVeterinario) => {
    const { 
        cedulaPersona,
        nombre1Persona,
        nombre2Persona,
        apellido1Persona,
        apellido2Persona,
        fechaNacimiento,
     } = nuevoVeterinario;

    const text = `INSERT INTO persona_veterinario(
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
        fechaNacimiento
    ];

    try {
        await dbConnection.query(text, values);
    
        dbConnection.end;
        return (`${nombre1Persona} ${apellido1Persona}`);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El veterinario con la cedula '${cedulaPersona}' ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarVeterinario = (veterinarioId, cambios) => {
    
};

const borrarVeterinario = async (veterinarioId) => {
    const query = {
        text: "DELETE FROM persona_veterinario WHERE codigo_persona=$1",
        values: [veterinarioId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El veterinario", veterinarioId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeVeterinarios,
    obtenerVeterinarioIndividual,
    registrarVeterinario,
    actualizarVeterinario,
    borrarVeterinario,
};