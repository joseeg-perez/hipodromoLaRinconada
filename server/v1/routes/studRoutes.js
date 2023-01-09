const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/studValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const studController = require("../../controllers/studControllers.js");

router.get("/listado_de_studs", studController.obtenerListaDeStuds);

router.get("/:studId", validateId, studController.obtenerStudIndividual);

router.get("/propietarios/:studId", validateId, studController.obtenerPropietarioDeStud);

router.get("/propietariosNoStud/:studId", validateId, studController.obtenerPropietarioDeStudDistintos);

router.get("/vestimentaStud/:studId", validateId, studController.obtenerVestimentaStud);

router.get("/caballosStud/:studId", validateId, studController.obtenerCaballoStud);

router.get("/PosiblesCaballosStud/:studId", validateId, studController.obtenerPosibleCaballoStud);

router.post("/registrar_stud", validateCreate, studController.registrarStud);

router.patch("/:studId", validateId, studController.actualizarStud);

router.delete("/:studId", validateId, studController.borrarStud);

module.exports = router;
