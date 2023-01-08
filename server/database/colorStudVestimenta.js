const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const registrarColorStudVestimenta = async (nuevoColorStudVestimenta) => {
  const { fkStudVestimenta, fkColor } = nuevoColorStudVestimenta;

  const text = `INSERT INTO color_stud_vestimenta(fk_stud_vestimenta,fk_color) VALUES($1, $2)`;

  const values = [fkStudVestimenta, fkColor];

  try {
    await dbConnection.query(text, values);
    dbConnection.end;

    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El color de la vestimenta en ese stud ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarColorStudVestimenta = async (
  colorStudVestimentaId,
  cambios
) => {
  const { fkStudVestimenta, fkColor } = cambios;

  const query = {
    text: `UPDATE color_stud_vestimenta
            SET fk_stud_vestimenta=$1,
            fk_color=$2
            WHERE codigo_csv=$3;`,
    values: [fkStudVestimenta, fkColor, colorStudVestimentaId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado(
        "El color de la vestimenta del stud",
        entrenadorId
      );

    dbConnection.end;
    return;
  } catch (error) {
    console.log(error);
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El color de la vestimenta del stud ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarColorStudVestimenta = async (colorStudVestimentaId) => {
  const query = {
    text: "DELETE FROM color_stud_vestimenta WHERE codigo_csv=$1",
    values: [colorStudVestimentaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado(
        "El color de la vestimenta del stud",
        colorStudVestimentaId
      );

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  registrarColorStudVestimenta,
  actualizarColorStudVestimenta,
  borrarColorStudVestimenta,
};
