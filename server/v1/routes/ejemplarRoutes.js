const express = require("express");
const router = express.Router();
const { validarPermiso } = require("../../middlewares/authMiddleware.js");
const { validarRol } = require("../../middlewares/rolMiddleware.js");
const { validateCreate } = require("../../validators/ejemplarValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const ejemplarController = require("../../controllers/ejemplarControllers.js");

router.get("/listado_de_ejemplares", ejemplarController.obtenerListaDeEjemplares);

router.get("/:ejemplarId", validateId, ejemplarController.obtenerEjemplarIndividual);

router.post("/registrar_ejemplar", validarPermiso, validarRol([51]),  ejemplarController.registrarEjemplar);

router.get("propietario/:ejemplarId", validateId, ejemplarController.obtenerPropietarioDelEjemplarIndividual);//Propietarios de ese ejemplar

router.get("noPropietario/:ejemplarId", validateId, ejemplarController.obtenerNoPropietarioDelEjemplarIndividual);//Propietarios que no pertenecen a ese ejemplar

router.get("posibleStud/:ejemplarId", validateId, ejemplarController.obtenerPosibleStudDelEjemplarIndividual);//Studs posibles de ese ejemplar

router.post("/registrar_ejemplar", validateCreate, ejemplarController.registrarEjemplar);

router.patch("/:ejemplarId", validateId, ejemplarController.actualizarEjemplar);

router.delete("/:ejemplarId", validateId, ejemplarController.borrarEjemplar);

module.exports = router;