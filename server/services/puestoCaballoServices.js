const PuestoCaballo = require("../database/puestoCaballo.js");

const obtenerListaDePuestoCaballos = async () => {
  try {
    const listaPuestoCaballos =
      await PuestoCaballo.obtenerListaDePuestoCaballos();

    return listaPuestoCaballos;
  } catch (error) {
    throw error;
  }
};

const obtenerPuestoCaballoIndividual = async (puestoCaballoId) => {
  try {
    const puestoCaballo = await PuestoCaballo.obtenerPuestoCaballoIndividual(
      puestoCaballoId
    );

    return puestoCaballo;
  } catch (error) {
    throw error;
  }
};

const registrarPuestoCaballo = async (nuevoPuestoCaballo) => {
  try {
    const puestoCaballoCreado = await PuestoCaballo.registrarPuestoCaballo(
      nuevoPuestoCaballo
    );

    return puestoCaballoCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarPuestoCaballo = async (puestoCaballoId, cambios) => {
  try {
    PuestoCaballo.actualizarPuestoCaballo(puestoCaballoId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarPuestoCaballo = async (puestoCaballoId) => {
  try {
    await PuestoCaballo.borrarPuestoCaballo(puestoCaballoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDePuestoCaballos,
  obtenerPuestoCaballoIndividual,
  registrarPuestoCaballo,
  actualizarPuestoCaballo,
  borrarPuestoCaballo,
};
