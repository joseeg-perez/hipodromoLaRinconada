const medicamentoService = require("../services/medicamentoServices.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeMedicamentos = async (req, res) => {
  try {
    const listaMedicamentos =
      await medicamentoService.obtenerListaDeMedicamentos();

    res.status(200).send({ status: "OK", data: listaMedicamentos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerMedicamentoIndividual = async (req, res) => {
  const {
    params: { medicamentoId },
  } = req;

  try {
    const medicamento = await medicamentoService.obtenerMedicamentoIndividual(medicamentoId);
    res.status(200).send({ status: "OK", data: medicamento });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarMedicamento = async (req, res) => {
  const { nombreMedicamento, descripcionMedicamento } = req.body;

  const nuevoMedicamento = {
    nombreMedicamento: nombreMedicamento.toLowerCase(),
    descripcionMedicamento: descripcionMedicamento.toLowerCase(),
  };

  try {
    const medicamentoCreado = await medicamentoService.registrarMedicamento(nuevoMedicamento);
    res.status(200).send({
      status: "OK",
      data: `Se ha registrado el medicamento '${medicamentoCreado}' de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarMedicamento = async (req, res) => {};

const borrarMedicamento = async (req, res) => {
  const {
    params: { medicamentoId },
  } = req;

  try {
    await medicamentoService.borrarMedicamento(medicamentoId);
    res.status(200).send({ status: "OK", data: `El medicamento con el id '${medicamentoId}' se ha eliminado con exito.` });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeMedicamentos,
  obtenerMedicamentoIndividual,
  registrarMedicamento,
  actualizarMedicamento,
  borrarMedicamento,
};
