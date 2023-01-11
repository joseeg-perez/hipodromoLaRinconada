const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeLugares = async () => {
  const query = {
    text: "SELECT * FROM lugar",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerEMP = async () => {
  const queryEstados = {
    text: `SELECT DISTINCT id_lugar, nombre_lugar, fk_lugar 
        FROM lugar 
        WHERE tipo_lugar='Estado'`,
  };

  const queryMunicipios = {
    text: `SELECT DISTINCT id_lugar, nombre_lugar, fk_lugar 
        FROM lugar 
        WHERE tipo_lugar='Municipio'`,
  };

  const queryParroquias = {
    text: `SELECT DISTINCT id_lugar, nombre_lugar, fk_lugar 
        FROM lugar 
        WHERE tipo_lugar='Parroquia'`,
  };

  try {
    const resEstados = await dbConnection.query(queryEstados);
    if (resEstados.rows.length === 0) httpError.noRegistrado("ningun estado");

    const resMunicipios = await dbConnection.query(queryMunicipios);
    if (resMunicipios.rows.length === 0)
      httpError.noRegistrado("ningun municipio");

    const resParroquias = await dbConnection.query(queryParroquias);
    if (resParroquias.rows.length === 0)
      httpError.noRegistrado("ningua parroquia");

    const listaEMP = [resEstados.rows, resMunicipios.rows, resParroquias.rows];

    dbConnection.end;
    return listaEMP;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeLugares,
  obtenerEMP,
};
