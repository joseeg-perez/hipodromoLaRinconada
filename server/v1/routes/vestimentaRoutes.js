const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/vestimentaValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const vestimentaController = require("../../controllers/vestimentaControllers.js");

router.get("/listado_de_vestimentas", vestimentaController.obtenerListaDeVestimentas);

router.get("/:vestimentaId", validateId, vestimentaController.obtenerVestimentaIndividual);

router.post("/registrar_vestimenta", validateCreate, vestimentaController.registrarVestimenta);

router.patch("/:vestimentaId", validateId, vestimentaController.actualizarVestimenta);

router.delete("/:vestimentaId", validateId, vestimentaController.borrarVestimenta);

module.exports = router;
