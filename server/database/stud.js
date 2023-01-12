const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const starStuds = async () => {
  const query = {
    text: `select * from stud`,
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerListaDeStuds = async () => {
  const query = {
    text: `SELECT s.codigo_stud, s.nombre_stud, 
    to_char(s.fecha_creacion_stud :: DATE, 'dd/mm/yyyy') as fecha,
    c.codigo_del_color
    FROM	color c, stud_color sc, stud s
    WHERE	sc.fk_stud = s.codigo_stud
    AND		sc.fk_color = c.id_color`,
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
    text: `select nombre_stud, 
    to_char(s.fecha_creacion_stud :: DATE, ''yyyy-mm-dd'') as fecha, c.codigo_del_color
    from stud s, color c, stud_color sc
    where sc.fk_stud = $1
    and codigo_stud = $1
    and sc.fk_color = c.id_color`,
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
              pro.codigo_persona AS IdPropietario, ps.codigo_prop_stud as propietarioStudId,pro.nombre1_persona AS Nombre,
              pro.apellido1_persona AS Apellido, ps.porcentaje_propiedad AS Porcentaje,
                to_char(ps.fecha_inicio_propiedad :: DATE, 'dd-mm-yyyy') AS Fecha_Inicio,
                pro.cedula_persona as cedula
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
    text: `select pro.codigo_persona as IdPropietario,
    pro.nombre1_persona as nombre, pro.apellido1_persona as apellido,
    pro.cedula_persona as cedula
    from persona_propietario pro
    where pro.codigo_persona NOT IN
    (SELECT ps.fk_propietario from propietario_stud ps
    where ps.fk_stud = $1 AND ps.fecha_fin_propiedad is null
    )`,
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
    text: `select sv.fk_vestimenta, csv.fk_color, codigo_del_color 
    from color_stud_vestimenta csv, stud_vestimenta sv, color c
    where sv.fk_stud = $1
    and csv.fk_stud_vestimenta = codigo_sv
    and csv.fk_color = id_color`,
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
    text: `select distinct e.codigo_ejemplar as IdEjemplar, 
    e.nombre_ejemplar as Nombre, nombre_hara,
    to_char(e.fecha_nacimiento_ejemplar :: DATE, 'dd/mm/yyyy') as fechaNac, e.imagen_ejemplar,
    concat(en.nombre1_persona, ' ', en.apellido1_persona) as entrenador, ca.codigo_caballeriza as Caballeriza,
    pu.numero_puesto as Puesto
    from ejemplar e, persona_entrenador en, entrenador_caballeriza ec, 
    caballeriza ca, puesto_caballo pc, puesto pu,
    ejemplar_propietario ep, propietario_stud ps, stud s, hara
    where ep.fk_ejemplar=e.codigo_ejemplar
    and ep.fk_prop_stud=ps.codigo_prop_stud
    and ep.fecha_fin_propiedad is null
    and ps.fk_stud=s.codigo_stud
    and ps.fecha_fin_propiedad is null
    and pc.fk_ejemplar=e.codigo_ejemplar
    and pc.fecha_fin is null
    and pc.fk_puesto=pu.codigo_puesto
    and pu.fk_caballeriza=ca.codigo_caballeriza
    and ec.fk_caballeriza=ca.codigo_caballeriza
    and ec.fecha_fin is null
    and ec.fk_entrenador=en.codigo_persona
    and s.codigo_stud=$1
    and e.fk_hara = codigo_hara`,
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
    text: ``, //aqui lanzas el query white
    values: [studId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El posible caballo", studId);

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
    console.log(error)  
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
  starStuds,
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
