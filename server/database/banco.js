const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeBancos = async () => {
  const query = {
    text: "SELECT * FROM banco",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ningun tipo de banco");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerBancoIndividual = async (bancoId) => {
  const query = {
    text: "SELECT * FROM banco WHERE codigo_banco=$1",
    values: [bancoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El banco", bancoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarBanco = async (nuevoBanco) => {
  const { 
    nombreBanco, 
    } = nuevoBanco;

  const text = `INSERT INTO banco(nombre_banco) VALUES($1)`;

  const values = [nombreBanco];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El banco ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarBanco = async (bancoId, cambios) => {
  const { nombreBanco } = cambios;

  const query = {
    text: `UPDATE banco
        SET nombre_banco=$1
        WHERE codigo_banco=$2;`,
    values: [nombreBanco, bancoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El banco", bancoId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay una banco con el codigo '${bancoId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarBanco = async (bancoId) => {
  const query = {
    text: "DELETE FROM banco WHERE codigo_banco=$1",
    values: [bancoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El banco ", bancoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeBancos,
  obtenerBancoIndividual,
  registrarBanco,
  actualizarBanco,
  borrarBanco,
};
