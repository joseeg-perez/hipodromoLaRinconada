const ColorStudVestimenta = require("../database/colorStudVestimenta.js");

const obtenerListadoDeColorStudVestimenta = async () => {
  try {
    const listaColorStudVestimenta = await ColorStudVestimenta.obtenerListadoDeColorStudVestimenta();

    return(listaColorStudVestimenta);
  } catch (error) {
    throw error;
  }
};

const registrarColorStudVestimenta = async (nuevoColorStudVestimenta) => {
  try {
    await ColorStudVestimenta.registrarColorStudVestimenta(
      nuevoColorStudVestimenta
    );

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarColorStudVestimenta = async (
  colorStudVestimentaId,
  cambios
) => {
  try {
    await ColorStudVestimenta.actualizarColorStudVestimenta(
      colorStudVestimentaId,
      cambios
    );

    return;
  } catch (error) {
    throw error;
  }
};

const borrarColorStudVestimenta = async (colorStudVestimentaId) => {
  try {
    await ColorStudVestimenta.borrarColorStudVestimenta(colorStudVestimentaId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListadoDeColorStudVestimenta,
  registrarColorStudVestimenta,
  actualizarColorStudVestimenta,
  borrarColorStudVestimenta,
};
