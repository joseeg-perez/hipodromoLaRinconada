const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDePropietarios = async () => {
  const query = {
    text: "SELECT * FROM persona_propietario",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerPropietarioIndividual = async (propietarioId) => {
  const query = {
    text: `SELECT codigo_persona, cedula_persona, 
    nombre1_persona, nombre2_persona, apellido1_persona, apellido2_persona,
    to_char(fecha_nacimiento_persona :: DATE, 'yyyy-mm-dd') fecha_nacimiento_persona, correo,
    fk_lugar, extension_tlf as extension, cuerpo_tlf as cuerpo
     FROM persona_propietario, telefono
     WHERE codigo_persona=$1
     AND fk_propietario = codigo_persona`,
    values: [propietarioId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El propietario", propietarioId);

    dbConnection.end;
    return rows;
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
    fkLugar,
  ];

  try {
    await dbConnection.query(text, values);
    dbConnection.end;

    return nombre1Persona + " " + apellido1Persona;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El propietario con cedula '${cedulaPersona}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarPropietario = async (propietarioId, cambios) => {
  const {
    cedulaPersona,
    nombre1Persona,
    nombre2Persona,
    apellido1Persona,
    apellido2Persona,
    fechaNacimiento,
    correo,
    fkLugar,
  } = cambios;

  const query = {
    text: `UPDATE persona_propietario
            SET cedula_persona=$1,
            nombre1_persona=$2,
            nombre2_persona=$3,
            apellido1_persona=$4,
            apellido2_persona=$5,
            fecha_nacimiento_persona=$6,
            correo=$7,
            fk_lugar=$8
            WHERE codigo_persona=$9;`,
    values: [
      cedulaPersona,
      nombre1Persona,
      nombre2Persona,
      apellido1Persona,
      apellido2Persona,
      fechaNacimiento,
      correo,
      fkLugar,
      propietarioId,
    ],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El propietario", propietarioId);

    dbConnection.end;
    return nombre1Persona + " " + apellido1Persona;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un propietario con el numero de cedula '${cedulaPersona}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarPropietario = async (propietarioId) => {
  const query = {
    text: "DELETE FROM persona_propietario WHERE codigo_persona=$1",
    values: [propietarioId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El propietario", propietarioId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerIdPropietarioNuevo = async (nuevoPropietario) => {
  const { cedulaPersona } = nuevoPropietario;

  const query = {
    text: `SELECT codigo_persona
        FROM persona_propietario
        WHERE cedula_persona = $1`,
    values: [cedulaPersona],
  };

  try {
    const { rows } = await dbConnection.query(query);
    const idPropietario = rows[0].codigo_persona;

    return idPropietario;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDePropietarios,
  obtenerPropietarioIndividual,
  registrarPropietario,
  actualizarPropietario,
  borrarPropietario,
  obtenerIdPropietarioNuevo,
};
