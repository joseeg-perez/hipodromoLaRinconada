const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeParticipacionMedicamentos = async () => {
  const query = {
    text: "SELECT * FROM participacion_medicamento",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.noRegistrado("ningun medicamento para la participacion");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerParticipacionMedicamentoIndividual = async (
  participacionMedicamentoId
) => {
  const query = {
    text: "SELECT * FROM participacion_medicamento WHERE codigo_pm=$1",
    values: [participacionMedicamentoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado(
        "El medicamento para la participacion",
        participacionMedicamentoId
      );

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarParticipacionMedicamento = async (
  nuevaParticipacionMedicamento
) => {
  const { fkMedicamento, fkParticipacion } = nuevaParticipacionMedicamento;

  const text = `INSERT INTO participacion_medicamento(fk_medicamento, fk_participacion) VALUES($1, $2)`;

  const values = [fkMedicamento, fkParticipacion];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El medicamento para la participacion ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarParticipacionMedicamento = async (
  participacionMedicamentoId,
  cambios
) => {
  const { fkMedicamento, fkParticipacion } = cambios;

  const query = {
    text: `UPDATE participacion_medicamento
            SET fk_medicamento=$1,
            fk_participacion=$2
            WHERE codigo_pm=$3;`,
    values: [fkMedicamento, fkParticipacion, participacionMedicamentoId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado(
        "El medicamento asociado a una participacion",
        participacionMedicamentoId
      );

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un medicamento asociado a una participacion con el codigo'${participacionMedicamentoId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarParticipacionMedicamento = async (participacionMedicamentoId) => {
  const query = {
    text: "DELETE FROM participacion_medicamento WHERE codigo_pm=$1",
    values: [participacionMedicamentoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado(
        "El medicamento para la participacion ",
        participacionMedicamentoId
      );

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeParticipacionMedicamentos,
  obtenerParticipacionMedicamentoIndividual,
  registrarParticipacionMedicamento,
  actualizarParticipacionMedicamento,
  borrarParticipacionMedicamento,
};
