const propietarioStudService = require("../services/propietarioStudServices.js");
const httpError = require("../helpers/httpMessages.js");

const registrarPropietarioStud = async (req, res) => {
    const { 
        porcentajePropiedad,
        fechaInicioPropiedad,
        fechaFinPropiedad,
        fkStud,
        fkPropietario,
     } = req.body;

    if (!porcentajePropiedad || !fkStud || !fkPropietario)
        return (httpError.faltaInformacion(res));

    if (isNaN(porcentajePropiedad) || 
        isNaN(fkStud) ||    
        isNaN(fkPropietario))
        return(res.status(422).send({ status:"FAILED", data: "Uno de los campos que espera valores numericos es invalido." }));

    if ((porcentajePropiedad <= -1) || (porcentajePropiedad >= 101))
        return(res.status(422).send({ status:"FAILED", data: "Porcentaje de propiedad invalido." }))

    const nuevopropietarioStud = {
        porcentajePropiedad,
        fechaInicioPropiedad,
        fechaFinPropiedad,
        fkStud,
        fkPropietario,
    };

    try {
        await propietarioStudService.registrarPropietarioStud(nuevopropietarioStud);
        res.status(200).send({ status: "OK", data: `Se ha registrado el propietario del stud de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarPropietarioStud = async (req, res) => {
    res.send("Estamos en actualizar propietarioStud");

};

const borrarPropietarioStud = async (req, res) => {
    const {
        params: { propietarioStudId },
    } = req;

    try {
        if (!propietarioStudId)
            return(httpError.faltaInformacion(res));

        if (isNaN(propietarioStudId) || propietarioStudId === ' ')
            return(httpError.idInvalido(res, ":propietarioStudId"));

        await propietarioStudService.borrarPropietarioStud(propietarioStudId);
        res.status(200).send({ status: "OK", data: `El propietario de stud con el id '${propietarioStudId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};


module.exports = {
    registrarPropietarioStud,
    actualizarPropietarioStud,
    borrarPropietarioStud,
};