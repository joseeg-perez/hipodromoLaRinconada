const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeStuds = async () => {
    const query = {
        text: "SELECT * FROM stud",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun stud");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerStudIndividual = async (studId) => {
    const query = {
        text: "SELECT * FROM stud WHERE codigo_stud=$1",
        values: [studId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El stud", studId);

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarStud = async (nuevoStud) => {
    const { 
        nombreStud,
        fechaCreacion,
     } = nuevoStud;

    const text = "INSERT INTO stud(nombre_stud, fecha_creacion_stud) VALUES($1, $2)";
    const values = [nombreStud, fechaCreacion];

    try {
        await dbConnection.query(text, values);
        dbConnection.end;

        return (nombreStud);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El stud '${nombreStud}' ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarStud = async (studId, cambios) => {

};

const borrarStud = async (studId) => {
    const query = {
        text: "DELETE FROM stud WHERE codigo_stud=$1",
        values: [studId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El stud", studId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeStuds,
    obtenerStudIndividual,
    registrarStud,
    actualizarStud,
    borrarStud,
};