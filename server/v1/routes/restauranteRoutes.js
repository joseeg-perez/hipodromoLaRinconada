const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/restauranteValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const restauranteController = require("../../controllers/restauranteControllers.js");

router.get("/listado_de_restaurantes", restauranteController.obtenerListaDeRestaurantes);

router.get("/:restauranteId", validateId, restauranteController.obtenerRestauranteIndividual);

router.post("/registrar_restaurante", validateCreate, restauranteController.registrarRestaurante);

router.patch("/:restauranteId", validateId, restauranteController.actualizarRestaurante);

router.delete("/:restauranteId", validateId, restauranteController.borrarRestaurante);

module.exports = router;
