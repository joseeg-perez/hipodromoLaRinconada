const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeColores = async () => {
  const query = {
    text: "SELECT * FROM color",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

// const obtenerColorIndividual = async (ColorId) => {
//     try {
//         const Color = await Color.obtenerColorIndividual(ColorId);

//         return(Color);
//     } catch (error) {
//         throw(error);
//     }
// };

// const registrarColor = async (nuevoColor) => {
//     try {
//         const ColorCreado = await Color.registrarColor(nuevoColor);
//         const idColorCreado = await Color.obtenerIdColorNueva(nuevoColor);

//         const propietarioColor = {
//             porcentajePropiedad: 100,
//             fkColor: idColorCreado,
//             fkPropietario: nuevoColor.propietarioColor,
//         };

//         const ColorColor1 = {
//             fkColor: nuevoColor.color1,
//             fkColor: idColorCreado,
//         };

//         const ColorColor2 = {
//             fkColor: nuevoColor.color2,
//             fkColor: idColorCreado,
//         };

//         console.log(ColorColor1.fkColor)
//         await registrarPropietarioColor(propietarioColor);
//         await registrarColorColor(ColorColor1);
//         await registrarColorColor(ColorColor2);

//         return(ColorCreado);
//     } catch (error) {
//         throw(error);
//     }
// };

// const actualizarColor = async (ColorId, cambios) => {

// };

// const borrarColor = async (ColorId) => {
//     try {
//         await Color.borrarColor(ColorId);
//     } catch (error) {
//         throw(error);
//     }
// };

module.exports = {
  obtenerListaDeColores,
  // obtenerColorIndividual,
  // registrarColor,
  // actualizarColor,
  // borrarColor,
};
