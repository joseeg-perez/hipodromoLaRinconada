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
  const { extensionTelefono, cuerpoTelefono, fkPropietario, fkCliente } =
    nuevoTelefono;

  const text = `INSERT INTO telefono(
        extension_tlf,
        cuerpo_tlf,
        fk_propietario,
        fk_cliente) VALUES($1, $2, $3, $4)`;

  const values = [extensionTelefono, cuerpoTelefono, fkPropietario, fkCliente];

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

const actualizarTelefono = (telefonoId, cambios) => {};

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
