const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const registrarPropietarioStud = async (nuevoPropietarioStud) => {
  const {
    porcentajePropiedad,
    fechaInicioPropiedad,
    fechaFinPropiedad,
    fkStud,
    fkPropietario,
  } = nuevoPropietarioStud;

  const text = `INSERT INTO propietario_stud(
        porcentaje_propiedad,
        fk_stud,
        fk_propietario) VALUES($1, $2, $3)`;

  const values = [porcentajePropiedad, fkStud, fkPropietario];

  try {
    await dbConnection.query(text, values);
    dbConnection.end;

    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El propietario de stud ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarPropietarioStud = async (propietarioStudId, cambios) => {};

const borrarPropietarioStud = async (propietarioStudId) => {
  const query = {
    text: "DELETE FROM propietario_stud WHERE codigo_prop_stud=$1",
    values: [propietarioStudId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El propietario del stud", propietarioStudId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  registrarPropietarioStud,
  actualizarPropietarioStud,
  borrarPropietarioStud,
};
