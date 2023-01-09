const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/ejemplarValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const ejemplarController = require("../../controllers/ejemplarControllers.js");

router.get("/listado_de_ejemplares", ejemplarController.obtenerListaDeEjemplares);

router.get("/:ejemplarId", validateId, ejemplarController.obtenerEjemplarIndividual);

router.get("propietario/:ejemplarId", validateId, ejemplarController.obtenerPropietarioDelEjemplarIndividual);

router.get("noPropietario/:ejemplarId", validateId, ejemplarController.obtenerNoPropietarioDelEjemplarIndividual);

router.get("posibleStud/:ejemplarId", validateId, ejemplarController.obtenerPosibleStudDelEjemplarIndividual);

router.post("/registrar_ejemplar", validateCreate, ejemplarController.registrarEjemplar);

router.patch("/:ejemplarId", validateId, ejemplarController.actualizarEjemplar);

router.delete("/:ejemplarId", validateId, ejemplarController.borrarEjemplar);

module.exports = router;