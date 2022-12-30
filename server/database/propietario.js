const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDePropietarios = async () => {
    const query = {
        text: "SELECT * FROM persona_propietario",
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun propietario");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerPropietarioIndividual = async(propietarioId) => {
    const query = {
        text: "SELECT * FROM persona_propietario WHERE codigo_persona=$1",
        values: [propietarioId],
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El propietario", propietarioId);

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarPropietario = async (nuevoPropietario) => {
    const { 
        cedulaPersona,
        nombre1Persona,
        nombre2Persona,
        apellido1Persona,
        apellido2Persona,
        fechaNacimiento,
        correo,
        fkLugar,
     } = nuevoPropietario;
     
    const text = `INSERT INTO persona_propietario(
        cedula_persona,
        nombre1_persona,
        nombre2_persona,
        apellido1_persona,
        apellido2_persona,
        fecha_nacimiento_persona,
        correo,
        fk_lugar) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;
    
    const values = [
        cedulaPersona,
        nombre1Persona,
        nombre2Persona,
        apellido1Persona,
        apellido2Persona,
        fechaNacimiento,
        correo,
        fkLugar
    ];

    try {
        await dbConnection.query(text, values);
        dbConnection.end;

        return (nombre1Persona+" "+apellido1Persona);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El propietario con cedula '${ cedulaPersona }' ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarPropietario = async (propietarioId, cambios) => {

};

const borrarPropietario = async (propietarioId) => {
    const query = {
        text: "DELETE FROM persona_propietario WHERE codigo_persona=$1",
        values: [propietarioId],
        rowMode: "array",
    };

    try {
        const res = await dbConnection.query(query);        
        if (res.rowCount === 0)
            httpError.idNoEncontrado("El rol", propietarioId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDePropietarios,
    obtenerPropietarioIndividual,
    registrarPropietario,
    actualizarPropietario,
    borrarPropietario,
};
