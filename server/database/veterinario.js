const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeVeterinarios = async () => {
    const query = {
        text: `SELECT codigo_persona, nombre1_persona, apellido1_persona, to_char(fecha_inicio :: DATE, 'dd/mm/yyyy') as fecha_inicio, codigo_caballeriza, cantidad_puestos 
        FROM persona_veterinario, veterinario_caballeriza, caballeriza 
        WHERE fk_veterinario = codigo_persona and fk_caballeriza = codigo_caballeriza and fecha_fin IS NULL`,
    };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ningun veterinario");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerListaDeCaballerizasVacias = async () => {
    const query = {
        text: `SELECT codigo_caballeriza, cantidad_puestos 
        FROM caballeriza, veterinario_caballeriza
        WHERE codigo_caballeriza NOT IN (
            SELECT fk_caballeriza
            FROM veterinario_caballeriza
            WHERE fecha_fin IS NULL
        )`,
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ninguna caballeriza");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerVeterinarioIndividual = async (veterinarioId) => {
  const query = {
    text: "SELECT * FROM persona_veterinario WHERE codigo_persona=$1",
    values: [veterinarioId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El veterinario", veterinarioId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarVeterinario = async (nuevoVeterinario) => {
  const {
    cedulaPersona,
    nombre1Persona,
    nombre2Persona,
    apellido1Persona,
    apellido2Persona,
    fechaNacimiento,
  } = nuevoVeterinario;

  const text = `INSERT INTO persona_veterinario(
        cedula_persona,
        nombre1_persona,
        nombre2_persona,
        apellido1_persona,
        apellido2_persona,
        fecha_nacimiento_persona) VALUES($1, $2, $3, $4, $5, $6)`;

  const values = [
    cedulaPersona,
    nombre1Persona,
    nombre2Persona,
    apellido1Persona,
    apellido2Persona,
    fechaNacimiento,
  ];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return `${nombre1Persona} ${apellido1Persona}`;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El veterinario con la cedula '${cedulaPersona}' ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarVeterinario = (veterinarioId, cambios) => {};

const borrarVeterinario = async (veterinarioId) => {
  const query = {
    text: "DELETE FROM persona_veterinario WHERE codigo_persona=$1",
    values: [veterinarioId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("El veterinario", veterinarioId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerIdVeterinarioNuevo = async (nuevoVeterinario) => {
    const { 
        cedulaPersona,
     } = nuevoVeterinario;

    const query = {
        text: `SELECT codigo_persona
        FROM persona_veterinario
        WHERE cedula_persona = $1`,
        values: [cedulaPersona],
    };

    try {
        const { rows } = await dbConnection.query(query);
        const idVeterinario = rows[0].codigo_persona;

        return(idVeterinario);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeVeterinarios,
    obtenerListaDeCaballerizasVacias,
    obtenerVeterinarioIndividual,
    registrarVeterinario,
    actualizarVeterinario,
    borrarVeterinario,
    obtenerIdVeterinarioNuevo,
};