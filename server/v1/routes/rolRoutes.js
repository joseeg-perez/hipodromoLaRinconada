const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/rolValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const rolController = require("../../controllers/rolControllers.js");

router.get("/listado_de_roles", rolController.obtenerListaDeRoles);

router.get("/:rolId", validateId, rolController.obtenerRolIndividual);

router.post("/registrar_rol", validateCreate, rolController.registrarRol);

router.patch("/:rolId", validateId, rolController.actualizarRol);

router.delete("/:rolId", validateId, rolController.borrarRol);

module.exports = router;
