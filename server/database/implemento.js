const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeImplementos = async () => {
  const query = {
    text: "SELECT * FROM implemento",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ningun implemento");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerImplementoIndividual = async (implementoId) => {
  const query = {
    text: "SELECT * FROM implemento WHERE codigo_implemento=$1",
    values: [implementoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El implemento", implementoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarImplemento = async (nuevoImplemento) => {
  const { 
    nombreImplemento,
    abreviacionImplemento,
    descripcionImplemento } = nuevoImplemento;

  const text = `INSERT INTO implemento(nombre_implemento, abrev_implemento, descripcion_implemento) VALUES($1, $2, $3)`;

  const values = [nombreImplemento, abreviacionImplemento, descripcionImplemento];

  try {
    const res = await dbConnection.query(text, values);
    dbConnection.end;

    return nombreImplemento;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El implemento '${nombreImplemento}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarImplemento = async (implementoId, cambios) => {
  const { 
    nombreImplemento,
    abreviacionImplemento,
    descripcionImplemento
   } = cambios;

    const query = {
        text:`UPDATE implemento
        SET nombre_implemento=$1,
        abrev_implemento=$2,
        descripcion_implemento=$3
        WHERE codigo_implemento=$4;`,
        values: [
          nombreImplemento,
          abreviacionImplemento,
          descripcionImplemento,
          implementoId
        ],
    }
    try {
      const { rowCount } = await dbConnection.query(query);
      if (rowCount === 0)
        httpError.idNoEncontrado("El implemento", implementoId);
            
        dbConnection.end;
        return(nombreImplemento);
    } catch (error) {
        if (error.code === "23505") {
          throw {
            status: 409,
            message: `Ya hay un implemento con el codigo'${implementoId}' registrado.`,
          };
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const borrarImplemento = async (implementoId) => {
  const query = {
    text: "DELETE FROM implemento WHERE codigo_implemento=$1",
    values: [implementoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El implemento", implementoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeImplementos,
  obtenerImplementoIndividual,
  registrarImplemento,
  actualizarImplemento,
  borrarImplemento,
};
