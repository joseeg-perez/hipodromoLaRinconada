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

const borrarCuerpoDiferencia = async (cuerpoDiferenciaId) => {
  const query = {
    text: "DELETE FROM cuerpo_diferencia WHERE codigo_cuerpo_dif=$1",
    values: [cuerpoDiferenciaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El cuerpo de diferencia", cuerpoDiferenciaId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeCuerpoDiferencia,
  // obtenerCuerpoDiferenciaIndividual,
  // registrarCuerpoDiferencia,
  borrarCuerpoDiferencia,
};
