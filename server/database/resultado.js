const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeResultados = async () => {
  const query = {
    text: "SELECT * FROM resultado",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerResultadoEvento = async (resultadoId) => {
  const query = {
    text: `select c.codigo_carrera,p.codigo_participacion, e.codigo_ejemplar,r.fk_tipo_resultado as puesto,e.nombre_ejemplar as caballo,
    concat  (pe.nombre1_persona,' ',pe.apellido1_persona) as entrenador, 
    concat  (pj.nombre1_persona,' ',pj.apellido1_persona) as jinete, p.peso_jinete, p.peso_caballo, p.gualdrapa, p.puesto_pista,
    to_char(r.tiempo_total, 'MI:SS') as tiempo_total,cp.nombre_cuerpo_dif as cuerpos
    from participacion p, ejemplar e, persona_entrenador pe, persona_jinete pj, resultado r, cuerpo_diferencia cp,carrera c
    where c.fk_evento=$1
    and p.fk_carrera=c.codigo_carrera
    and p.fk_ejemplar=e.codigo_ejemplar
    and p.fk_jinete=pj.codigo_persona
    and p.fk_entrenador=pe.codigo_persona
    and p.fk_resultado=r.codigo_resultado
    and r.fk_cuerpo_diferencia=cp.codigo_cuerpo_dif
    group by c.codigo_carrera,p.codigo_participacion, e.codigo_ejemplar,puesto,caballo,entrenador, jinete, p.peso_jinete, 
    p.peso_caballo, p.gualdrapa, p.puesto_pista,r.tiempo_total,cuerpos`,
    values: [resultadoId]
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerResultadoIndividual = async (resultadoId) => {
  const query = {
    text: "SELECT * FROM resultado WHERE codigo_resultado=$1",
    values: [resultadoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El resultado", resultadoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarResultado = async (nuevoResultado) => {
  const {
    diferenciaTiempo,
    speedRating,
    speedRating300m,
    speedRating400m,
    speedRating800m,
    tiempo300m,
    tiempo400m,
    tiempo800m,
    observacion,
    gananciaEntrenador,
    gananciaJinete,
    gananciaPropietario,
    tiempoTotal,
    fkTipoResultado,
    fkCuerpoDiferencia,
  } = nuevoResultado;

  const text = `INSERT INTO resultado(
        diferencia_tiempo,
        speed_rating,
        speed_rating_300m,
        speed_rating_400m,
        speed_rating_800m,
        tiempo_300m,
        tiempo_400m,
        tiempo_800m,
        observacion,
        ganancia_entrenador,
        ganancia_jinete,
        ganancia_propietario,
        tiempo_total,
        fk_tipo_resultado,
        fk_cuerpo_diferencia) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;

  const values = [
    diferenciaTiempo,
    speedRating,
    speedRating300m,
    speedRating400m,
    speedRating800m,
    tiempo300m,
    tiempo400m,
    tiempo800m,
    observacion,
    gananciaEntrenador,
    gananciaJinete,
    gananciaPropietario,
    tiempoTotal,
    fkTipoResultado,
    fkCuerpoDiferencia
  ];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El resultado ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarCodigoParticipacion = async (participacionId, idResultadoCreado) => {
  const query = {
    text: `UPDATE participacion
            SET fk_resultado=$1
            WHERE codigo_participacion=$2;`,
    values: [
      idResultadoCreado,
      participacionId,
    ],
  };
  try {
    await dbConnection.query(query);


    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un resultado con el codigo '${idResultadoCreado}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarResultado = async (resultadoId, cambios) => {
  const {
    diferenciaTiempo,
    speedRating,
    speedRating300m,
    speedRating400m,
    speedRating800m,
    observacion,
    gananciaEntrenador,
    gananciaJinete,
    gananciaPropietario,
    tiempoTotal,
    fkTipoResultado,
    fkCuerpoDiferencia,
  } = cambios;

  const query = {
    text: `UPDATE resultado
            SET diferencia_tiempo=$1,
            speed_rating=$2,
            speed_rating_300m=$3,
            speed_rating_400m=$4,
            speed_rating_800m=$5,
            observacion=$6,
            ganancia_entrenador=$7,
            ganancia_jinete=$8,
            ganancia_propietario=$9,
            tiempo_total=$10,
            fk_tipo_resultado=$11,
            fk_cuerpo_diferencia=$12
            WHERE codigo_resultado=$13;`,
    values: [
      diferenciaTiempo,
      speedRating,
      speedRating300m,
      speedRating400m,
      speedRating800m,
      observacion,
      gananciaEntrenador,
      gananciaJinete,
      gananciaPropietario,
      tiempoTotal,
      fkTipoResultado,
      fkCuerpoDiferencia,
      resultadoId,
    ],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El resultado", resultadoId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un resultado con el codigo '${resultadoId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarResultado = async (resultadoId) => {
  const query = {
    text: "DELETE FROM resultado WHERE codigo_resultado=$1",
    values: [resultadoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El resultado", resultadoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeResultados,
  obtenerResultadoEvento,
  actualizarCodigoParticipacion,
  obtenerResultadoIndividual,
  registrarResultado,
  actualizarResultado,
  borrarResultado,
};
