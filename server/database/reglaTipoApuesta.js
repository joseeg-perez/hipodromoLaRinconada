const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeReglaTipoApuesta = async () => {
  const query = {
    text: "SELECT * FROM reglas_tipo_apuesta",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerReglaTipoApuestaIndividual = async (reglaTipoApuestaId) => {
  const query = {
    text: "SELECT * FROM reglas_tipo_apuesta WHERE codigo_regla_tipo_apuesta=$1",
    values: [reglaTipoApuestaId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El tipo de Apuesta", reglaTipoApuestaId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarReglaTipoApuesta = async (nuevoReglaTipoApuesta) => {
  const { fkReglaApuesta, fkTipoApuesta, valorRegla } = nuevoReglaTipoApuesta;

  const text = `INSERT INTO reglas_tipo_apuesta(
    fk_regla_apuesta, 
    fk_tipo_apuesta,
    valor) VALUES($1, $2, $3)`;

  const values = [fkReglaApuesta, fkTipoApuesta, valorRegla];

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

const actualizarReglaTipoApuesta = async (reglaTipoApuestaId, cambios) => {
  const { fkReglaApuesta, fkTipoApuesta } = cambios;

  const query = {
    text: `UPDATE reglas_tipo_apuesta
            SET fk_regla_apuesta=$1,
            fk_tipo_apuesta=$2
            WHERE codigo_regla_tipo_apuesta=$3;`,
    values: [fkReglaApuesta, fkTipoApuesta, reglaTipoApuestaId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El tipo de apuesta", reglaTipoApuestaId);

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

const borrarReglaTipoApuesta = async (ReglatipoApuestaId) => {
  const query = {
    text: "DELETE FROM reglas_tipo_apuesta WHERE codigo_regla_tipo_apuesta=$1",
    values: [ReglatipoApuestaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El tipo de Apuesta", ReglatipoApuestaId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeReglaTipoApuesta,
  obtenerReglaTipoApuestaIndividual,
  registrarReglaTipoApuesta,
  actualizarReglaTipoApuesta,
  borrarReglaTipoApuesta,
};
