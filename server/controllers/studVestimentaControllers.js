const studVestimentaService = require("../services/studVestimentaServices.js");
const httpError = require("../helpers/httpMessages.js");

const registrarStudVestimenta = async (req, res) => {
    const { 
        fkVestimenta,
        fkStud,
     } = req.body;

    if (!fkVestimenta || !fkStud)
        return (httpError.faltaInformacion(res));

    if (isNaN(fkVestimenta) || isNaN(fkStud))
        return(res.status(422).send({ status:"FAILED", data: "Uno de los campos que espera valores numericos es invalido." }));

    const nuevostudVestimenta = {
        fkVestimenta,
        fkStud,
    };

    try {
        await studVestimentaService.registrarStudVestimenta(nuevostudVestimenta);
        res.status(200).send({ status: "OK", data: `Se ha registrado la vestimenta del stud de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarStudVestimenta = async (req, res) => {
    res.send("Estamos en actualizar studVestimenta");

};

const borrarStudVestimenta = async (req, res) => {
    const {
        params: { studVestimentaId },
    } = req;

    try {
        if (!studVestimentaId)
            return(httpError.faltaInformacion(res));

        if (isNaN(studVestimentaId) || studVestimentaId === ' ')
            return(httpError.idInvalido(res, ":studVestimentaId"));

        await studVestimentaService.borrarStudVestimenta(studVestimentaId);
        res.status(200).send({ status: "OK", data: `El color de stud con el id '${studVestimentaId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    registrarStudVestimenta,
    actualizarStudVestimenta,
    borrarStudVestimenta,
};