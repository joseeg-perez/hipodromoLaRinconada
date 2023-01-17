const express = require("express");
const router = express.Router();
const reporte = require("../../reports/reportes.js");

router.get("/usuario_rol", reporte.usuario_roles);

router.get("/apuestas_por_taquilla", reporte.apuestas_por_taquilla);

router.get("/apuestas_por_taquilla_tipo_apuesta", reporte.apuestas_por_taquilla_tipo_apuesta);

router.get("/carreras_mas_frecuentes", reporte.carreras_mas_frecuentes);

router.get("/ejemplares_ganadores_clasicos", reporte.ejemplares_ganadores_clasicos);

router.get("/estadistica_ejemplar_cantidad_carrera", reporte.estadistica_ejemplar_cantidad_carrera);

router.get("/estadistica_ejemplar_combi_jinete_entrenador", reporte.estadistica_ejemplar_combi_jinete_entrenador);

router.get("/estadistica_jinete_cantidad_carreras", reporte.estadistica_jinete_cantidad_carreras);

router.get("/gaceta_hipica_con_favoritos", reporte.gaceta_hipica_con_favoritos);

router.get("/ganadores_ultimas_15", reporte.ganadores_ultimas_15);

router.get("/implementos_mas_utilizados_en_carrera", reporte.implementos_mas_utilizados_en_carrera);

router.get("/mejores_machos_hembras_cantidad_hijos_ganadores", reporte.mejores_machos_hembras_cantidad_hijos_ganadores);

router.get("/mejores_rematadores_en_400m", reporte.mejores_rematadores_en_400m);

router.get("/peso_jinete_ultimas_25_carreras", reporte.peso_jinete_ultimas_25_carreras);

router.get("/programa_oficial_carrera", reporte.programa_oficial_carrera);

router.get("/promedio_ejemplares_ultimas_50_carreras_pelaje", reporte.promedio_ejemplares_ultimas_50_carreras_pelaje);

router.get("/promedio_ejemplares_ultimas_50_carreras_sexo", reporte.promedio_ejemplares_ultimas_50_carreras_sexo);

router.get("/promedio_uso_implementos", reporte.promedio_uso_implementos);

router.get("/resultados_de_carreras_con_especificaciones", reporte.resultados_de_carreras_con_especificaciones);

router.get("/total_pagado_por_taquilla", reporte.total_pagado_por_taquilla);

router.get("/ventas_entradas_al_recinto", reporte.ventas_entradas_al_recinto);

module.exports = router;