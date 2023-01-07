const StudColor = require("../database/studColor.js");

const obtenerListaDeStudColor = async () => {
  try {
    const listaStudColor = await StudColor.obtenerListaDeStudColor();

    return listaStudColor;
  } catch (error) {
    throw error;
  }
};

const registrarStudColor = async (nuevoStudColor) => {
  try {
    await StudColor.registrarStudColor(nuevoStudColor);

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarStudColor = async (studColorId, cambios) => {};

const borrarStudColor = async (studColorId) => {
  try {
    await StudColor.borrarStudColor(studColorId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeStudColor,
  registrarStudColor,
  actualizarStudColor,
  borrarStudColor,
};
