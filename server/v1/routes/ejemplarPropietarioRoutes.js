const express = require("express");
const router = express.Router();
// const { validateCreate } = require("../../validators/ejemplarPropietarioValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const ejemplarPropietarioController = require("../../controllers/ejemplarPropietarioControllers.js");

router.get("/listado_de_ejemplarPropietario", ejemplarPropietarioController.obtenerListaDeEjemplarPropietarios);

router.get("/:ejemplarPropietarioId", validateId, ejemplarPropietarioController.obtenerEjemplarPropietarioIndividual);

router.post("/registrar_ejemplarPropietario", ejemplarPropietarioController.registrarEjemplarPropietario);

router.patch("/:ejemplarPropietarioId", validateId, ejemplarPropietarioController.actualizarEjemplarPropietario);

router.delete("/:ejemplarPropietarioId", validateId, ejemplarPropietarioController.borrarEjemplarPropietario);

module.exports = router;