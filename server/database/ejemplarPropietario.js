const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEjemplarPropietarios = async () => {
    const query = {
        text: "SELECT * FROM ejemplar_propietario",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun propietario dueno de ejemplar");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }     
};

const obtenerEjemplarPropietarioIndividual = async (ejemplarPropietarioId) => { 
    const query = {
        text: "SELECT * FROM ejemplar_propietario WHERE codigo_ej_prop=$1",
        values: [ejemplarPropietarioId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El propietario dueno de ejemplar", ejemplarPropietarioId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }    
};

const registrarEjemplarPropietario = async (nuevoEjemplarPropietario) => { 
    const { 
        porcentajePropiedad,
        fechaInicioPropiedad,
        fechaFinPropiedad,
        fkEjemplar,
        fkPropStud,
     } = nuevoEjemplarPropietario;

    const text = `INSERT INTO ejemplar_propietario(
        porcentaje_propiedad,
        fecha_inicio_propiedad,
        fecha_fin_propiedad,
        fk_ejemplar,
        fk_prop_stud) VALUES($1, $2, $3, $4, $5)`;
        
    const values = [
        porcentajePropiedad,
        fechaInicioPropiedad,
        fechaFinPropiedad,
        fkEjemplar,
        fkPropStud
    ];

    try {
        const res = await dbConnection.query(text, values);
        dbConnection.end;

        return (nombreEjemplar);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El propietario dueno de ejemplar ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }   
};

const actualizarEjemplarPropietario = async (ejemplarPropietarioId) => {
     //terminar de aclarar que campos se editan
     const query = {
        text:"UPDATE ejemplar SET ejemplar_propietario=$1 WHERE codigo_ej_prop =$2",
        values: [cambios, ejemplarPropietarioId],
    }

    const {

    } = cambios;

    console.log(cambios)
        try {
            const res = await dbConnection.query(query);
            if (res.rows.length === 0)
                httpError.idNoEncontrado("El ejemplar", ejemplarPropietarioId);
              
        } catch (error) {
            throw(error);
        }
        return;

        // rows = cambios;
        // console.log("Estas son las filas  con cambios: ", )

         
};

const borrarEjemplarPropietario = async (ejemplarPropietarioId) => {
    const query = {
        text: "DELETE FROM ejemplar_propietario WHERE codigo_ej_prop=$1",
        values: [ejemplarPropietarioId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El propietario dueno de ejemplar", ejemplarPropietarioId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }  
};

module.exports = {
    obtenerListaDeEjemplarPropietarios,
    obtenerEjemplarPropietarioIndividual,
    registrarEjemplarPropietario,
    actualizarEjemplarPropietario,
    borrarEjemplarPropietario,
};
