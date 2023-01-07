const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCategorias = async () => {
  const query = {
    text: "SELECT * FROM categoria_carrera",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ninguna categoria");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerCategoriaIndividual = async (categoriaId) => {
  const query = {
    text: "SELECT * FROM categoria_carrera WHERE codigo_categoria=$1",
    values: [categoriaId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("La categoria", categoriaId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarCategoria = async (nuevaCategoria) => {
  const { nombreCategoria } = nuevaCategoria;

  const text = `INSERT INTO categoria_carrera(nombre_categoria) VALUES($1)`;

  const values = [nombreCategoria];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return nombreCategoria;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La categoria con el nombre '${nombreCategoria}' ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarCategoria = (categoriaId, cambios) => {};

const borrarCategoria = async (categoriaId) => {
  const query = {
    text: "DELETE FROM categoria_carrera WHERE codigo_categoria=$1",
    values: [categoriaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("La categoria", categoriaId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeCategorias,
  obtenerCategoriaIndividual,
  registrarCategoria,
  actualizarCategoria,
  borrarCategoria,
};
