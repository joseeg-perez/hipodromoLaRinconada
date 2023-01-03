const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const registrarStudVestimenta = async (nuevoStudVestimenta) => {
    const { 
        fkVestimenta,
        fkStud,
     } = nuevoStudVestimenta;
     
    const text = `INSERT INTO stud_vestimenta(fk_vestimenta,fk_stud) VALUES($1, $2)`;
    
    const values = [
        fkVestimenta,
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
                message: `La vestimenta en ese stud ya ha sido registrada.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarStudVestimenta = async (studVestimentaId, cambios) => {

};

const borrarStudVestimenta = async (studVestimentaId) => {
    const query = {
        text: "DELETE FROM stud_vestimenta WHERE codigo_sv=$1",
        values: [studVestimentaId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("La vestimenta del stud", studVestimentaId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    registrarStudVestimenta,
    actualizarStudVestimenta,
    borrarStudVestimenta,
};