const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeAreas = async () => {
  const query = {
    text: "SELECT * FROM area",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ningun area");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerIGPFA = async () => {
  const queryInfraestructuras = {
    text: `SELECT DISTINCT codigo_area, tipo_area, nombre_area, descripcion_area, fk_area 
        FROM area 
        WHERE tipo_area='Infraestructura'`,
  };

  const queryGradas = {
    text: `SELECT DISTINCT codigo_area, tipo_area, nombre_area, descripcion_area, fk_area 
        FROM area 
        WHERE tipo_area='grada'`,
  };

  const queryPatios = {
    text: `SELECT DISTINCT codigo_area, tipo_area, nombre_area, descripcion_area, fk_area 
        FROM area 
        WHERE tipo_area='patio'`,
  };

  const queryFilas = {
    text: `SELECT DISTINCT codigo_area, tipo_area, nombre_area, descripcion_area, fk_area 
        FROM area 
        WHERE tipo_area='fila'`,
  };

  const queryAsientos = {
    text: `SELECT DISTINCT codigo_area, tipo_area, nombre_area, descripcion_area, fk_area 
        FROM area 
        WHERE tipo_area='asiento'`,
  };

  try {
    const resInfraestructuras = await dbConnection.query(queryInfraestructuras);
    if (resInfraestructuras.rows.length === 0)
      httpError.noRegistrado("ninguna infraestructura");

    const resGradas = await dbConnection.query(queryGradas);
    if (resGradas.rows.length === 0) httpError.noRegistrado("ninguna grada");

    const resPatios = await dbConnection.query(queryPatios);
    if (resPatios.rows.length === 0) httpError.noRegistrado("ningun patio");

    const resFilas = await dbConnection.query(queryFilas);
    if (resFilas.rows.length === 0) httpError.noRegistrado("ninguna fila");

    const resAsientos = await dbConnection.query(queryAsientos);
    if (resAsientos.rows.length === 0) httpError.noRegistrado("ningun asiento");

    const listaIGPFA = [
      resInfraestructuras.rows,
      resGradas.rows,
      resPatios.rows,
      resFilas.rows,
      resAsientos.rows,
    ];

    dbConnection.end;
    return listaIGPFA;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeAreas,
  obtenerIGPFA,
};
