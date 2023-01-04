const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeStudColor = async () => {
    const query = {
        text: "SELECT * FROM stud_color",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun color de stud");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarStudColor = async (nuevoStudColor) => {
    const { 
        fkColor,
        fkStud,
     } = nuevoStudColor;
     
    const text = `INSERT INTO stud_color(fk_color,fk_stud) VALUES($1, $2)`;
    
    const values = [
        fkColor,
        fkStud,
    ];

    try {
        await dbConnection.query(text, values);
        dbConnection.end;

        return;
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El color en ese stud ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarStudColor = async (studColorId, cambios) => {

};

const borrarStudColor = async (studColorId) => {
    const query = {
        text: "DELETE FROM stud_color WHERE codigo_sc=$1",
        values: [studColorId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El color del stud", studColorId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeStudColor,
    registrarStudColor,
    actualizarStudColor,
    borrarStudColor,
};