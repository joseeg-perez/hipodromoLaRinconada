const { Result } = require("express-validator");
const Resultado = require("../database/resultado.js");

const obtenerListaDeResultados = async () => {
  try {
    const listaResultados = await Resultado.obtenerListaDeResultados();

    return listaResultados;
  } catch (error) {
    throw error;
  }
};

const obtenerResultadoIndividual = async (resultadoId) => {
  try {
    const resultado = await Resultado.obtenerResultadoIndividual(resultadoId);

    return resultado;
  } catch (error) {
    throw error;
  }
};

const registrarResultado = async (nuevoResultado) => {
  try {
    const listaResultados = nuevoResultado.resultados;

    for (let i = 0; i < listaResultados.length; i++) {
      const codigoParticipacion = listaResultados[i].fkParticipacion;
      await Resultado.registrarResultado(listaResultados[i]);
      const idResultadoCreado = (await Resultado.obtenerListaDeResultados()).pop().codigo_resultado;

      await Resultado.actualizarCodigoParticipacion(codigoParticipacion, idResultadoCreado);
    }

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarResultado = async (resultadoId, cambios) => {
  try {
    await Resultado.actualizarResultado(resultadoId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarResultado = async (resultadoId) => {
  try {
    await Resultado.borrarResultado(resultadoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeResultados,
  obtenerResultadoIndividual,
  registrarResultado,
  actualizarResultado,
  borrarResultado,
};
