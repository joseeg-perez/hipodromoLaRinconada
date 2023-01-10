const puestoService = require("../services/puestoServices.js");

const obtenerListaDePuestos = async (req, res) => {
    try {
        const listapuestos =  await puestoService.obtenerListaDePuestos();

        res.status(200).send({ status: "OK", data: listapuestos });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerPuestoIndividual = async (req, res) => { 
    const {
        params: { puestoId },
    } = req;
    
    try {
        const puesto = await puestoService.obtenerPuestoIndividual(puestoId);
        res.status(200).send({ status: "OK", data: puesto});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const actualizarPuesto = async (req, res) => {
    const {
        body,
        params: { puestoId },
    } = req;

    try {
        const puestoActualizado = await puestoService.actualizarPuesto(puestoId, body);
        res.send({ status: "OK", data: `Se ha actualizado la informacion del puesto '${puestoActualizado}' de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarPuesto = async (req, res) => {
    const {
        params: { puestoId },
    } = req;

    try {
        await puestoService.borrarPuesto(puestoId);
        res.status(200).send({ status: "OK", data: `La puesto con el id '${puestoId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDePuestos,
    obtenerPuestoIndividual,
    actualizarPuesto,
    borrarPuesto,
};
