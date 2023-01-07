const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeRestaurantes = async () => {
  const query = {
    text: `SELECT codigo_restaurante, nombre_restaurante, 
        descripcion_restaurante, capacidad_restaurante,
        nombre_area 
        from restaurante, area
        where restaurante.fk_area = codigo_area`,
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerRestauranteIndividual = async (restauranteId) => {
  const query = {
    text: "SELECT * FROM restaurante WHERE codigo_restaurante=$1",
    values: [restauranteId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El restaurante", restauranteId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarRestaurante = async (nuevoRestaurante) => {
  const {
    nombreRestaurante,
    descripcionRestaurante,
    capacidadRestaurante,
    fk_area,
  } = nuevoRestaurante;

  const text = `INSERT INTO restaurante( 
        nombre_restaurante,
        descripcion_restaurante,
        capacidad_restaurante,
        fk_area) VALUES($1, $2, $3, $4)`;

  const values = [
    nombreRestaurante,
    descripcionRestaurante,
    capacidadRestaurante,
    fk_area,
  ];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return nombreRestaurante;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El restaurante con el nombre '${nombreRestaurante}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarRestaurante = (restauranteId, cambios) => {};

const borrarRestaurante = async (restauranteId) => {
  const query = {
    text: "DELETE FROM restaurante WHERE codigo_restaurante=$1",
    values: [restauranteId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El restaurante", restauranteId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeRestaurantes,
  obtenerRestauranteIndividual,
  registrarRestaurante,
  actualizarRestaurante,
  borrarRestaurante,
};
