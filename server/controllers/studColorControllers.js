const studColorService = require("../services/studColorServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeStudColor = async (req, res) => {
    try {
      const listaStudColor = await studColorService.obtenerListaDeStudColor();
  
      res.status(200).send({ status: "OK", data: listaStudColor });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };

const registrarStudColor = async (req, res) => {
    const { 
        fkColor,
        fkStud,
     } = req.body;

    if (!fkColor || !fkStud)
        return (httpError.faltaInformacion(res));

    if (isNaN(fkColor) || isNaN(fkStud))
        return(res.status(422).send({ status:"FAILED", data: "Uno de los campos que espera valores numericos es invalido." }));

    const nuevostudColor = {
        fkColor,
        fkStud,
    };

    try {
        await studColorService.registrarStudColor(nuevostudColor);
        res.status(200).send({ status: "OK", data: `Se ha registrado el color del stud de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarStudColor = async (req, res) => {
    res.send("Estamos en actualizar studColor");

};

const borrarStudColor = async (req, res) => {
    const {
        params: { studColorId },
    } = req;

    try {
        if (!studColorId)
            return(httpError.faltaInformacion(res));

        if (isNaN(studColorId) || studColorId === ' ')
            return(httpError.idInvalido(res, ":studColorId"));

        await studColorService.borrarStudColor(studColorId);
        res.status(200).send({ status: "OK", data: `El color de stud con el id '${studColorId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};


module.exports = {
    obtenerListaDeStudColor,
    registrarStudColor,
    actualizarStudColor,
    borrarStudColor,
};