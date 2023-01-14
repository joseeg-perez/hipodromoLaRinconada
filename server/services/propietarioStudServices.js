const PropietarioStud = require("../database/propietarioStud.js");

const obtenerListaDePropietarios = async () => {
  try {
    const listaPropietarios = await PropietarioStud.obtenerListaDePropietarios();

    return(listaPropietarios);
  } catch (error) {
    throw error;
  }
};

const registrarPropietarioStud = async (nuevoPropietarioStud) => {
  try {
    await PropietarioStud.registrarPropietarioStud(nuevoPropietarioStud);

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarPropietarioStud = async (propietarioStudId, cambios) => {
  try {
    await PropietarioStud.actualizarPropietarioStud(propietarioStudId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarPropietarioStud = async (propietarioStudId) => {
  try {
    await PropietarioStud.borrarPropietarioStud(propietarioStudId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDePropietarios,
  registrarPropietarioStud,
  actualizarPropietarioStud,
  borrarPropietarioStud,
};
