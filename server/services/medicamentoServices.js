const Medicamento = require("../database/medicamento.js");

const obtenerListaDeMedicamentos = async () => {
  try {
    const listaMedicamentos = await Medicamento.obtenerListaDeMedicamentos();

    return listaMedicamentos;
  } catch (error) {
    throw error;
  }
};

const obtenerMedicamentoIndividual = async (medicamentoId) => {
  try {
    const medicamento = await Medicamento.obtenerMedicamentoIndividual(
      medicamentoId
    );

    return medicamento;
  } catch (error) {
    throw error;
  }
};

const registrarMedicamento = async (nuevoMedicamento) => {
  try {
    const medicamentoCreado = await Medicamento.registrarMedicamento(
      nuevoMedicamento
    );

    return medicamentoCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarMedicamento = async (medicamentoId, cambios) => {
  try {
    const medicamentoActualizado = await Medicamento.actualizarMedicamento(
      medicamentoId,
      cambios
    );

    return medicamentoActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarMedicamento = async (medicamentoId) => {
  try {
    await Medicamento.borrarMedicamento(medicamentoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeMedicamentos,
  obtenerMedicamentoIndividual,
  registrarMedicamento,
  actualizarMedicamento,
  borrarMedicamento,
};
