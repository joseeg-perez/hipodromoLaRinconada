const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/rolValidators.js");


const rolController = require("../../controllers/rolControllers.js");

router.get("/listado_de_roles", rolController.obtenerListaDeRoles);

router.get("/:rolId", rolController.obtenerRolIndividual);

router.post("/registrar_rol", validateCreate, rolController.registrarRol);

router.patch("/:rolId", rolController.actualizarRol);

router.delete("/:rolId", rolController.borrarRol);

module.exports = router;
