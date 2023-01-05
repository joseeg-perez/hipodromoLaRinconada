const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/restauranteValidators.js");

const restauranteController = require("../../controllers/restauranteControllers.js");

router.get("/listado_de_restaurantes", restauranteController.obtenerListaDeRestaurantes);

router.get("/:restauranteId", restauranteController.obtenerRestauranteIndividual);

router.post("/registrar_restaurante", validateCreate, restauranteController.registrarRestaurante);

router.patch("/:restauranteId", restauranteController.actualizarRestaurante);

router.delete("/:restauranteId", restauranteController.borrarRestaurante);

module.exports = router;
