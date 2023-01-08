const Caballeriza = require("../database/Caballeriza.js");
const { registrarPuesto } = require("../database/puesto.js");

const obtenerListaDeCaballerizas = async () => {
  try {
    const listaCaballerizas = await Caballeriza.obtenerListaDeCaballerizas();

    return listaCaballerizas;
  } catch (error) {
    throw error;
  }
};

const obtenerCaballerizaIndividual = async (caballerizaId) => {
  try {
    const caballeriza = await Caballeriza.obtenerCaballerizaIndividual(
      caballerizaId
    );

    return caballeriza;
  } catch (error) {
    throw error;
  }
};

const registrarCaballeriza = async (nuevaCaballeriza) => {
  try {
    const caballerizaCreada = await Caballeriza.registrarCaballeriza(
      nuevaCaballeriza
    );
    const idCaballerizaCreada = await obtenerIdCaballerizaNueva();

    //llena la tabla puestos dependiendo de la capacidad de cada caballeriza
    for (let i = 1; i <= nuevaCaballeriza.cantidadPuestos; i++) {
      const puesto = {
        numeroPuesto: i,
        fkCaballeriza: idCaballerizaCreada,
      };
      await registrarPuesto(puesto);
    }

    return caballerizaCreada;
  } catch (error) {
    throw error;
  }
};

const actualizarCaballeriza = async (caballerizaId, cambios) => {
  try {
    const caballerizaActualizada = await Caballeriza.actualizarCaballeriza(
      caballerizaId,
      cambios
    );

    return caballerizaActualizada;
  } catch (error) {
    throw error;
  }
};

const borrarCaballeriza = async (caballerizaId) => {
  try {
    await Caballeriza.borrarCaballeriza(caballerizaId);
  } catch (error) {
    throw error;
  }
};

const obtenerIdCaballerizaNueva = async () => {
  try {
    const listaIds = await Caballeriza.obtenerIdCaballerizaNueva();
    const ultimoId = listaIds.pop().codigo_caballeriza; //Para retornar el id de la caballeriza mas reciente

    return ultimoId;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeCaballerizas,
  obtenerCaballerizaIndividual,
  registrarCaballeriza,
  actualizarCaballeriza,
  borrarCaballeriza,
  obtenerIdCaballerizaNueva,
};
