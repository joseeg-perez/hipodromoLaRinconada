const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCaballerizas = async () => {
  const query = {
    text: `select codigo_caballeriza, cantidad_puestos, 
        concat(e.nombre1_persona, ' ', e.apellido1_persona) as nombreEntrenador,
        concat(v.nombre1_persona, ' ', v.apellido1_persona) as nombreVeterinario
        from caballeriza, persona_entrenador e, persona_veterinario v, entrenador_caballeriza ec, veterinario_caballeriza vc
        where ec.fk_entrenador = e.codigo_persona
        AND vc.fk_caballeriza = codigo_caballeriza
        AND ec.fk_caballeriza = codigo_caballeriza
        AND vc.fk_veterinario = v.codigo_persona
        AND ec.fecha_fin is null
        AND vc.fecha_fin is null
        ORDER BY codigo_caballeriza`,
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ninguna caballeriza");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerCaballerizaIndividual = async (caballerizaId) => {
  const query = {
    text: "SELECT * FROM caballeriza WHERE codigo_caballeriza=$1",
    values: [caballerizaId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("La caballeriza", caballerizaId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarCaballeriza = async (nuevaCaballeriza) => {
  const { cantidadPuestos } = nuevaCaballeriza;

  const text = `INSERT INTO caballeriza(cantidad_puestos) VALUES($1)`;

  const values = [cantidadPuestos];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La caballeriza ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarCaballeriza = (caballerizaId, cambios) => {};

const borrarCaballeriza = async (caballerizaId) => {
  const query = {
    text: "DELETE FROM caballeriza WHERE codigo_caballeriza=$1",
    values: [caballerizaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("La caballeriza", caballerizaId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerIdCaballerizaNueva = async () => {
  const query = {
    text: "SELECT codigo_caballeriza FROM caballeriza",
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
  obtenerListaDeCaballerizas,
  obtenerCaballerizaIndividual,
  registrarCaballeriza,
  actualizarCaballeriza,
  borrarCaballeriza,
  obtenerIdCaballerizaNueva,
};
