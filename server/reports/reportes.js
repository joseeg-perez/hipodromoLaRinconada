const request = require("request");


const generarReporte = (res, data) => {
    const options = {
        uri: "http://localhost:5489/api/report",
        method: "POST",
        json: data
    }
    request(options).pipe(res);

    return;
};

const usuario_roles = (req, res) => {
    const data = {
        template:{"shortid":"30MWS4kbuD"},
    }
    generarReporte(res, data);
};

//Segunda entrega

const apuestas_por_taquilla = (req, res) => {
    const data = {
        template:{"shortid":"x91E6PiMh"},
    }
    generarReporte(res, data);
};

const apuestas_por_taquilla_tipo_apuesta = (req, res) => {
    const data = {
        template:{"shortid":"FakIV_K5j"},
    }
    generarReporte(res, data);
};

const carreras_mas_frecuentes = (req, res) => {
    const data = {
        template:{"shortid":"Phr1lLKKA"},
    }
    generarReporte(res, data);
};

const ejemplares_ganadores_clasicos = (req, res) => {
    const data = {
        template:{"shortid":"72yu8Ob23"},
    }
    generarReporte(res, data);
};

const estadistica_ejemplar_cantidad_carrera = (req, res) => {
    const data = {
        template:{"shortid":"pO5vZ6s7_"},
    }
    generarReporte(res, data);
};

const estadistica_ejemplar_combi_jinete_entrenador = (req, res) => {
    const data = {
        template:{"shortid":"eqTvqEbFh"},
    }
    generarReporte(res, data);
};

const estadistica_jinete_cantidad_carreras = (req, res) => {
    const data = {
        template:{"shortid":"0frvfn8kbi"},
    }
    generarReporte(res, data);
};

const gaceta_hipica_con_favoritos = (req, res) => {
    const data = {
        template:{"shortid":"hM49-uwjC"},
    }
    generarReporte(res, data);
};

const ganadores_ultimas_15 = (req, res) => {
    const data = {
        template:{"shortid":"UYdlN2P7U"},
    }
    generarReporte(res, data);
};

const historial_jinete = (req, res) => {
    const data = {
        template:{"shortid":"kH-8Kn19Rz"},
    }
    generarReporte(res, data);
};

const implementos_mas_utilizados_en_carrera = (req, res) => {
    const data = {
        template:{"shortid":"wQJyTr_GCl"},
    }
    generarReporte(res, data);
};

const mejores_machos_hembras_cantidad_hijos_ganadores = (req, res) => {
    const data = {
        template:{"shortid":"QRuqhCNU0"},
    }
    generarReporte(res, data);
};

const mejores_rematadores_en_400m = (req, res) => {
    const data = {
        template:{"shortid":"m3exCyoZc"},
    }
    generarReporte(res, data);
};

const peso_jinete_ultimas_25_carreras = (req, res) => {
    const data = {
        template:{"shortid":"Y5FPhh5Hfn"},
    }
    generarReporte(res, data);
};

const programa_oficial_carrera = (req, res) => {
    const data = {
        template:{"shortid":"-_yqXPJ1E"},
    }
    generarReporte(res, data);
};

const promedio_ejemplares_ultimas_50_carreras_pelaje = (req, res) => {
    const data = {
        template:{"shortid":"y3sCYpGSBC"},
    }
    generarReporte(res, data);
};

const promedio_ejemplares_ultimas_50_carreras_sexo = (req, res) => {
    const data = {
        template:{"shortid":"srWxWP1Gn2"},
    }
    generarReporte(res, data);
};

const promedio_uso_implementos = (req, res) => {
    const data = {
        template:{"shortid":"cHPNb_-ec"},
    }
    generarReporte(res, data);
};

const resultados_de_carreras_con_especificaciones = (req, res) => {
    const data = {
        template:{"shortid":"TCWSPg3zeb"},
    }
    generarReporte(res, data);
};

const total_pagado_por_taquilla = (req, res) => {
    const data = {
        template:{"shortid":"EsYHmOwVs"},
    }
    generarReporte(res, data);
};

const ventas_entradas_al_recinto = (req, res) => {
    const data = {
        template:{"shortid":"QYmaKEtRAw"},
    }
    generarReporte(res, data);
};

module.exports = {
    apuestas_por_taquilla,
    apuestas_por_taquilla_tipo_apuesta,
    carreras_mas_frecuentes,
    ejemplares_ganadores_clasicos,
    estadistica_ejemplar_cantidad_carrera,
    estadistica_ejemplar_combi_jinete_entrenador,
    estadistica_jinete_cantidad_carreras,
    gaceta_hipica_con_favoritos,
    ganadores_ultimas_15,
    historial_jinete,
    implementos_mas_utilizados_en_carrera,
    mejores_machos_hembras_cantidad_hijos_ganadores,
    mejores_rematadores_en_400m,
    peso_jinete_ultimas_25_carreras,
    programa_oficial_carrera,
    promedio_ejemplares_ultimas_50_carreras_pelaje,
    promedio_ejemplares_ultimas_50_carreras_sexo,
    promedio_uso_implementos,
    resultados_de_carreras_con_especificaciones,
    total_pagado_por_taquilla,
    ventas_entradas_al_recinto,
};
