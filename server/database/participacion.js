const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeParticipaciones = async () => {
    const query = {
        text: "SELECT * FROM participacion",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ninguna participacion");

        dbConnection.end;
        return (rows);
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
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarParticipacion = async (nuevaParticipacion) => {
    const { 
        gualdrapa,
        puestoPista,
        pesoCaballo,
        precioEjemplar,
        comentario,
        fkEjemplar,
        fkCarrera,
        fkJinete,
        fkEntrenador,
        fkRetiro,
        fkResultado,
        fkStud,
     } = nuevaParticipacion;

    const text = `INSERT INTO participacion(
        gualdrapa, 
        puesto_pista,
        peso_caballo,
        fk_ejemplar,
        fk_carrera,
        fk_jinete,
        fk_entrenador,
        fk_stud) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;
        
    let values = [
        gualdrapa,
        puestoPista,
        pesoCaballo,
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
        gualdrapa,
        puestoPista,
        pesoCaballo,
        precioEjemplar,
        comentario,
        fkEjemplar,
        fkCarrera,
        fkJinete,
        fkEntrenador,
        fkRetiro,
        fkResultado,
        fkStud,
       } = cambios;
    
        const query = {
            text:`UPDATE participacion
            SET gualdrapa=$1, 
            puesto_pista=$2,
            peso_caballo=$3,
            precio_ejemplar=$4,
            comentario=$5,
            fk_ejemplar=$6,
            fk_carrera=$7,
            fk_jinete=$8,
            fk_entrenador=$9,
            fk_retiro=$10,
            fk_resultado=$11,
            fk_stud=$12
            WHERE codigo_participacion=$13;`,
            values: [
                gualdrapa,
                puestoPista,
                pesoCaballo,
                precioEjemplar,
                comentario,
                fkEjemplar,
                fkCarrera,
                fkJinete,
                fkEntrenador,
                fkRetiro,
                fkResultado,
                fkStud,
                participacionId
            ],
        }
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
    obtenerParticipacionIndividual,
    registrarParticipacion,
    actualizarParticipacion,
    borrarParticipacion,
};