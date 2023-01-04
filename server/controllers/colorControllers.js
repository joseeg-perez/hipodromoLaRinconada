const colorService = require("../services/colorServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeColores = async (req, res) => {
    try {
        const listaColores = await colorService.obtenerListaDeColores();

        res.status(200).send({ status: "OK", data: listaColores });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

// const obtenercolorIndividual = async (req, res) => {
//     const {
//         params: { colorId },
//     } = req;
    
//     try {
//         if (!colorId)
//             return(httpError.idVacio(res, ":colorId"));

//         if (isNaN(colorId) || colorId === ' ')
//             return(httpError.idInvalido(res, ":colorId"));

//         const color = await colorService.obtenercolorIndividual(colorId);
//         res.status(200).send({ status: "OK", data: color});
//     } catch (error) {
//         res 
//         .status(error?.status || 500)
//         .send({ status: "FAILED", data: { error: error?.message || error }});        
//     }
// };

// const registrarcolor = async (req, res) => {
//     const { 
//         fechaCreacion,
//         nombrecolor,
//         propietariocolor,
//         color1,
//         color2,
//         vestimentas,
//      } = req.body;

//     if (!nombrecolor || !fechaCreacion)
//         return (httpError.faltaInformacion(res));

//     const nuevocolor = {
//         nombrecolor: nombrecolor.toLowerCase(),
//         fechaCreacion,
//         propietariocolor,
//         color1,
//         color2,
//         vestimentas,
//     };

//     try {
//         const colorCreado = await colorService.registrarcolor(nuevocolor);
//         res.status(200).send({ status: "OK", data: `Se ha creado el color '${ colorCreado }' de forma satisfactoria.` });
//     } catch (error) {
//         res
//         .status(error?.status || 500)
//         .send({ status: "FAILED", data: { error: error?.message || error } });
//     }

// };

// const actualizarcolor = async (req, res) => {
//     res.send("Estamos en actualizar color");

// };

// const borrarcolor = async (req, res) => {
//     const {
//         params: { colorId },
//     } = req;

//     try {
//         if (!colorId)
//             return(httpError.faltaInformacion(res));

//         if (isNaN(colorId) || colorId === ' ')
//             return(httpError.idInvalido(res, ":colorId"));

//         await colorService.borrarcolor(colorId);
//         res.status(200).send({ status: "OK", data: `El color con el id '${colorId}' se ha eliminado con exito.` });
//     } catch (error) {
//         res
//         .status(error?.status || 500)
//         .send({ status: "FAILED", data: {error: error?.message || error} });
//     }
// };

module.exports = {
    obtenerListaDeColores,
    // obtenercolorIndividual,
    // registrarcolor,
    // actualizarcolor,
    // borrarcolor,
};