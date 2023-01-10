const dbConnection = require("./dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDePuestos = async () => {
    const query = {
        text: "SELECT * FROM puesto",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun puesto");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }  
};

const obtenerPuestoIndividual = async (puestoId) => {
    const query = {
        text: "SELECT * FROM puesto WHERE codigo_puesto=$1",
        values: [puestoId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El puesto", puestoId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarPuesto = async (nuevoPuesto) => {
    const { 
        numeroPuesto,
        fkCaballeriza,
     } = nuevoPuesto;

    const text = `INSERT INTO puesto(
        numero_puesto,
        fk_caballeriza) VALUES($1, $2)`;
        
    const values = [numeroPuesto, fkCaballeriza];

    try {
         const { rows } = await dbConnection.query(text, values);
    
        dbConnection.end;
        return(numeroPuesto) ;
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El puesto con numero ${numeroPuesto} ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }   
};

const actualizarPuesto = async (puestoId, cambios) => {
    const { 
        numeroPuesto,
        fkCaballeriza,
       } = cambios;
    
        const query = {
            text:`UPDATE puesto
            SET numero_puesto=$1,
            fk_caballeriza=$2
            WHERE codigo_puesto=$3;`,
            values: [
                numeroPuesto,
                fkCaballeriza,
                puestoId
            ],
        }
        try {
          const { rowCount } = await dbConnection.query(query);
          if (rowCount === 0)
            httpError.idNoEncontrado("El puesto", puestoId);
                
            dbConnection.end;
            return(numeroPuesto);
        } catch (error) {
            if (error.code === "23505") {
              throw {
                status: 409,
                message: `Ya hay un puesto con el codigo '${puestoId}' registrado.`,
              };
            }
            throw { status: error?.status || 500, message: error?.message || error };
        }   
};

const borrarPuesto = async (puestoId) => {
    const query = {
        text: "DELETE FROM puesto WHERE codigo_puesto=$1",
        values: [puestoId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El puesto", puestoId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }    
};

module.exports = {
    obtenerListaDePuestos,
    obtenerPuestoIndividual,
    registrarPuesto,
    actualizarPuesto,
    borrarPuesto,
};