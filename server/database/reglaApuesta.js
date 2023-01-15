const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeReglaApuesta = async () => {
  const query = {
    text: "SELECT * FROM regla_apuesta",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerReglaApuestaIndividual = async (reglaApuestaId) => {
  const query = {
    text: "SELECT * FROM regla_apuesta WHERE codigo_regla_apuesta=$1",
    values: [reglaApuestaId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El tipo de Apuesta", reglaApuestaId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarReglaApuesta = async (nuevoReglaApuesta) => {
  const { nombreReglaApuesta, descripcionReglaApuesta} = nuevoReglaApuesta;

  const text = `INSERT INTO regla_apuesta(
    nombre_regla_apuesta, 
    descripcion_regla_apuesta) VALUES($1, $2)`;

  const values = [nombreReglaApuesta, descripcionReglaApuesta];

  try {
    const { rows } = await dbConnection.query(text, values);
    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La regla tipo apuesta ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarReglaApuesta = async (reglaApuestaId, cambios) => {
  const { nombreReglaApuesta, descripcionReglaApuesta } = cambios;

  const query = {
    text: `UPDATE regla_apuesta
            SET nombre_regla_apuesta=$1,
            descripcion_regla_apuesta=$2
            WHERE codigo_regla_apuesta=$3;`,
    values: [nombreReglaApuesta, descripcionReglaApuesta, reglaApuestaId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El tipo de apuesta", reglaApuestaId);

    dbConnection.end;
    return ;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay una regla tipo de apuesta con el codigo registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarReglaApuesta = async (ReglaApuestaId) => {
  const query = {
    text: "DELETE FROM regla_apuesta WHERE codigo_regla_apuesta=$1",
    values: [ReglaApuestaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El tipo de Apuesta", ReglaApuestaId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeReglaApuesta,
  obtenerReglaApuestaIndividual,
  registrarReglaApuesta,
  actualizarReglaApuesta,
  borrarReglaApuesta,
};
