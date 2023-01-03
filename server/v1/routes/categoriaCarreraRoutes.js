const express = require("express");
const router = express.Router();

const categoriaController = require("../../controllers/categoriaCarreraControllers.js");

router.get("/listado_de_categorias", categoriaController.obtenerListaDeCategorias);

router.get("/:categoriaId", categoriaController.obtenerCategoriaIndividual);

router.post("/registrar_categoria", categoriaController.registrarCategoria);

router.patch("/:categoriaId", categoriaController.actualizarCategoria);

router.delete("/:categoriaId", categoriaController.borrarCategoria);

module.exports = router;