const Jinete = require("../database/jinete.js");

const obtenerListaDeJinetes = async () => {
  try {
    const listaJinetes = await Jinete.obtenerListaDeJinetes();

    return listaJinetes;
  } catch (error) {
    throw error;
  }
};

const obtenerJineteIndividual = async (jineteId) => {
  try {
    const jinete = await Jinete.obtenerJineteIndividual(jineteId);

    return jinete;
  } catch (error) {
    throw error;
  }
};

const registrarJinete = async (nuevoJinete) => {
  try {
    const jineteCreado = await Jinete.registrarJinete(nuevoJinete);

    return jineteCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarJinete = async (jineteId, cambios) => {
    try {
        const jineteActualizado = await Jinete.actualizarJinete(jineteId, cambios);
        
        return(jineteActualizado);
    } catch (error) {
        throw(error);
    }
};

const borrarJinete = async (jineteId) => {
  try {
    return await Jinete.borrarJinete(jineteId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeJinetes,
  obtenerJineteIndividual,
  registrarJinete,
  actualizarJinete,
  borrarJinete,
};
