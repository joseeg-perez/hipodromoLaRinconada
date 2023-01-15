const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeParticipaciones = async () => {
  const query = {
    text: "SELECT * FROM participacion",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerInformacionDeLaParticipacion = async (participacionId) => {
  const query = {
    text: `select distinct pa.codigo_participacion, e.nombre_ejemplar, pa.gualdrapa, pa.puesto_pista, pa.peso_caballo, pa.peso_jinete, 
    e.sexo_ejemplar as sexo, pel.abrev_pelaje as pelaje , AGE(CURRENT_DATE, e.fecha_nacimiento_ejemplar) as edad,
    concat  (pe.nombre1_persona,' ',pe.apellido1_persona) as entrenador, 
    concat  (pj.nombre1_persona,' ',pj.apellido1_persona) as jinete, em.nombre_ejemplar as madre, ep.nombre_ejemplar as padre,
    s.nombre_stud as stud
    
    from participacion pa,persona_jinete pj, persona_entrenador pe, carrera ca, evento ev, pelaje pel,stud s, 
    ejemplar_propietario eprop, propietario_stud ps,
    ejemplar e left outer join ejemplar em  on e.fk_madre_ejemplar=em.codigo_ejemplar left outer join ejemplar ep
    on e.fk_padre_ejemplar=ep.codigo_ejemplar 
    
    where pa.fk_ejemplar=e.codigo_ejemplar
    and eprop.fk_ejemplar=e.codigo_ejemplar
    and eprop.fecha_fin_propiedad is null
    and eprop.fk_prop_stud=ps.codigo_prop_stud
    and ps.fecha_fin_propiedad is null
    and ps.fk_stud=s.codigo_stud
    and e.fk_pelaje=pel.codigo_pelaje
    and pa.fk_jinete=pj.codigo_persona
    and pa.fk_entrenador=pe.codigo_persona
    and pa.fk_carrera=ca.codigo_carrera
    and ca.fk_evento=ev.codigo_evento
    and ev.codigo_evento=$1`,
    values: [participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerMedicamentosDeLaParticipacion = async (participacionId) => {
  const query = {
    text: `SELECT codigo_participacion, nombre_medicamento
    FROM carrera c, participacion p, participacion_medicamento pm, medicamento
    WHERE pm.fk_medicamento = codigo_medicamento
    AND pm.fk_participacion = codigo_participacion
    AND p.fk_carrera = codigo_carrera
    AND c.fk_evento = $1
    GROUP BY codigo_participacion, nombre_medicamento`,
    values: [participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerImplementosDeLaParticipacion = async (participacionId) => {
  const query = {
    text: `SELECT codigo_participacion, nombre_implemento
    FROM carrera c, participacion p, participacion_implemento pi, implemento
    WHERE pi.fk_implemento = codigo_implemento
    AND pi.fk_participacion = codigo_participacion
    AND p.fk_carrera = codigo_carrera
    AND c.fk_evento = $1
    GROUP BY codigo_participacion, nombre_implemento`,
    values: [participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerListaDeJinetesDisponibles = async (participacionId) => {
  const query = {
    text: `SELECT 
              j.codigo_persona, j.nombre1_persona, j.apellido1_persona
           FROM 
              persona_jinete j
           WHERE 
                 j.codigo_persona NOT IN (SELECT 
                                            fk_jinete
                                          FROM 
                                            participacion
                                          WHERE 
                                            fk_carrera = $1)`,
    values:[participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerListaDeEjemplaresDisponibles = async (cambios) => {
  const  {
    sexoEjemplar,
    fkCarrera,
  } = cambios
  
  const query = {
    text: `SELECT codigo_ejemplar, nombre_ejemplar
    FROM ejemplar
    WHERE codigo_ejemplar NOT IN (SELECT fk_ejemplar
                  FROM participacion, ejemplar
                  WHERE fk_carrera = $2
                  AND fk_ejemplar = codigo_ejemplar
                  AND fk_retiro IS NULL)
    AND sexo_ejemplar =$1`,
    values:[sexoEjemplar, fkCarrera],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerParticipacionParaRetiro = async (participacionId) => {
  const query = {
    text: `SELECT p.codigo_participacion, ej.nombre_ejemplar as nombre_ejemplar, 
    concat(j.nombre1_persona, ' ', j.apellido1_persona) as nombre_jinete, 
    concat(e.nombre1_persona, ' ', e.apellido1_persona) as nombre_entrenador,
    p.gualdrapa as gualdrapa
    FROM participacion p, persona_jinete j, 
    persona_entrenador e, ejemplar ej
    WHERE p.fk_carrera = $1
    AND p.fk_retiro IS NULL
    AND p.fk_entrenador = e.codigo_persona
    AND p.fk_jinete = j.codigo_persona
    AND p.fk_ejemplar = ej.codigo_ejemplar`,
    values:[participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerPuestosOcupados = async (participacionId) => {
  const query = {
    text: `SELECT puesto_pista
    FROM participacion
    WHERE fk_carrera = $1
    AND fk_retiro IS NULL`,
    values:[participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const listaDeEjemplaresPorParticipacion = async (participacionId) => {
  const query = {
    text: `SELECT cr.valor_regla
    FROM carrera_regla cr
    WHERE cr.fk_carrera = $1
    AND cr.fk_regla = 8`,
    values:[participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const participantesInscritos = async (participacionId) => {
  const query = {
    text: `SELECT cr.valor_regla
    FROM carrera_regla cr
    WHERE cr.fk_carrera = $1
    AND cr.fk_regla = 8`,
    values:[participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const cantidadEjemplaresPorParticipacion = async (participacionId) => {
  const query = {
    text: `SELECT COUNT(*)
    FROM participacion
    WHERE fk_carrera = $1
    AND fk_retiro IS NULL`,
    values:[participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerSexoCarrera = async (participacionId) => {
  const query = {
    text: `select cr.valor_regla
    from carrera_regla cr
    where cr.fk_carrera = $1
    and cr.fk_regla = 2`,
    values:[participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerParticipacionIndividual = async (participacionId) => {
  const query = {
    text: "SELECT * FROM participacion WHERE codigo_participacion=$1",
    values: [participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("La participacion", participacionId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerParticipacionesEnCarrera = async (participacionId) => {
  const query = {
    text: `select distinct ps.fk_stud, ec.fk_entrenador
    from ejemplar,
    persona_entrenador e, entrenador_caballeriza ec, puesto_caballo pc, stud,
    ejemplar_propietario ep, propietario_stud ps, caballeriza,
    puesto p
    where pc.fk_ejemplar = codigo_ejemplar
    and pc.fk_puesto = codigo_puesto
    and p.fk_caballeriza = codigo_caballeriza
    and ec.fk_caballeriza = codigo_caballeriza
    and ec.fk_entrenador = e.codigo_persona
    and ec.fecha_fin IS NULL
	and ps.fecha_fin_propiedad IS NULL
    and ep.fk_ejemplar = codigo_ejemplar
    and ep.fk_prop_stud = ps.codigo_prop_stud
    and ps.fk_stud = codigo_stud
	and codigo_ejemplar = $1`,
    values: [participacionId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("La participacion", participacionId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarParticipacion = async (nuevaParticipacion) => {
  const {
    gualdrapa,
    puestoPista,
    pesoCaballo,
    pesoJinete,
    fkEjemplar,
    fkCarrera,
    fkJinete,
    fkEntrenador,
    fkStud,
  } = nuevaParticipacion;

  const text = `INSERT INTO participacion(
        gualdrapa, 
        puesto_pista,
        peso_caballo,
        peso_jinete,
        fk_ejemplar,
        fk_carrera,
        fk_jinete,
        fk_entrenador,
        fk_stud) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
        
    let values = [
        gualdrapa,
        puestoPista,
        pesoCaballo,
        pesoJinete,
        fkEjemplar,
        fkCarrera,
        fkJinete,
        fkEntrenador,
        fkStud,
    ];

    try {
        await dbConnection.query(text, values);
    
        dbConnection.end;
        return (puestoPista);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `La participacion ya ha sido registrada.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
  };

const actualizarParticipacion = async (participacionId, cambios) => {
  const {
    fkRetiro,
  } = cambios;

  const query = {
    text: `UPDATE participacion
            SET fk_retiro=$1
            WHERE codigo_participacion=$2;`,
    values: [
      fkRetiro,
      participacionId,
    ],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("La participacion", participacionId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay una participacion con el codigo '${participacionId}' registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarParticipacion = async (participacionId) => {
  const query = {
    text: "DELETE FROM participacion WHERE codigo_participacion=$1",
    values: [participacionId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("La participacion ", participacionId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeParticipaciones,
  obtenerInformacionDeLaParticipacion,
  obtenerImplementosDeLaParticipacion,
  obtenerMedicamentosDeLaParticipacion,
  obtenerListaDeJinetesDisponibles,
  obtenerParticipacionIndividual,
  obtenerParticipacionesEnCarrera,
  obtenerListaDeEjemplaresDisponibles,
  obtenerParticipacionParaRetiro,
  listaDeEjemplaresPorParticipacion,
  cantidadEjemplaresPorParticipacion,
  obtenerPuestosOcupados,
  participantesInscritos,
  obtenerSexoCarrera,
  registrarParticipacion,
  actualizarParticipacion,
  borrarParticipacion,
};
