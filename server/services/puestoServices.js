const Puesto = require("../database/Puesto.js");

const obtenerListaDePuestos = async () => {
  try {
    const listaPuestos = await Puesto.obtenerListaDePuestos();

    return listaPuestos;
  } catch (error) {
    throw error;
  }
};

const obtenerPuestoIndividual = async (puestoId) => {
  try {
    const puesto = await Puesto.obtenerPuestoIndividual(puestoId);

    return puesto;
  } catch (error) {
    throw error;
  }
};

const registrarPuesto = async (nuevoPuesto) => {
  try {
    const puestoCreado = await Puesto.registrarPuesto(nuevoPuesto);

    return puestoCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarPuesto = (puestoId, cambios) => {
  try {
    const puestoActualizado = Puesto.actualizarPuesto(puestoId, cambios);

    return puestoActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarPuesto = async (puestoId) => {
  try {
    await Puesto.borrarPuesto(puestoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDePuestos,
  obtenerPuestoIndividual,
  registrarPuesto,
  actualizarPuesto,
  borrarPuesto,
};
