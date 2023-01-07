const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeRoles = async () => {
    const query = {
        text: "SELECT * FROM rol",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun rol");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerRolIndividual = async (rolId) => {
    const query = {
        text: "SELECT * FROM rol WHERE codigo_rol=$1",
        values: [rolId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El rol", rolId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarRol = async (nuevoRol) => {
    const { nombre } = nuevoRol;
    const text = "INSERT INTO rol(nombre_rol) VALUES($1)";
    const values = [nombre];

    try {
        await dbConnection.query(text, values);
        dbConnection.end;

        return (nombre);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El rol '${nombre}' ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};
//Restante
const actualizarRol = async (rolId, cambios) => {
    const { nombre } = cambios;

    const query = {
        text:`UPDATE rol
        SET nombre_rol=$1
        WHERE codigo_rol=$2;`,
        values: [nombre, rolId],
    }
        try {
            const { rowCount } = await dbConnection.query(query);
            if (rowCount === 0)
                httpError.idNoEncontrado("El rol", rolId);
            
            dbConnection.end;
            return(nombre)
        } catch (error) {
            if (error.code === "23505") {
                throw {
                  status: 409,
                  message: `Ya hay un rol con el nombre '${nombre}' registrado.`,
                };
              }
            throw { status: error?.status || 500, message: error?.message || error };
        }    

        
};

const borrarRol = async (rolId) => {
    const query = {
        text: "DELETE FROM rol WHERE codigo_rol=$1",
        values: [rolId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El rol", rolId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeRoles,
    obtenerRolIndividual,
    registrarRol,
    actualizarRol,
    borrarRol,
};