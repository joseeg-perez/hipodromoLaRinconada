const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDePelajes = async () => {
  const query = {
    text: "SELECT * FROM pelaje",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerPelajeIndividual = async (pelajeId) => {
  const query = {
    text: "SELECT * FROM pelaje WHERE codigo_pelaje=$1",
    values: [pelajeId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El pelaje", pelajeId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarPelaje = async (nuevoPelaje) => {
  const { nombrePelaje, abrevPelaje } = nuevoPelaje;

  const text = `INSERT INTO pelaje(nombre_pelaje, abrev_pelaje) VALUES($1, $2)`;

  const values = [nombrePelaje, abrevPelaje];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return nombrePelaje;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El tipo de pelaje con el nombre '${nombrePelaje}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarPelaje = (pelajeId, cambios) => {};

const borrarPelaje = async (pelajeId) => {
  const query = {
    text: "DELETE FROM pelaje WHERE codigo_pelaje=$1",
    values: [pelajeId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El pelaje ", pelajeId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDePelajes,
  obtenerPelajeIndividual,
  registrarPelaje,
  actualizarPelaje,
  borrarPelaje,
};
