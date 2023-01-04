const colorStudVestimentaService = require("../services/colorStudVestimentaServices.js");
const httpError = require("../helpers/httpMessages.js");

const registrarColorStudVestimenta = async (req, res) => {
    const { 
        fkStudVestimenta,
        fkColor,
     } = req.body;

    if (!fkColor || !fkStudVestimenta)
        return (httpError.faltaInformacion(res));

    if (isNaN(fkStudVestimenta) || isNaN(fkStudVestimenta))
        return(res.status(422).send({ status:"FAILED", data: "Uno de los campos que espera valores numericos es invalido." }));

    const nuevoColorStudVestimenta = {
        fkStudVestimenta,
        fkColor,
    };

    try {
        await colorStudVestimentaService.registrarColorStudVestimenta(nuevoColorStudVestimenta);
        res.status(200).send({ status: "OK", data: `Se ha registrado el nuevo color para la vestimenta del stud de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarColorStudVestimenta = async (req, res) => {
    res.send("Estamos en actualizar colorStudVestimenta");

};

const borrarColorStudVestimenta = async (req, res) => {
    const {
        params: { colorStudVestimentaId },
    } = req;

    try {
        if (!colorStudVestimentaId)
            return(httpError.faltaInformacion(res));

        if (isNaN(colorStudVestimentaId) || colorStudVestimentaId === ' ')
            return(httpError.idInvalido(res, ":colorStudVestimentaId"));

        await colorStudVestimentaService.borrarColorStudVestimenta(colorStudVestimentaId);
        res.status(200).send({ status: "OK", data: `El color de la vestimenta del stud con el id '${colorStudVestimentaId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};


module.exports = {
    registrarColorStudVestimenta,
    actualizarColorStudVestimenta,
    borrarColorStudVestimenta,
};