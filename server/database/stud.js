const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeStuds = async () => {
  const query = {
    text: `select codigo_stud, nombre_stud, to_char(fecha_creacion_stud :: DATE, 'dd/mm/yyyy') as fecha, 
    concat(nombre1_persona,' ',apellido1_persona) as nombre
    from stud, persona_propietario, 
    propietario_stud
    where propietario_stud.fk_stud = codigo_stud
    and fk_propietario = codigo_persona`,
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ningun stud");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerStudIndividual = async (studId) => {
  const query = {
    text: "SELECT * FROM stud WHERE codigo_stud=$1",
    values: [studId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El stud", studId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarStud = async (nuevoStud) => {
  const { nombreStud, fechaCreacion } = nuevoStud;

  const text =
    "INSERT INTO stud(nombre_stud, fecha_creacion_stud) VALUES($1, $2)";
  const values = [nombreStud, fechaCreacion];

  try {
    await dbConnection.query(text, values);
    dbConnection.end;

    return nombreStud;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El stud '${nombreStud}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarStud = async (studId, cambios) => {
  const { 
    nombreStud, 
    fechaCreacion
   } = cambios;

    const query = {
        text:`UPDATE stud
        SET nombre_stud=$1,
        fecha_creacion_stud=$2
        WHERE codigo_stud=$3;`,
        values: [
          nombreStud,
          fechaCreacion,
          studId
        ],
    }
    try {
      const { rowCount } = await dbConnection.query(query);
      if (rowCount === 0)
        httpError.idNoEncontrado("El stud", studId);
            
        dbConnection.end;
        return(nombreStud);
    } catch (error) {
        if (error.code === "23505") {
          throw {
            status: 409,
            message: `Ya hay un stud con el codigo '${studId}' registrado.`,
          };
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const borrarStud = async (studId) => {
  const query = {
    text: "DELETE FROM stud WHERE codigo_stud=$1",
    values: [studId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El stud", studId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerIdStudNueva = async (nuevoStud) => {
  const { nombreStud } = nuevoStud;

  const query = {
    text: `SELECT codigo_stud
        FROM stud
        WHERE nombre_stud = $1`,
    values: [nombreStud],
  };

  try {
    const { rows } = await dbConnection.query(query);
    const idStud = rows[0].codigo_stud;

    return idStud;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeStuds,
  obtenerStudIndividual,
  registrarStud,
  actualizarStud,
  borrarStud,
  obtenerIdStudNueva,
};
