const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDePuestoCaballos = async () => {
  const query = {
    text: "SELECT * FROM puesto_caballo",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ningun puesto");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerPuestoCaballoIndividual = async (puestoCaballoId) => {
  const query = {
    text: "SELECT * FROM puesto_caballo WHERE codigo_pc=$1",
    values: [puestoCaballoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El puesto", puestoCaballoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarPuestoCaballo = async (nuevoPuestoCaballo) => {
  const { fk_puesto, fk_ejemplar } = nuevoPuestoCaballo;
  console.log(nuevoPuestoCaballo)
  console.log('EN DATABASE')
  const text = `INSERT INTO puesto_caballo(
        fk_puesto, fk_ejemplar) VALUES($1, $2)`;

  const values = [fk_puesto, fk_ejemplar];

  try {
    const { rows } = await dbConnection.query(text, values);

    dbConnection.end;
    return fk_puesto;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El puesto con numero ${fk_puesto} ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarPuestoCaballo = async (puestoCaballoId, cambios) => {
  const { numeroPuesto, fkCaballeriza } = cambios;

  const query = {
    text: `UPDATE puesto_caballo
            SET numero_puesto=$1,
            fk_caballeriza=$2
            WHERE codigo_pc=$3;`,
    values: [numeroPuesto, fkCaballeriza, puestoCaballoId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El puesto", puestoId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un puesto con el codigo '${puestoCaballoId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarPuestoCaballo = async (puestoCaballoId) => {
  const query = {
    text: "DELETE FROM puesto_caballo WHERE codigo_pc=$1",
    values: [puestoCaballoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El puesto", puestoCaballoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDePuestoCaballos,
  obtenerPuestoCaballoIndividual,
  registrarPuestoCaballo,
  actualizarPuestoCaballo,
  borrarPuestoCaballo,
};
