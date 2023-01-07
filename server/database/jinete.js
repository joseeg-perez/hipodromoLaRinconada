const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeJinetes = async () => {
  const query = {
    text: `SELECT codigo_persona, nombre1_persona, apellido1_persona, peso_jinete, altura_jinete, nombre_rango 
        FROM persona_jinete, rango_jinete 
        WHERE fk_rango = codigo_rango`,
  };

  try {
    const { rows } = await dbConnection.query(query);
<<<<<<< HEAD
    // if (rows.length === 0) httpError.noRegistrado("ningun jinete");
=======
   /* if (rows.length === 0) httpError.noRegistrado("ningun jinete");
>>>>>>> d0a805f1d71eab8af6b3e8f087b71e2b1ac21d32

    dbConnection.end;*/
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerJineteIndividual = async (jineteId) => {
  const query = {
    text: "SELECT * FROM persona_jinete WHERE codigo_persona=$1",
    values: [jineteId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El jinete", jineteId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarJinete = async (nuevoJinete) => {
  const {
    cedulaPersona,
    nombre1Persona,
    nombre2Persona,
    apellido1Persona,
    apellido2Persona,
    fechaNacimiento,
    alturaJinete,
    fkRango,
    pesoJinete,
  } = nuevoJinete;

  const text = `INSERT INTO persona_jinete(
        cedula_persona,
        nombre1_persona,
        nombre2_persona,
        apellido1_persona,
        apellido2_persona,
        fecha_nacimiento_persona,
        altura_jinete,
        fk_rango,
        peso_jinete) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

  const values = [
    cedulaPersona,
    nombre1Persona,
    nombre2Persona,
    apellido1Persona,
    apellido2Persona,
    fechaNacimiento,
    alturaJinete,
    fkRango,
    pesoJinete,
  ];

  try {
    await dbConnection.query(text, values);
    dbConnection.end;

    return nombre1Persona + " " + apellido1Persona;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El jinete con cedula '${cedulaPersona}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarJinete = async (jineteId, cambios) => {};

const borrarJinete = async (jineteId) => {
  const query = {
    text: "DELETE FROM persona_jinete WHERE codigo_persona=$1",
    values: [jineteId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El jinete", jineteId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeJinetes,
  obtenerJineteIndividual,
  registrarJinete,
  actualizarJinete,
  borrarJinete,
};
