const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeResultados = async () => {
  const query = {
    text: "SELECT * FROM resultado",
  };

  try {
    const { rows } = await dbConnection.query(query);
    // if (rows.length === 0) httpError.noRegistrado("ningun resultado");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerResultadoIndividual = async (resultadoId) => {
  const query = {
    text: "SELECT * FROM resultado WHERE codigo_resultado=$1",
    values: [resultadoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El resultado", resultadoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarResultado = async (nuevoResultado) => {
  const {
    diferenciaTiempo,
    speedRating,
    speedRating300m,
    speedRating400m,
    speedRating800m,
    observacion,
    gananciaEntrenador,
    gananciaJinete,
    gananciaPropietario,
    tiempoTotal,
    fkTipoResultado,
    fkCuerpoDiferencia,
  } = nuevoResultado;

  const text = `INSERT INTO resultado(
        diferencia_tiempo,
        speed_rating,
        speed_rating_300m,
        speed_rating_400m,
        speed_rating_800m,
        observacion,
        ganancia_entrenador,
        ganancia_jinete,
        ganancia_propietario,
        tiempo_total,
        fk_tipo_resultado,
        fk_cuerpo_diferencia) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;

  const values = [
    diferenciaTiempo,
    speedRating,
    speedRating300m,
    speedRating400m,
    speedRating800m,
    observacion,
    gananciaEntrenador,
    gananciaJinete,
    gananciaPropietario,
    tiempoTotal,
    fkTipoResultado,
    fkCuerpoDiferencia,
  ];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El resultado ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarResultado = (resultadoId, cambios) => {};

const borrarResultado = async (resultadoId) => {
  const query = {
    text: "DELETE FROM resultado WHERE codigo_resultado=$1",
    values: [resultadoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El resultado", resultadoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeResultados,
  obtenerResultadoIndividual,
  registrarResultado,
  actualizarResultado,
  borrarResultado,
};
