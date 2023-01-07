const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeTipoResultado = async () => {
  const query = {
    text: "SELECT * FROM tipo_resultado",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerTipoResultadoIndividual = async (tipoResultadoId) => {};

const registrarTipoResultado = async (nuevoTipoResultado) => {};

const actualizarTipoResultado = (tipoResultadoId, cambios) => {};

const borrarTipoResultado = async (tipoResultadoId) => {};

module.exports = {
  obtenerListaDeTipoResultado,
  obtenerTipoResultadoIndividual,
  registrarTipoResultado,
  actualizarTipoResultado,
  borrarTipoResultado,
};
