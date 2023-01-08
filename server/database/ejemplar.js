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
        fk_pelaje) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
        
    const values = [
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
    const { 
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
       } = cambios;
    
        const query = {
            text:`UPDATE ejemplar
            SET nombre_ejemplar=$1,
            numero_ejemplar=$2,
            numero_tatuaje_labial=$3,
            sexo_ejemplar=$4,
            fecha_nacimiento_ejemplar=$5,
            imagen_ejemplar=$6,
            peso_ejemplar=$7,
            precio_ejemplar=$8,
            fk_hara=$9,
            fk_madre_ejemplar=$10,
            fk_padre_ejemplar=$11,
            fk_pelaje=$12
            WHERE codigo_ejemplar=$13;`,
            values: [
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
                pelajeEjemplar,
                ejemplarId
            ],
        }
        try {
            const { rowCount } = await dbConnection.query(query);
            if (rowCount === 0)
                httpError.idNoEncontrado("El ejemplar", ejemplarId);
                
            dbConnection.end;
            return(nombreEjemplar);
        } catch (error) {
            if (error.code === "23505") {
                throw {
                  status: 409,
                  message: `Ya hay un ejemplar con el numero de tatuaje labial '${tatlabialEjemplar}' registrado.`,
                };
            }
            throw { status: error?.status || 500, message: error?.message || error };
        }
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
