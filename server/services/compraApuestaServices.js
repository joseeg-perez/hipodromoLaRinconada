const CompraApuesta = require("../database/compraApuesta.js");

const obtenerListaDeCompraApuesta = async () => {
  try {
    const listaCompraApuesta =
      await CompraApuesta.obtenerListaDeCompraApuesta();

    return listaCompraApuesta;
  } catch (error) {
    throw error;
  }
};

const obtenerCompraApuestaIndividual = async (compraApuestaId) => {
  try {
    const compraApuesta = await CompraApuesta.obtenerCompraApuestaIndividual(
      compraApuestaId
    );

    return compraApuesta;
  } catch (error) {
    throw error;
  }
};

const registrarCompraApuesta = async (nuevoCompraApuesta) => {
    try {
        await CompraApuesta.registrarCompraApuesta(nuevoCompraApuesta);
    
        return;
      } catch (error) {
        throw error;
    }
};

const actualizarCompraApuesta = async (compraApuestaId, cambios) => {
  try {
      await CompraApuesta.actualizarCompraApuesta(compraApuestaId, cambios);

      return;
  } catch (error) {
    throw error;
  }
};

const borrarCompraApuesta = async (compraApuestaId) => {
  try {
    await CompraApuesta.borrarCompraApuesta(compraApuestaId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeCompraApuesta,
  obtenerCompraApuestaIndividual,
  registrarCompraApuesta,
  actualizarCompraApuesta,
  borrarCompraApuesta,
};
