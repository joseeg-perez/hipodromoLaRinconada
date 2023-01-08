const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeParticipacionImplementos = async () => {
  const query = {
    text: "SELECT * FROM participacion_implemento",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.noRegistrado("ningun implemento para la participacion");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerParticipacionImplementoIndividual = async (
  participacionImplementoId
) => {
  const query = {
    text: "SELECT * FROM participacion_implemento WHERE codigo_pi=$1",
    values: [participacionImplementoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado(
        "El implemento para la participacion",
        participacionImplementoId
      );

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarParticipacionImplemento = async (
  nuevaParticipacionImplemento
) => {
  const { fkImplemento, fkParticipacion } = nuevaParticipacionImplemento;

  const text = `INSERT INTO participacion_implemento(fk_implemento, fk_participacion) VALUES($1, $2)`;

  const values = [fkImplemento, fkParticipacion];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El implemento para la participacion ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarParticipacionImplemento = async (
  participacionImplementoId,
  cambios
) => {
  const { fkImplemento, fkParticipacion } = cambios;

  const query = {
    text: `UPDATE participacion_implemento
            SET fk_implemento=$1,
            fk_participacion=$2
            WHERE codigo_pi=$3;`,
    values: [fkImplemento, fkParticipacion, participacionImplementoId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado(
        "El implemento asociado a la participacion",
        participacionImplementoId
      );

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un implemento asociado a una participacion con el codigo '${participacionImplementoId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarParticipacionImplemento = async (participacionImplementoId) => {
  const query = {
    text: "DELETE FROM participacion_implemento WHERE codigo_pi=$1",
    values: [participacionImplementoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado(
        "El implemento para la participacion ",
        participacionImplementoId
      );

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeParticipacionImplementos,
  obtenerParticipacionImplementoIndividual,
  registrarParticipacionImplemento,
  actualizarParticipacionImplemento,
  borrarParticipacionImplemento,
};
