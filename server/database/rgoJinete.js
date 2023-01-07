const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeRgoJinetes = async () => {
  const query = {
    text: "SELECT * FROM rango_jinete",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerRgoJineteIndividual = async (rgoJineteId) => {
  const query = {
    text: "SELECT * FROM rango_jinete WHERE codigo_rango=$1",
    values: [rgoJineteId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El rango asociado a un jinete", rgoJineteId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarRgoJinete = async (nuevoRgoJinete) => {
  const { nombreRango, descripcionRango, pesoMin, pesoMax } = nuevoRgoJinete;

  const text = `INSERT INTO rango_jinete(
        nombre_rango,
        descripcion_rango,
        peso_min,
        peso_max) VALUES($1, $2, $3, $4)`;

  const values = [nombreRango, descripcionRango, pesoMin, pesoMax];

  try {
    const res = await dbConnection.query(text, values);
    dbConnection.end;

    return nombreRango;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El rango asociado a un jinete '${nombreRango}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarRgoJinete = async (rgoJineteId, cambios) => {};

const borrarRgoJinete = async (rgoJineteId) => {
  const query = {
    text: "DELETE FROM rango_jinete WHERE codigo_rango=$1",
    values: [rgoJineteId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El rango asociadoa un jinete", rgoJineteId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeRgoJinetes,
  obtenerRgoJineteIndividual,
  registrarRgoJinete,
  actualizarRgoJinete,
  borrarRgoJinete,
};
