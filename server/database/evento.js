const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEventos = async () => {
  const query = {
    text: "SELECT * FROM evento",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ningun tipo de evento");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerEventoIndividual = async (eventoId) => {
  const query = {
    text: "SELECT * FROM evento WHERE codigo_evento=$1",
    values: [eventoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El evento", eventoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarEvento = async (nuevoEvento) => {
    const { 
        fechaEvento,
     } = nuevoEvento;

    const text = `INSERT INTO evento(fecha_evento) VALUES($1)`;
        
    const values = [fechaEvento];

 
  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El evento ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarEvento = async (eventoId, cambios) => {
  const { fechaEvento, horaEvento } = cambios;

  const query = {
    text: `UPDATE evento
            SET fecha_evento=$1, 
            hora_evento=$2
            WHERE codigo_evento=$3;`,
    values: [fechaEvento, horaEvento, eventoId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El evento", eventoId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un evento con el codigo '${eventoId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarEvento = async (eventoId) => {
  const query = {
    text: "DELETE FROM evento WHERE codigo_evento=$1",
    values: [eventoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El evento ", eventoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeEventos,
  obtenerEventoIndividual,
  registrarEvento,
  actualizarEvento,
  borrarEvento,
};
