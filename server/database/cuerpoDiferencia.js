const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCuerpoDiferencia = async () => {
  const query = {
    text: "SELECT * FROM cuerpo_diferencia",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerCuerpoDiferenciaIndividual = async (cuerpoDiferenciaId) => {
  const query = {
    text: "SELECT * FROM cuerpo_diferencia WHERE codigo_cuerpo_dif=$1",
    values: [cuerpoDiferenciaId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El cuerpo de diferencia", cuerpoDiferenciaId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarCuerpoDiferencia = async (nuevoCuerpoDiferencia) => {
  const { nombreCuerpoDiferencia } = nuevoCuerpoDiferencia;

  const text = `INSERT INTO cuerpo_diferencia(nombre_cuerpo_dif) VALUES($1)`;

  const values = [nombreCuerpoDiferencia];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return nombreCuerpoDiferencia;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El cuerpo de diferencia con el nombre '${nombreCuerpoDiferencia}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarCuerpoDiferencia = async (cuerpoDiferenciaId) => {};

module.exports = {
  obtenerListaDeCuerpoDiferencia,
  obtenerCuerpoDiferenciaIndividual,
  registrarCuerpoDiferencia,
  borrarCuerpoDiferencia,
};
