const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeHaras = async () => {
  const query = {
    text: "SELECT * FROM hara",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerHaraIndividual = async (haraId) => {
  const query = {
    text: "SELECT * FROM hara WHERE codigo_hara=$1",
    values: [haraId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El hara", haraId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarHara = async (nuevaHara) => {
  const { nombreHara, fkLugar } = nuevaHara;

  const text = `INSERT INTO hara(nombre_hara, fk_lugar) VALUES($1, $2)`;

  const values = [nombreHara, fkLugar];

  try {
    const res = await dbConnection.query(text, values);
    dbConnection.end;

    return nombreHara;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El hara '${nombreHara}' ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarHara = async (haraId, cambios) => {};

const borrarHara = async (haraId) => {
  const query = {
    text: "DELETE FROM hara WHERE codigo_hara=$1",
    values: [haraId],
  };

  try {
    const res = await dbConnection.query(query);
    if (res.rowCount === 0) httpError.idNoEncontrado("El hara", haraId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeHaras,
  obtenerHaraIndividual,
  registrarHara,
  actualizarHara,
  borrarHara,
};
