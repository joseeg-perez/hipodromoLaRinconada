const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeMotivosDeRetiro = async () => {
  const query = {
    text: "SELECT * FROM motivo",
  };

  try {
    const { rows } = await dbConnection.query(query);
    // if (rows.length === 0) httpError.noRegistrado("ningun motivo");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerMotivoDeRetiroIndividual = async (motivoRetiroId) => {
  const query = {
    text: "SELECT * FROM motivo WHERE codigo_motivo=$1",
    values: [motivoRetiroId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El motivo", motivoRetiroId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarMotivoDeRetiro = async (nuevoMotivoRetiro) => {
  const { nombreMotivo, descripcionMotivo } = nuevoMotivoRetiro;

  const text = `INSERT INTO motivo(nombre_motivo, descripcion_motivo) VALUES($1, $2)`;

  const values = [nombreMotivo, descripcionMotivo];

  try {
    await dbConnection.query(text, values);
    dbConnection.end;

    return nombreMotivo;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El motivo '${nombreMotivo}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarMotivoDeRetiro = async (motivoRetiroId, cambios) => {};

const borrarMotivoDeRetiro = async (motivoRetiroId) => {
  const query = {
    text: "DELETE FROM motivo WHERE codigo_motivo=$1",
    values: [motivoRetiroId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El motivo", motivoRetiroId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeMotivosDeRetiro,
  obtenerMotivoDeRetiroIndividual,
  registrarMotivoDeRetiro,
  actualizarMotivoDeRetiro,
  borrarMotivoDeRetiro,
};
