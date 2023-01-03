const participacionService = require("../services/participacionServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeParticipaciones = async (req, res) => {
    try {
        const listaDeParticipaciones = await participacionService.obtenerListaDeParticipaciones();

        res.status(200).send({ status: "OK", data: listaDeParticipaciones });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    };
};

const obtenerParticipacionIndividual = async (req, res) => {
    const {
        params: { participacionId },
    } = req;

    try {
        if (!participacionId)
            return(httpError.idVacio(res, ":participacionId"));

        if (isNaN(participacionId) || participacionId === ' ')
            return(httpError.idInvalido(res, ":participacionId"));

        const participacion = await participacionService.obtenerParticipacionIndividual(participacionId);
        res.status(200).send({ status: "OK", data: participacion});
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});        
    }
};

const registrarParticipacion = async (req, res) => {
    const { 
        gualdrapa,
        puestoPista,
        pesoCaballo,
        precioEjemplar,
        comentario,
        fkEjemplar,
        fkCarrera,
        fkJinete,
        fkEntrenador,
        fkRetiro,
        fkResultado,
        fkStud,
    } = req.body;

    if (!gualdrapa ||
        !puestoPista ||
        !pesoCaballo ||
        !fkEjemplar ||
        !fkCarrera ||
        !fkJinete ||
        !fkEntrenador ||
        !fkStud)
        return (httpError.faltaInformacion(res));

    if (isNaN(gualdrapa) ||
        isNaN(puestoPista) ||
        isNaN(pesoCaballo) || 
        isNaN(precioEjemplar) ||
        isNaN(fkEjemplar) ||
        isNaN(fkCarrera) ||
        isNaN(fkJinete) ||
        isNaN(fkEntrenador) ||
        isNaN(fkRetiro) ||
        isNaN(fkResultado) ||
        isNaN(fkStud))
        return(res.status(422).send({ status:"FAILED", data: "Uno de los campos que espera valores numericos es invalido." }));

    const nuevaParticipacion = {
        gualdrapa,
        puestoPista,
        pesoCaballo,
        precioEjemplar,
        comentario: comentario.toLowerCase(),
        fkEjemplar,
        fkCarrera,
        fkJinete,
        fkEntrenador,
        fkRetiro,
        fkResultado,
        fkStud,
    };

    try {
        const participacionCreada = await participacionService.registrarParticipacion(nuevaParticipacion);
        res.status(200).send({ status: "OK", data: `Se ha registrado la participacion en el puesto '${ participacionCreada }' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarParticipacion = async (req, res) => {
    res.send("Estamos en actualizar participacion");

};

const borrarParticipacion = async (req, res) => {
    const {
        params: { participacionId },
    } = req;

    try {
        if (isNaN(participacionId) || participacionId === ' ')
            return(httpError.idInvalido(res, ":participacionId"));

        if (!participacionId)
            return(httpError.faltaInformacion(res));

        await participacionService.borrarParticipacion(participacionId);
        res.status(200).send({ status: "OK", data: `El participacion con el id '${ participacionId }' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeParticipaciones,
    obtenerParticipacionIndividual,
    registrarParticipacion,
    actualizarParticipacion,
    borrarParticipacion,
};