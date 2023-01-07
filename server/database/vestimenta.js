const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeVestimentas = async () => {
  const query = {
    text: "SELECT * FROM vestimenta",
  };

  try {
    const { rows } = await dbConnection.query(query);
    // if (rows.length === 0)
    //     httpError.noRegistrado("ninguna vestimenta");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerVestimentaIndividual = async (vestimentaId) => {
  const query = {
    text: "SELECT * FROM vestimenta WHERE codigo_vestimenta=$1",
    values: [vestimentaId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("La vestimenta", vestimentaId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarVestimenta = async (nuevaVestimenta) => {
  const { nombreVestimenta } = nuevaVestimenta;

  const text = `INSERT INTO vestimenta(nombre_vestimenta) VALUES($1)`;

  const values = [nombreVestimenta];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return nombreVestimenta;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La vestimenta con el nombre '${nombreVestimenta}' ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarVestimenta = (vestimentaId, cambios) => {};

const borrarVestimenta = async (vestimentaId) => {
  const query = {
    text: "DELETE FROM vestimenta WHERE codigo_vestimenta=$1",
    values: [vestimentaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("La vestimenta", vestimentaId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeVestimentas,
  obtenerVestimentaIndividual,
  registrarVestimenta,
  actualizarVestimenta,
  borrarVestimenta,
};
