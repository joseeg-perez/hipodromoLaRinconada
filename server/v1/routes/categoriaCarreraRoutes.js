const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/categoriaCarreraValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const categoriaController = require("../../controllers/categoriaCarreraControllers.js");

router.get("/listado_de_categorias", categoriaController.obtenerListaDeCategorias);

router.get("/:categoriaId", validateId, categoriaController.obtenerCategoriaIndividual);

router.post("/registrar_categoria", validateCreate, categoriaController.registrarCategoria);

router.patch("/:categoriaId", validateId, categoriaController.actualizarCategoria);

router.delete("/:categoriaId", validateId, categoriaController.borrarCategoria);

module.exports = router;