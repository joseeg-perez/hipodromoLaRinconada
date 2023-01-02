const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeEjemplares = async () => {
    const query = {
        text: "SELECT * FROM ejemplar",
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.noRegistrado("ningun ejemplar");

        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const obtenerEjemplarIndividual = async (ejemplarId) => {
    const query = {
        text: "SELECT * FROM ejemplar WHERE codigo_ejemplar=$1",
        values: [ejemplarId],
    };

    try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0)
            httpError.idNoEncontrado("El ejemplar", ejemplarId);
        
        dbConnection.end;
        return (rows);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const registrarEjemplar = async (nuevoEjemplar) => {
    const { 
        codigoEjemplar,
        nombreEjemplar,
        numeroEjemplar,
        tatlabialEjemplar,
        precioEjemplar,
        fecha_nacEjemplar,
        pesoEjemplar,
        padreEjemplar,
        madreEjemplar,
        imagenEjemplar,
        propietarioEjemplar,
        haraEjemplar,
        pelajeEjemplar,
        generoEjemplar,
     } = nuevoEjemplar;

    const text = `INSERT INTO ejemplar(
        codigo_ejemplar,
        nombre_ejemplar,
        numero_ejemplar,
        numero_tatuaje_labial,
        sexo_ejemplar,
        fecha_nacimiento_ejemplar,
        imagen_ejemplar,
        peso_ejemplar,
        precio_ejemplar,
        fk_hara,
        fk_madre_ejemplar,
        fk_padre_ejemplar,
        fk_pelaje) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
        
    const values = [
        codigoEjemplar,
        nombreEjemplar,
        numeroEjemplar,
        tatlabialEjemplar,
        generoEjemplar,
        fecha_nacEjemplar, 
        imagenEjemplar, 
        pesoEjemplar, 
        precioEjemplar, 
        haraEjemplar, 
        madreEjemplar, 
        padreEjemplar, 
        pelajeEjemplar
    ];

    try {
        const res = await dbConnection.query(text, values);
        dbConnection.end;

        return (nombreEjemplar);
    } catch (error) {
        if (error.code === '23505') {
            throw {
                status: 409,
                message: `El ejemplar con tatuaje labial'${tatlabialEjemplar}' ya ha sido registrado.`,
            }
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const actualizarEjemplar = async (ejemplarId, cambios) => {

    //terminar de aclarar que campos se editan
    const query = {
        text:"UPDATE ejemplar SET ejemplar=$1 WHERE numero_tatuaje_labial =$2",
        values: [cambios, ejemplarId],
    }

    const {

    } = cambios;

    console.log(cambios)
        try {
            const res = await dbConnection.query(query);
            if (res.rows.length === 0)
                httpError.idNoEncontrado("El ejemplar", ejemplarId);
              
        } catch (error) {
            throw(error);
        }
        return;

        // rows = cambios;
        // console.log("Estas son las filas  con cambios: ", )

    
};

const borrarEjemplar = async (ejemplarId) => {
    const query = {
        text: "DELETE FROM ejemplar WHERE codigo_ejemplar=$1",
        values: [ejemplarId],
    };

    try {
        const { rowCount } = await dbConnection.query(query);        
        if (rowCount === 0)
            httpError.idNoEncontrado("El ejemplar", ejemplarId);

        dbConnection.end;
        return;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = {
    obtenerListaDeEjemplares,
    obtenerEjemplarIndividual,
    registrarEjemplar,
    actualizarEjemplar,
    borrarEjemplar,
};
