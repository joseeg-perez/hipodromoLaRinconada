const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const registrarVeterinarioCaballeriza = async (nuevoVeterinarioCaballeriza) => {
    const { 
        fkCaballeriza,
        fkVeterinario,
     } = nuevoVeterinarioCaballeriza;
     
    const text = `INSERT INTO veterinario_caballeriza(
        fk_caballeriza,
        fk_veterinario) VALUES($1, $2)`;
    
    const values = [
        fkCaballeriza,
        fkVeterinario,
    ];

    try {
        await dbConnection.query(text, values);
        dbConnection.end;

        return;
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El veterinario en esa caballeriza ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarVeterinarioCaballeriza = async (veterinarioCaballerizaId, cambios) => {

};

const borrarVeterinarioCaballeriza = async (veterinarioCaballerizaId) => {
    const query = {
        text: "DELETE FROM veterinario_caballeriza WHERE codigo_vet_cab=$1",
        values: [veterinarioCaballerizaId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El veterinario de la caballeriza", veterinarioCaballerizaId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    registrarVeterinarioCaballeriza,
    actualizarVeterinarioCaballeriza,
    borrarVeterinarioCaballeriza,
};