const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeTipoApuesta = async () => {
  const query = {
    text: "SELECT * FROM tipo_apuesta",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerTipoApuestaIndividual = async (tipoApuestaId) => {
  const query = {
    text: "SELECT * FROM tipo_apuesta WHERE codigo_apuesta=$1",
    values: [tipoApuestaId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El tipo de Apuesta", tipoApuestaId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarTipoApuesta = async (nuevoTipoApuesta) => {
  const { nombreApuestaRegla, descripcionApuestaRegla } = nuevoTipoApuesta;

  const text = `INSERT INTO tipo_apuesta(nombre_apuesta, descripcion_apuesta) VALUES($1, $2)`;

  const values = [nombreApuestaRegla, descripcionApuestaRegla];

  try {
    const { rows } = await dbConnection.query(text, values);
    dbConnection.end;
    return nombreApuestaRegla;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La apuesta ${nombreApuestaRegla} ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarTipoApuesta = async (tipoApuestaId, cambios) => {
  const { nombreApuesta, descripcionApuesta } = cambios;

  const query = {
    text: `UPDATE tipo_apuesta
            SET nombre_apuesta=$1,
            descripcion_apuesta=$2
            WHERE codigo_apuesta=$3;`,
    values: [nombreApuesta, descripcionApuesta, tipoApuestaId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El tipo de apuesta", tipoApuestaId);

    dbConnection.end;
    return nombreApuesta;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un tipo de apuesta con el codigo '${tipoApuestaId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarTipoApuesta = async (tipoApuestaId) => {
  const query = {
    text: "DELETE FROM tipo_apuesta WHERE codigo_apuesta=$1",
    values: [tipoApuestaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El tipo de Apuesta", tipoApuestaId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeTipoApuesta,
  obtenerTipoApuestaIndividual,
  registrarTipoApuesta,
  actualizarTipoApuesta,
  borrarTipoApuesta,
};
