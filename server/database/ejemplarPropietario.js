const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEjemplarPropietarios = async () => {
  const query = {
    text: "SELECT * FROM ejemplar_propietario",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.noRegistrado("ningun propietario dueno de ejemplar");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerEjemplarPropietarioIndividual = async (ejemplarPropietarioId) => {
  const query = {
    text: "SELECT * FROM ejemplar_propietario WHERE codigo_ej_prop=$1",
    values: [ejemplarPropietarioId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado(
        "El propietario dueno de ejemplar",
        ejemplarPropietarioId
      );

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarEjemplarPropietario = async (nuevoEjemplarPropietario) => {
  const {
    porcentajePropiedad,
    fechaFinPropiedad,
    fkEjemplar,
    fkPropStud,
  } = nuevoEjemplarPropietario;

  const text = `INSERT INTO ejemplar_propietario(
        porcentaje_propiedad,
        fecha_fin_propiedad,
        fk_ejemplar,
        fk_prop_stud) VALUES($1, $2, $3, $4)`;

  const values = [
    porcentajePropiedad,
    fechaFinPropiedad,
    fkEjemplar,
    fkPropStud,
  ];

  try {
    const res = await dbConnection.query(text, values);
    dbConnection.end;

    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El propietario dueno de ejemplar ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarEjemplarPropietario = async (
  ejemplarPropietarioId,
  cambios
) => {
  const {
    porcentajePropiedad,
    fechaInicioPropiedad,
    fechaFinPropiedad,
    fkEjemplar,
    fkPropStud,
  } = cambios;

  const query = {
    text: `UPDATE ejemplar_propietario
            SET porcentaje_propiedad=$1,
            fecha_inicio_propiedad=$2,
            fecha_fin_propiedad=$3,
            fk_ejemplar=$4,
            fk_prop_stud=$5
            WHERE codigo_ej_prop=$6;`,
    values: [
      porcentajePropiedad,
      fechaInicioPropiedad,
      fechaFinPropiedad,
      fkEjemplar,
      fkPropStud,
      ejemplarPropietarioId,
    ],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado(
        "El ejemplar asociado a un propietario",
        ejemplarPropietarioId
      );

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un ejemplar asociado a un propietario con codigo '${ejemplarPropietarioId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarEjemplarPropietario = async (ejemplarPropietarioId) => {
  const query = {
    text: "DELETE FROM ejemplar_propietario WHERE codigo_ej_prop=$1",
    values: [ejemplarPropietarioId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado(
        "El propietario dueno de ejemplar",
        ejemplarPropietarioId
      );

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeEjemplarPropietarios,
  obtenerEjemplarPropietarioIndividual,
  registrarEjemplarPropietario,
  actualizarEjemplarPropietario,
  borrarEjemplarPropietario,
};
