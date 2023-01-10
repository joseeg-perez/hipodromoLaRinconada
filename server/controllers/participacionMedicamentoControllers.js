const participacionMedicamentoService = require("../services/participacionMedicamentoServices.js");

const obtenerListaDeParticipacionMedicamentos = async (req, res) => {
    try {
        const listaParticipacionMedicamento =  await participacionMedicamentoService.obtenerListaDeParticipacionMedicamentos();

        res.status(200).send({ status: "OK", data: listaParticipacionMedicamento });
    } catch (error) {
        res 
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error }});
    }
};

const obtenerParticipacionMedicamentoIndividual = async (req, res) => { 
    const {
        params: { participacionMedicamentoId },
    } = req;
    
    try {
        const participacionMedicamento = await participacionMedicamentoService.obtenerParticipacionMedicamentoIndividual(participacionMedicamentoId);
        res.status(200).send({ status: "OK", data: participacionMedicamento});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });       
    }
};

const registrarParticipacionMedicamento = async (req, res) => { 
    const {
        fkMedicamento,
        fkParticipacion,
     } =  req.body;

    const nuevaParticipacionMedicamento = {
        fkMedicamento,
        fkParticipacion,
    };

    try {
        await participacionMedicamentoService.registrarParticipacionMedicamento(nuevaParticipacionMedicamento);
        res.status(200).send({ status: "OK", data: `Se ha registrado el medicamento en la participacion de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const actualizarParticipacionMedicamento = async (req, res) => {
    const {
        body,
        params: { participacionMedicamentoId },
    } = req;

    try {
        await participacionMedicamentoService.actualizarParticipacionMedicamento(participacionMedicamentoId, body);
        res.send({ status: "OK", data: `Se ha actualizado la informacion del medicamento asociada a una participacion de forma satisfactoria.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const borrarParticipacionMedicamento = async (req, res) => {
    const {
        params: { participacionMedicamentoId },
    } = req;

    try {
        await participacionMedicamentoService.borrarParticipacionMedicamento(participacionMedicamentoId);
        res.status(200).send({ status: "OK", data: `El medicamento en la participacion con el id '${participacionMedicamentoId}' se ha eliminado con exito.` });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error} });
    }
};

module.exports = {
    obtenerListaDeParticipacionMedicamentos,
    obtenerParticipacionMedicamentoIndividual,
    registrarParticipacionMedicamento,
    actualizarParticipacionMedicamento,
    borrarParticipacionMedicamento,
};
