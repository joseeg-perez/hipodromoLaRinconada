const ParticipacionMedicamento = require("../database/participacionMedicamento.js");

const obtenerListaDeParticipacionMedicamentos = async () => {
  try {
    const listaParticipacionMedicamentos =
      await ParticipacionMedicamento.obtenerListaDeParticipacionMedicamentos();

    return listaParticipacionMedicamentos;
  } catch (error) {
    throw error;
  }
};

const obtenerParticipacionMedicamentoIndividual = async (
  participacionMedicamentoId
) => {
  try {
    const participacionMedicamento =
      await ParticipacionMedicamento.obtenerParticipacionMedicamentoIndividual(
        participacionMedicamentoId
      );

    return participacionMedicamento;
  } catch (error) {
    throw error;
  }
};

const registrarParticipacionMedicamento = async (
  nuevaParticipacionMedicamento
) => {
  try {
    await ParticipacionMedicamento.registrarParticipacionMedicamento(
      nuevaParticipacionMedicamento
    );

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarParticipacionMedicamento = async (
  participacionMedicamentoId,
  cambios
) => {
  try {
    const participacionMedicamentoActualizado =
      await ParticipacionMedicamento.actualizarParticipacionMedicamento(
        participacionMedicamentoId,
        cambios
      );

    return participacionMedicamentoActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarParticipacionMedicamento = async (participacionMedicamentoId) => {
  try {
    await ParticipacionMedicamento.borrarParticipacionMedicamento(
      participacionMedicamentoId
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeParticipacionMedicamentos,
  obtenerParticipacionMedicamentoIndividual,
  registrarParticipacionMedicamento,
  actualizarParticipacionMedicamento,
  borrarParticipacionMedicamento,
};
