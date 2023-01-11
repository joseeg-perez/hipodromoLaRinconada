const express = require("express");
const router = express.Router();
const { validateCreate } = require("../../validators/participacionValidators.js");
const { validateId } = require("../../validators/IDsValidator.js");

const participacionController = require("../../controllers/participacionControllers.js");

router.get("/listado_de_participaciones", participacionController.obtenerListaDeParticipaciones);

router.get("/listado_jinetes_disponibles/:participacionId", validateId, participacionController.obtenerListaDeJinetesDisponibles);

router.get("/puestos_ocupados/:participacionId", validateId, participacionController.obtenerPuestosOcupados),

router.get("/cantidad_ejemplares_carrera/:participacionId", validateId, participacionController.cantidadEjemplaresPorParticipacion) 

router.get("/cantidad_participantes_inscritos/:participacionId", validateId, participacionController.participantesInscritos);

router.get("/participaciones_para_retiro/:participacionId", validateId, participacionController.obtenerParticipacionParaRetiro);

router.get("/:participacionId", validateId, participacionController.obtenerParticipacionIndividual);

router.get("/participaciones_en_carrera/:participacionId", validateId, participacionController.obtenerParticipacionesEnCarrera); //aqui sigo, yo

router.get("/obtener_sexo_carrera/:participacionId", validateId, participacionController.obtenerSexoCarrera);

router.post("/listado_de_ejemplares", participacionController.obtenerListaDeEjemplaresDisponibles);

router.post("/registrar_participacion", validateCreate ,participacionController.registrarParticipacion);

router.patch("/:participacionId", validateId, participacionController.actualizarParticipacion);

router.delete("/:participacionId", validateId, participacionController.borrarParticipacion);

module.exports = router;