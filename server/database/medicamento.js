const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeMedicamentos = async () => {
  const query = {
    text: "SELECT * FROM medicamento",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerMedicamentoIndividual = async (medicamentoId) => {
  const query = {
    text: "SELECT * FROM medicamento WHERE codigo_medicamento=$1",
    values: [medicamentoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El medicamento", medicamentoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarMedicamento = async (nuevoMedicamento) => {
  const { nombreMedicamento, descripcionMedicamento } = nuevoMedicamento;

  const text = `INSERT INTO medicamento(nombre_medicamento, descripcion_medicamento) VALUES($1, $2)`;

  const values = [nombreMedicamento, descripcionMedicamento];

  try {
    const res = await dbConnection.query(text, values);
    dbConnection.end;
    return nombreMedicamento;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El medicamento '${nombreMedicamento}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarMedicamento = async (medicamentoId, cambios) => {};

const borrarMedicamento = async (medicamentoId) => {
  const query = {
    text: "DELETE FROM medicamento WHERE codigo_medicamento=$1",
    values: [medicamentoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El medicamento", medicamentoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeMedicamentos,
  obtenerMedicamentoIndividual,
  registrarMedicamento,
  actualizarMedicamento,
  borrarMedicamento,
};
