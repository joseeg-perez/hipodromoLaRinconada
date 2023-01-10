const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCarreraReglas = async () => {
    const query = {
        text: "SELECT * FROM carrera_regla",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ninguna regla de carrera");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerCarreraReglaIndividual = async (carreraReglaId) => { 
    const query = {
        text: "SELECT * FROM carrera_regla WHERE codigo_cr=$1",
        values: [carreraReglaId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("La regla de carrera", carreraReglaId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }   
};

const registrarCarreraRegla = async (nuevaCategoriaRegla) => { 
    const { 
        valorRegla,
        fkCarrera,
        fkRegla,
     } = nuevaCategoriaRegla;

    const text = `INSERT INTO carrera_regla(valor_regla, fk_carrera, fk_regla) VALUES($1, $2, $3)`;
        
    const values = [valorRegla, fkCarrera, fkRegla,];

    try {
        await dbConnection.query(text, values);
    
        dbConnection.end;
        return (valorRegla);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `La regla de carrera con el valor '${ valorRegla }' ya ha sido registrada.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }    
};

const borrarCarreraRegla = async (carreraReglaId) => {
    const query = {
        text: "DELETE FROM carrera_regla WHERE codigo_cr=$1",
        values: [carreraReglaId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("la regla de carrera ", carreraReglaId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeCarreraReglas,
    obtenerCarreraReglaIndividual,
    registrarCarreraRegla,
    borrarCarreraRegla,
};
