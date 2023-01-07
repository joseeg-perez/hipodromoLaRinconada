const CategoriaCarrera = require("../database/categoriaCarrera.js");

const obtenerListaDeCategorias = async () => {
  try {
    const listaCategorias = await CategoriaCarrera.obtenerListaDeCategorias();

    return listaCategorias;
  } catch (error) {
    throw error;
  }
};

const obtenerCategoriaIndividual = async (categoriaId) => {
  try {
    const categoriaCarrera = await CategoriaCarrera.obtenerCategoriaIndividual(
      categoriaId
    );

    return categoriaCarrera;
  } catch (error) {
    throw error;
  }
};

const registrarCategoria = async (nuevaCategoria) => {
  try {
    const categoriaCreada = await CategoriaCarrera.registrarCategoria(
      nuevaCategoria
    );

    return categoriaCreada;
  } catch (error) {
    throw error;
  }
};

const actualizarCategoria = (categoriaId, cambios) => {
  try {
    const categoriaActualizada = CategoriaCarrera.actualizarCategoria(
      categoriaId,
      cambios
    );

    return categoriaActualizada;
  } catch (error) {
    throw error;
  }
};

const borrarCategoria = async (categoriaId) => {
  try {
    await CategoriaCarrera.borrarCategoria(categoriaId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeCategorias,
  obtenerCategoriaIndividual,
  registrarCategoria,
  actualizarCategoria,
  borrarCategoria,
};
