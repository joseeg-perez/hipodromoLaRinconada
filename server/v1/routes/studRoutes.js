const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/studValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const { validarPermiso } = require("../../middlewares/authMiddleware.js");
const { validarRol } = require("../../middlewares/rolMiddleware.js");

const studController = require("../../controllers/studControllers.js");

router.get("/listado_de_studs", studController.obtenerListaDeStuds);

router.get("/:studId", validateId, studController.obtenerStudIndividual);

router.get("/propietarios/:studId", validateId, studController.obtenerPropietarioDeStud);//Propietarios del stud

router.get("/propietariosNoStud/:studId", validateId, studController.obtenerPropietarioDeStudDistintos);//Propietarios que no son del stud

router.get("/vestimentaStud/:studId", validateId, studController.obtenerVestimentaStud);//Vestimentas de ese stud

router.get("/caballosStud/:studId", validateId, studController.obtenerCaballoStud);//Caballos que no son de ese stud pero pueden serlo

router.get("/PosiblesCaballosStud/:studId", validateId, studController.obtenerPosibleCaballoStud);

router.post("/cambiarPorcentajes", studController.cambiarPorcentajes);//Para cambiar los porcentajes de los propietarios

router.post("/agregarVestimentas", studController.agregarVestimentas);//Para agregar mas vestimentas ademas de las existentes

router.post("/registrar_stud",validarPermiso, validarRol([1]), validateCreate, studController.registrarStud);

router.patch("/:studId", validateId, studController.actualizarStud);

router.delete("/:studId", validateId, studController.borrarStud);

module.exports = router;
