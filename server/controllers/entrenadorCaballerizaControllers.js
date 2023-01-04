const entrenadorCaballerizaService = require("../services/entrenadorCaballerizaServices.js");
const httpError = require("../helpers/httpMessages.js");

const registrarEntrenadorCaballeriza = async (req, res) => {
    const { 
        fechaInicio,
        fechaFin,
        fkCaballeriza,
        fkEntrenador,
     } = req.body;

    if (!fechaInicio || !fkCaballeriza || !fkEntrenador)
        return (httpError.faltaInformacion(res));

    if (isNaN(fkCaballeriza) || isNaN(fkEntrenador))
        return(res.status(422).send({ status:"FAILED", data: "Uno de los campos que espera valores numericos es invalido." }));

    const nuevoEntrenadorCaballeriza = {
        fechaInicio,
        fechaFin,
        fkCaballeriza,
        fkEntrenador,
    };

    try {
        await entrenadorCaballerizaService.registrarEntrenadorCaballeriza(nuevoEntrenadorCaballeriza);
        res.status(200).send({ status: "OK", data: `Se ha registrado el entrenador de la caballeriza de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarEntrenadorCaballeriza = async (req, res) => {
    res.send("Estamos en actualizar entrenadorCaballeriza");

};

const borrarEntrenadorCaballeriza = async (req, res) => {
    const {
        params: { entrenadorCaballerizaId },
    } = req;

    try {
        if (!entrenadorCaballerizaId)
            return(httpError.faltaInformacion(res));

        if (isNaN(entrenadorCaballerizaId) || entrenadorCaballerizaId === ' ')
            return(httpError.idInvalido(res, ":entrenadorCaballerizaId"));

        await entrenadorCaballerizaService.borrarEntrenadorCaballeriza(entrenadorCaballerizaId);
        res.status(200).send({ status: "OK", data: `El entrenador de la caballeriza con el id '${entrenadorCaballerizaId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};


module.exports = {
    registrarEntrenadorCaballeriza,
    actualizarEntrenadorCaballeriza,
    borrarEntrenadorCaballeriza,
};