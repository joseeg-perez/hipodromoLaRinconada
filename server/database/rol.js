const dbConnection = require("../database/dbConfig.js");

const obtenerListaDeRoles = async () => {
    const query = {
        text: "SELECT * FROM rol",
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query)
        if (rows.length === 0){
            throw{
                status: 404,
                message: "No se ha registrado ningun rol por los momentos.",
            }
        }
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
        rowMode: "array",
    };

    try {
        const { rows } = await dbConnection.query(query);
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
const actualizarRol = (rolId, cambios) => {

};

const borrarRol = async (rolId) => {
    const query = {
        text: "DELETE FROM rol WHERE codigo_rol=$1",
        values: [rolId],
        rowMode: "array",
    };

    try {
       
        const res = await dbConnection.query(query);        
        if (res.rowCount === 0){
            throw{
                status: 404,
                message: `El rol con el id: '${rolId}' no se encuentra registrado.`,
            }
        }
        dbConnection.end;
        return(res.rowCount > 0);
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