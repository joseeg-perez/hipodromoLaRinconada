const Restaurante = require("../database/Restaurante.js");

const obtenerListaDeRestaurantes = async () => {
  try {
    const listaRestaurantes = await Restaurante.obtenerListaDeRestaurantes();

    return listaRestaurantes;
  } catch (error) {
    throw error;
  }
};

const obtenerRestauranteIndividual = async (restauranteId) => {
  try {
    const restaurante = await Restaurante.obtenerRestauranteIndividual(
      restauranteId
    );

    return restaurante;
  } catch (error) {
    throw error;
  }
};

const registrarRestaurante = async (nuevoRestaurante) => {
  try {
    const restauranteCreado = await Restaurante.registrarRestaurante(
      nuevoRestaurante
    );

    return restauranteCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarRestaurante = (restauranteId, cambios) => {
  try {
    const restauranteActualizado = Restaurante.actualizarRestaurante(
      restauranteId,
      cambios
    );

    return restauranteActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarRestaurante = async (restauranteId) => {
  try {
    await Restaurante.borrarRestaurante(restauranteId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeRestaurantes,
  obtenerRestauranteIndividual,
  registrarRestaurante,
  actualizarRestaurante,
  borrarRestaurante,
};
