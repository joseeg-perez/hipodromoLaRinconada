const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeTelefonos = async () => {
  const query = {
    text: "SELECT * FROM telefono",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerTelefonoIndividual = async (telefonoId) => {
  const query = {
    text: "SELECT * FROM telefono WHERE codigo_tlf=$1",
    values: [telefonoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El telefono", telefonoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarTelefono = async (nuevoTelefono) => {
  console.log(nuevoTelefono, 'DATABASE TELEFONO')
  const { extensionTelefono, cuerpoTelefono, fkPropietario } =
    nuevoTelefono;

  const text = `INSERT INTO telefono(
        extension_tlf,
        cuerpo_tlf,
        fk_propietario) VALUES($1, $2, $3)`;

  const values = [extensionTelefono, cuerpoTelefono, fkPropietario];

  try {
    const { rows } = await dbConnection.query(text, values);
    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El telefono ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarTelefono = async (telefonoId, cambios) => {
  const { extensionTelefono, cuerpoTelefono, fkPropietario } = cambios;

  const query = {
    text: `UPDATE telefono
            SET extension_tlf=$1,
            cuerpo_tlf=$2,
            fk_propietario=$3
            WHERE codigo_tlf=$4;`,
    values: [extensionTelefono, cuerpoTelefono, fkPropietario, telefonoId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El telefono", telefonoId);

    dbConnection.end;
    return;
  } catch (error) {
    console.log(error);
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un telefono con el codigo '${telefonoId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarTelefono = async (telefonoId) => {
  const query = {
    text: "DELETE FROM telefono WHERE codigo_tlf=$1",
    values: [telefonoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El telefono", telefonoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeTelefonos,
  obtenerTelefonoIndividual,
  registrarTelefono,
  actualizarTelefono,
  borrarTelefono,
};
