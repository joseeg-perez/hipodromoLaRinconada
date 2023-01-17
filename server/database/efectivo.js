const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEfectivos = async () => {
  const query = {
    text: "SELECT * FROM metodo_pago_efectivo",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ningun tipo de efectivo");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerEfectivoIndividual = async (efectivoId) => {
  const query = {
    text: "SELECT * FROM metodo_pago_efectivo WHERE codigo_metodo=$1",
    values: [efectivoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El efectivo", efectivoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarEfectivo = async (nuevoEfectivo) => {
  const { 
        denominacion,
    } = nuevoEfectivo;

  const text = `INSERT INTO metodo_pago_efectivo(denominacion) VALUES($1)`;

  const values = [denominacion];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El efectivo ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarEfectivo = async (efectivoId, cambios) => {
  const { denominacion, fkBanco } = cambios;

  const query = {
    text: `UPDATE metodo_pago_efectivo
        SET denominacion=$1,
        WHERE codigo_metodo=$2;`,
    values: [denominacion, efectivoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El efectivo", efectivoId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay una efectivo con el codigo '${efectivoId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarEfectivo = async (efectivoId) => {
  const query = {
    text: "DELETE FROM metodo_pago_efectivo WHERE codigo_metodo=$1",
    values: [efectivoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El efectivo ", efectivoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeEfectivos,
  obtenerEfectivoIndividual,
  registrarEfectivo,
  actualizarEfectivo,
  borrarEfectivo,
};
