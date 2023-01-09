const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeStuds = async () => {
  const query = {
    text: `SELECT s.codigo_stud, s.nombre_stud, 
	to_char(s.fecha_creacion_stud :: DATE, 'dd/mm/yyyy') as fecha,
	concat(p.nombre1_persona,' ',p.apellido1_persona) as nombre,
	c.codigo_del_color
	FROM	persona_propietario p, color c, stud_color sc, stud s, 
	propietario_stud ps
	WHERE	sc.fk_stud = s.codigo_stud
	AND		sc.fk_color = c.id_color
	AND		ps.fk_propietario = p.codigo_persona
	AND		ps.fk_stud = s.codigo_stud`,
  };

  try {
    const { rows } = await dbConnection.query(query);

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

const obtenerPropietarioDeStud = async (studId) => {
  const query = {
    text: `SELECT 
              pro.codigo_persona AS IdPropietario, pro.nombre1_persona AS Nombre, pro.apellido1_persona AS Apellido, ps.porcentaje_propiedad AS Porcentaje,
                to_char(ps.fecha_inicio_propiedad :: DATE, 'dd-mm-yyyy') AS Fecha_Inicio
           FROM 
              persona_propietario pro, propietario_stud ps, stud s
           WHERE ps.fk_stud=s.codigo_stud
              AND ps.fk_propietario=pro.codigo_persona
              AND ps.fecha_fin_propiedad is null
              AND s.codigo_stud=$1;`,
    values: [studId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("Los propietarios", studId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerPropietarioDeStudDistintos = async (studId) => {
  const query = {
    text: `SELECT 
              pro.codigo_persona AS IdPropietario, pro.nombre1_persona AS Nombre, pro.apellido1_persona AS Apellido, ps.porcentaje_propiedad AS Porcentaje,
              to_char(ps.fecha_inicio_propiedad :: DATE, 'dd-mm-yyyy') AS Fecha_Inicio
           FROM 
              persona_propietario pro, propietario_stud ps, stud s
           WHERE ps.fk_stud=s.codigo_stud
              AND ps.fk_propietario=pro.codigo_persona
              AND ps.fecha_fin_propiedad IS null
              AND s.codigo_stud!=$1;`,
    values: [studId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El propietario", studId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerVestimentaStud = async (studId) => {
  const query = {
    text: ``,//aqui lanzas el query white
    values: [studId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("La vestimenta", studId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerCaballoStud = async (studId) => {
  const query = {
    text: ``,//aqui lanzas el query white
    values: [studId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El caballo", studId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerPosibleCaballoStud = async (studId) => {
  const query = {
    text: ``,//aqui lanzas el query white
    values: [studId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("El posible caballo", studId);

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
  const { nombreStud, fechaCreacion } = cambios;

  const query = {
    text: `UPDATE stud
        SET nombre_stud=$1,
        fecha_creacion_stud=$2
        WHERE codigo_stud=$3;`,
    values: [nombreStud, fechaCreacion, studId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El stud", studId);

    dbConnection.end;
    return nombreStud;
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
  obtenerPropietarioDeStud,
  obtenerPropietarioDeStudDistintos,
  obtenerVestimentaStud,
  obtenerCaballoStud,
  obtenerPosibleCaballoStud,
  registrarStud,
  actualizarStud,
  borrarStud,
  obtenerIdStudNueva,
};
