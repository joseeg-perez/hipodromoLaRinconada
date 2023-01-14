const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeStudsVestimentas = async () => {
  const query = {
    text: "SELECT * FROM propietario_stud",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarStudVestimenta = async (nuevoStudVestimenta) => {
  const { fkVestimenta, fkStud } = nuevoStudVestimenta;

  const text = `INSERT INTO stud_vestimenta(fk_vestimenta,fk_stud) VALUES($1, $2)`;

  const values = [fkVestimenta, fkStud];

  try {
    await dbConnection.query(text, values);
    dbConnection.end;

    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La vestimenta en ese stud ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarStudVestimenta = async (studVestimentaId, cambios) => {
  const { fkVestimenta, fkStud } = cambios;

  const query = {
    text: `UPDATE stud_vestimenta
            SET fk_vestimenta=$1,
            fk_stud=$2
            WHERE codigo_sv=$3;`,
    values: [fkVestimenta, fkStud, studVestimentaId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("La vestimenta del stud", studVestimentaId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay una vestimenta en el stud con el codigo '${studVestimentaId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarStudVestimenta = async (studVestimentaId) => {
  const query = {
    text: "DELETE FROM stud_vestimenta WHERE codigo_sv=$1",
    values: [studVestimentaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("La vestimenta del stud", studVestimentaId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const buscarStudVestimentaId = async () => {
  const query = {
    text: "SELECT codigo_sv FROM stud_vestimenta",
  };

  try {
    const { rows } = await dbConnection.query(query);
    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeStudsVestimentas,
  registrarStudVestimenta,
  actualizarStudVestimenta,
  borrarStudVestimenta,
  buscarStudVestimentaId,
};
