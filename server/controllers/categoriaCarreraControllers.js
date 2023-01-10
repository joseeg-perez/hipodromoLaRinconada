const categoriaCarreraService = require("../services/categoriaCarreraServices.js");

const obtenerListaDeCategorias = async (req, res) => {
  try {
    const listaCategorias =
      await categoriaCarreraService.obtenerListaDeCategorias();

    res.status(200).send({ status: "OK", data: listaCategorias });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerCategoriaIndividual = async (req, res) => {
  const {
    params: { categoriaId },
  } = req;

  try {
    const categoria = await categoriaCarreraService.obtenerCategoriaIndividual(
      categoriaId
    );
    res.status(200).send({ status: "OK", data: categoria });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarCategoria = async (req, res) => {
  const { nombreCategoria } = req.body;

  const nuevaCategoria = {
    nombreCategoria: nombreCategoria.toLowerCase(),
  };

  try {
    const categoriaCreada = await categoriaCarreraService.registrarCategoria(
      nuevaCategoria
    );
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha creado la categoria '${categoriaCreada}' de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarCategoria = async (req, res) => {
  const {
    body,
    params: { categoriaId },
  } = req;

  try {
    const categoriaActualizada =
      await categoriaCarreraService.actualizarCategoria(categoriaId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado el nombre de la categoria a '${categoriaActualizada} de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarCategoria = async (req, res) => {
  const {
    params: { categoriaId },
  } = req;

    try {
        await categoriaCarreraService.borrarCategoria(categoriaId);
        res.status(200).send({ status: "OK", data: `La categoria con el id '${categoriaId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
  obtenerListaDeCategorias,
  obtenerCategoriaIndividual,
  registrarCategoria,
  actualizarCategoria,
  borrarCategoria,
};
