const rgoJineteService = require("../services/rgoJineteServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeRgoJinetes = async (req, res) => {
    try {
        const listaRgoJinetes =  await rgoJineteService.obtenerListaDeRgoJinetes();

        res.status(200).send({ status: "OK", data: listaRgoJinetes });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }    
};

const obtenerRgoJineteIndividual = async (req, res) => {
    const {
        params: { rgoJineteId },
    } = req;
    
    try {
        if (!rgoJineteId)
            return(httpError.idVacio(res, ":rgoJineteId"));

        if (isNaN(rgoJineteId) || rgoJineteId === ' ')
            return(httpError.idInvalido(res, ":rgoJineteId"));

        const rgoJinete = await rgoJineteService.obtenerRgoJineteIndividual(rgoJineteId);
        res.status(200).send({ status: "OK", data: rgoJinete});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarRgoJinete = async (req, res) => {
    const { 
        nombreRango,
        descripcionRango,
        pesoMin,
        pesoMax,
     } =  req.body;

    if (!nombreRango || !descripcionRango || !pesoMin || !pesoMax)
        return (httpError.faltaInformacion(res));
    
    if (isNaN(pesoMin) || isNaN(pesoMax))
        return(res.status(422).send({ status:"FAILED", data: "Uno de los campos que espera valores numericos es invalido." }))
   
    const nuevoRgoJinete = {
        nombreRango: nombreRango.toLowerCase(),
        descripcionRango: descripcionRango.toLowerCase(),
        pesoMin,
        pesoMax,
    };

    try {
        const rgoJineteCreado = await rgoJineteService.registrarRgoJinete(nuevoRgoJinete)
        res.status(200).send({ status: "OK", data: `Se ha registrado el rango asociado a un jinete '${rgoJineteCreado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarRgoJinete = async (req, res) => {

};

const borrarRgoJinete = async (req, res) => {
    const {
        params: { rgoJineteId },
    } = req;

    try {
        if (!rgoJineteId)
            return(httpError.idVacio(res, "rgoJineteId"));

        if (isNaN(rgoJineteId) || rgoJineteId === ' ')
            return(httpError.idInvalido(res, ":rgoJineteId"));

        await rgoJineteService.borrarRgoJinete(rgoJineteId);
        res.status(200).send({ status: "OK", data: `El rango asociado a un jinete con el id '${rgoJineteId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeRgoJinetes,
    obtenerRgoJineteIndividual,
    registrarRgoJinete,
    actualizarRgoJinete,
    borrarRgoJinete,
};
