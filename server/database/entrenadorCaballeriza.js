const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const registrarEntrenadorCaballeriza = async (nuevoEntrenadorCaballeriza) => {
    const { 
        fkCaballeriza,
        fkEntrenador,
     } = nuevoEntrenadorCaballeriza;
     
    const text = `INSERT INTO entrenador_caballeriza(
        fk_caballeriza,
        fk_entrenador) VALUES($1, $2)`;
    
    const values = [
        fkCaballeriza,
        fkEntrenador,
    ];

    try {
        await dbConnection.query(text, values);
        dbConnection.end;

        return;
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El entrenador en esa caballeriza ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }   
};

const actualizarEntrenadorCaballeriza = async (entrenadorCaballerizaId, cambios) => {
    const { 
        fechaInicio,
        fechaFin,
        fkCaballeriza,
        fkEntrenador,
       } = cambios;
    
        const query = {
            text:`UPDATE entrenador_caballeriza
            SET fecha_inicio=$1,
            fecha_fin=$2,
            fk_caballeriza=$3,
            fk_entrenador=$4
            WHERE codigo_ent_cab=$5;`,
            values: [
                fechaInicio,
                fechaFin,
                fkCaballeriza,
                fkEntrenador,
                entrenadorCaballerizaId
            ],
        }
        try {
          const { rowCount } = await dbConnection.query(query);
          if (rowCount === 0)
            httpError.idNoEncontrado("El entrenador relacionado a la caballeriza", entrenadorCaballerizaId);
                
            dbConnection.end;
            return;
        } catch (error) {
            if (error.code === "23505") {
              throw {
                status: 409,
                message: `Ya hay un entrenador relacionado a la caballeriza con el codigo '${entrenadorCaballerizaId}' registrado.`,
              };
            }
            throw { status: error?.status || 500, message: error?.message || error };
        }
};

const borrarEntrenadorCaballeriza = async (entrenadorCaballerizaId) => {
    const query = {
        text: "DELETE FROM entrenador_caballeriza WHERE codigo_ent_cab=$1",
        values: [entrenadorCaballerizaId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El entrenador de la caballeriza", entrenadorCaballerizaId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    registrarEntrenadorCaballeriza,
    actualizarEntrenadorCaballeriza,
    borrarEntrenadorCaballeriza,
};