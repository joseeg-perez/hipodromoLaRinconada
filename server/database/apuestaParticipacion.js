const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeApuestaParticipacion = async () => {
  const query = {
    text: "SELECT * FROM apuesta_participacion",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerApuestaParticipacionIndividual = async (apuestaParticipacionId) => {
  const query = {
    text: "SELECT * FROM apuesta_participacion WHERE codigo_apuesta_participacion=$1",
    values: [apuestaParticipacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("La apuesta", apuestaParticipacionId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarApuestaParticipacion = async (nuevoApuestaParticipacion) => {
  const { 
    fkParticipacion,
    fkTipoApuesta,
    posicion,
    fkPago
  } = nuevoApuestaParticipacion;

  const text = `INSERT INTO apuesta_participacion(fk_participacion, fk_tipo_apuesta, posicion, fk_pago) VALUES($1, $2, $3, $4)`;

  const values = [fkParticipacion, fkTipoApuesta, posicion, fkPago];

  try {
    const { rows } = await dbConnection.query(text, values);
    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La apuesta ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarApuestaParticipacion = async (apuestaParticipacionId, cambios) => {
  const { 
    fkParticipacion,
    fkTipoApuesta,
    posicion } = cambios;

  const query = {
    text: `UPDATE apuesta_participacion
            SET fk_participacion=$1,
            fk_tipo_apuesta=$2,
            posicion=$3
            WHERE codigo_apuesta_participacion=$4;`,
    values: [fkParticipacion, fkTipoApuesta, posicion, apuestaParticipacionId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("La apuesta", apuestaParticipacionId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay una participacion con el codigo '${apuestaParticipacionId}' registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarApuestaParticipacion = async (apuestaParticipacionId) => {
  const query = {
    text: "DELETE FROM apuesta_participacion WHERE codigo_apuesta_participacion=$1",
    values: [apuestaParticipacionId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("La apuesta", apuestaParticipacionId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeApuestaParticipacion,
  obtenerApuestaParticipacionIndividual,
  registrarApuestaParticipacion,
  actualizarApuestaParticipacion,
  borrarApuestaParticipacion,
};
