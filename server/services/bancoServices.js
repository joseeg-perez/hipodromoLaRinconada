const Banco = require("../database/banco.js");

const obtenerListaDeBancos = async () => {
  try {
    const listaBancos = await Banco.obtenerListaDeBancos();

    return listaBancos;
  } catch (error) {
    throw error;
  }
};

const obtenerBancoIndividual = async (bancoId) => {
  try {
    const banco = await Banco.obtenerBancoIndividual(bancoId);

    return banco;
  } catch (error) {
    throw error;
  }
};

const registrarBanco = async (nuevoBanco) => {
  try {
    await Banco.registrarBanco(nuevoBanco);

    return;
  } catch (error) {
    throw error;
  }
};

const actualizarBanco = async (bancoId, cambios) => {
  try {
    await Banco.actualizarBanco(bancoId, cambios);

    return;
  } catch (error) {
    throw error;
  }
};

const borrarBanco = async (bancoId) => {
  try {
    await Banco.borrarBanco(bancoId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeBancos,
  obtenerBancoIndividual,
  registrarBanco,
  actualizarBanco,
  borrarBanco,
};
