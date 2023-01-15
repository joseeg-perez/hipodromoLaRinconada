const dbConnection = require("../database/dbConfig.js");

const obtenerListaQuery1 = async (gacetaId) => {
  const query = {
    text: `select *from carrera
    where fk_evento=$1`,
    values: [gacetaId]
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerListaQuery2 = async (gacetaId) => {
    const query = {
      text: `select distinct pa.codigo_participacion,e.codigo_ejemplar, e.nombre_ejemplar, pa.gualdrapa, pa.puesto_pista, pa.peso_caballo, pa.peso_jinete, 
      e.sexo_ejemplar as sexo, pel.abrev_pelaje as pelaje , AGE(CURRENT_DATE, e.fecha_nacimiento_ejemplar) as edad,
      concat  (pe.nombre1_persona,' ',pe.apellido1_persona) as entrenador, 
      concat  (pj.nombre1_persona,' ',pj.apellido1_persona) as jinete, em.nombre_ejemplar as madre, ep.nombre_ejemplar as padre,
      s.nombre_stud as stud, count(par.codigo_participacion) as participaciones
      
      from participacion pa,persona_jinete pj, persona_entrenador pe, carrera ca, evento ev, pelaje pel,stud s, 
      ejemplar_propietario eprop, propietario_stud ps,participacion par,
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
      and par.fk_ejemplar=e.codigo_ejemplar
      and par.fk_resultado is not null
      and par.fk_entrenador=pe.codigo_persona
      and par.fk_jinete=pj.codigo_persona
      and ev.codigo_evento=$1
      
      group by pa.codigo_participacion,e.codigo_ejemplar, e.nombre_ejemplar, pa.gualdrapa, pa.puesto_pista, pa.peso_caballo, 
      pa.peso_jinete, sexo, pelaje ,edad, entrenador, jinete,madre, padre, stud`,
      values: [gacetaId]
    };
  
    try {
      const { rows } = await dbConnection.query(query);
  
      dbConnection.end;
      return rows;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
  };

const obtenerListaQuery3 = async (gacetaId) => {
    const query = {
      text: `SELECT codigo_participacion, abrev_implemento
      FROM carrera c, participacion p, participacion_implemento pi, implemento
      WHERE pi.fk_implemento = codigo_implemento
      AND pi.fk_participacion = codigo_participacion
      AND p.fk_carrera = codigo_carrera
      AND c.fk_evento = $1
      GROUP BY codigo_participacion, abrev_implemento`,
      values: [gacetaId]
    };
  
    try {
      const { rows } = await dbConnection.query(query);
  
      dbConnection.end;
      return rows;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerListaQuery4 = async (gacetaId) => {
    const query = {
      text: `SELECT codigo_participacion, nombre_medicamento
      FROM carrera c, participacion p, participacion_medicamento pm, medicamento
      WHERE pm.fk_medicamento = codigo_medicamento
      AND pm.fk_participacion = codigo_participacion
      AND p.fk_carrera = codigo_carrera
      AND c.fk_evento = $1
      GROUP BY codigo_participacion, nombre_medicamento`,
      values: [gacetaId]
    };
  
    try {
      const { rows } = await dbConnection.query(query);
  
      dbConnection.end;
      return rows;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerListaQuery5 = async (gacetaId) => {
    const query = {
      text: `select  e.codigo_ejemplar, ev.fecha_evento, pa.codigo_participacion, pa.peso_caballo, pa.peso_jinete, 
      concat  (pj.nombre1_persona,' ',pj.apellido1_persona) as jinete, r.tiempo_total, r.speed_rating, r.tiempo_300m, r.tiempo_800m,
      car.valor_regla as distancia, cr.valor_regla as variante, carre.valor_regla as participantes, ej.nombre_ejemplar as ganador,
      res.tiempo_total as tiempo_ganador, cu.nombre_cuerpo_dif, ca.premio_primero
      from participacion pa, carrera ca, evento ev, ejemplar e, persona_jinete pj, resultado r, carrera_regla car, carrera_regla cr, 
      carrera_regla carre, ejemplar ej, participacion par, resultado res, cuerpo_diferencia cu
      where pa.fk_ejemplar=e.codigo_ejemplar
      and pa.fk_jinete=pj.codigo_persona
      and pa.fk_carrera=ca.codigo_carrera
      and ca.fk_evento=ev.codigo_evento
      and car.fk_carrera=ca.codigo_carrera
      and car.fk_regla=1
      and cr.fk_carrera=ca.codigo_carrera
      and cr.fk_regla=7
      and carre.fk_carrera=ca.codigo_carrera
      and carre.fk_regla=8
      and pa.fk_retiro is null
      and pa.fk_resultado=r.codigo_resultado
      and par.fk_ejemplar=ej.codigo_ejemplar
      and par.fk_carrera=ca.codigo_carrera
      and par.fk_resultado=res.codigo_resultado
      and res.fk_tipo_resultado=1
      and res.fk_cuerpo_diferencia=cu.codigo_cuerpo_dif
      and e.codigo_ejemplar in (select  e.codigo_ejemplar
                                from participacion pa, carrera ca, evento ev, ejemplar e
                                where pa.fk_ejemplar=e.codigo_ejemplar
                                and pa.fk_carrera=ca.codigo_carrera
                                and ca.fk_evento=ev.codigo_evento
                                and ev.codigo_evento=$1)
      group by e.codigo_ejemplar,ev.fecha_evento, pa.codigo_participacion, pa.peso_caballo, pa.peso_jinete, jinete, 
      r.tiempo_total, r.speed_rating, r.tiempo_300m, r.tiempo_800m, distancia, variante, participantes, ganador, tiempo_ganador,
      cu.nombre_cuerpo_dif, ca.premio_primero`,
      values: [gacetaId]
    };
  
    try {
      const { rows } = await dbConnection.query(query);
  
      dbConnection.end;
      return rows;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerListaQuery6 = async (gacetaId) => {
    const query = {
      text: `select e.codigo_ejemplar, avg(r.speed_rating) as promedio, max(res.speed_rating) as mejor, avg(res.fk_tipo_resultado)
      from ejemplar e, participacion pa, resultado r, resultado res, participacion par, carrera c, carrera_regla cr, participacion pr, 
      carrera car, carrera_regla carre
      where pa.fk_ejemplar=e.codigo_ejemplar
      and pa.fk_resultado=r.codigo_resultado
      and par.fk_ejemplar=e.codigo_ejemplar
      and par.fk_resultado=res.codigo_resultado
      and par.fk_carrera=c.codigo_carrera
      and cr.fk_carrera=c.codigo_carrera
      and pr.fk_ejemplar=e.codigo_ejemplar
      and pr.fk_carrera=car.codigo_carrera
      and car.fk_evento=$1
      and carre.fk_carrera=car.codigo_carrera
      and carre.fk_regla=1
      and cr.fk_regla=1
      and cr.valor_regla=carre.valor_regla
      and e.codigo_ejemplar in (select  e.codigo_ejemplar
                                from participacion pa, carrera ca, evento ev, ejemplar e
                                where pa.fk_ejemplar=e.codigo_ejemplar
                                and pa.fk_carrera=ca.codigo_carrera
                                and ca.fk_evento=ev.codigo_evento
                                and ev.codigo_evento=$1)
      group by e.codigo_ejemplar`,
      values: [gacetaId]
    };
  
    try {
      const { rows } = await dbConnection.query(query);
  
      dbConnection.end;
      return rows;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerListaQuery7 = async (gacetaId) => {
    const query = {
      text: `select distinct pa.codigo_participacion,e.codigo_ejemplar, e.nombre_ejemplar, 
      concat  (pe.nombre1_persona,' ',pe.apellido1_persona) as entrenador, 
      concat  (pj.nombre1_persona,' ',pj.apellido1_persona) as jinete,
      count(p.codigo_participacion) as ganadas
      
      from participacion pa,persona_jinete pj, persona_entrenador pe, carrera ca,participacion p,  resultado r,
      ejemplar e
      
      where pa.fk_ejemplar=e.codigo_ejemplar
      and pa.fk_jinete=pj.codigo_persona
      and pa.fk_entrenador=pe.codigo_persona
      and pa.fk_carrera=ca.codigo_carrera
      and ca.fk_evento=$1
      and p.fk_ejemplar=e.codigo_ejemplar
      and p.fk_resultado=r.codigo_resultado
      and p.fk_entrenador=pe.codigo_persona
      and p.fk_jinete=pj.codigo_persona
      and r.fk_tipo_resultado=1
      
      
      group by pa.codigo_participacion,e.codigo_ejemplar, e.nombre_ejemplar, entrenador, jinete`,
      values: [gacetaId]
    };
  
    try {
      const { rows } = await dbConnection.query(query);
  
      dbConnection.end;
      return rows;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerListaQuery8 = async (gacetaId) => {
    const query = {
      text: `select distinct pa.codigo_participacion,e.codigo_ejemplar, e.nombre_ejemplar,
      (count (ep.nombre_ejemplar)+count (em.nombre_ejemplar))
      
      from participacion pa, carrera ca,
      ejemplar e left outer join ejemplar em  on em.fk_madre_ejemplar=e.codigo_ejemplar left outer join ejemplar ep
      on ep.fk_padre_ejemplar=e.codigo_ejemplar 
      
      where pa.fk_ejemplar=e.codigo_ejemplar
      and pa.fk_carrera=ca.codigo_carrera
      and ca.fk_evento=$1
      group by pa.codigo_participacion,e.codigo_ejemplar, e.nombre_ejemplar`,
      values: [gacetaId]
    };
  
    try {
      const { rows } = await dbConnection.query(query);
  
      dbConnection.end;
      return rows;
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaQuery1,
    obtenerListaQuery2,
    obtenerListaQuery3,
    obtenerListaQuery4,
    obtenerListaQuery5,
    obtenerListaQuery6,
    obtenerListaQuery7,
    obtenerListaQuery8,
  };