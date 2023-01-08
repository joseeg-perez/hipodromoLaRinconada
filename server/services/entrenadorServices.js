const Entrenador = require("../database/entrenador.js");
const {
  registrarEntrenadorCaballeriza,
} = require("./entrenadorCaballerizaServices.js");

const obtenerListaDeEntrenadores = async () => {
  try {
    const listaEntrenadores = await Entrenador.obtenerListaDeEntrenadores();

    return listaEntrenadores;
  } catch (error) {
    throw error;
  }
};

const obtenerListaDeCaballerizasVacias = async () => {
  try {
    const listaCaballerizas =
      await Entrenador.obtenerListaDeCaballerizasVacias();

    return listaCaballerizas;
  } catch (error) {
    throw error;
  }
};

const obtenerEntrenadorIndividual = async (entrenadorId) => {
  try {
    const entrenador = await Entrenador.obtenerEntrenadorIndividual(
      entrenadorId
    );

    return entrenador;
  } catch (error) {
    throw error;
  }
};

const registrarEntrenador = async (nuevoEntrenador) => {
  try {
    const entrenadorCreado = await Entrenador.registrarEntrenador(
      nuevoEntrenador
    );
    const idEntrenadorCreado = await Entrenador.obtenerIdEntrenadorNuevo(
      nuevoEntrenador
    );
    const entrenadorCaballeriza = {
      fkCaballeriza: nuevoEntrenador.fkCaballeriza,
      fkEntrenador: idEntrenadorCreado,
    };
    await registrarEntrenadorCaballeriza(entrenadorCaballeriza);

    return entrenadorCreado;
  } catch (error) {
    throw error;
  }
};

<<<<<<< HEAD
const actualizarEntrenador = async (entrenadorId, cambios) => {};
=======
const actualizarEntrenador = async (entrenadorId, cambios) => {
    try {
        const entrenadorActualizado = Entrenador.actualizarEntrenador(entrenadorId, cambios)
        
        return(entrenadorActualizado);
    } catch (error) {
        throw(error);
    }
};
>>>>>>> 1282e75b0bbf73884144a04c9e4cec0454a287d9

const borrarEntrenador = async (entrenadorId) => {
  try {
    await Entrenador.borrarEntrenador(entrenadorId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeEntrenadores,
  obtenerListaDeCaballerizasVacias,
  obtenerEntrenadorIndividual,
  registrarEntrenador,
  actualizarEntrenador,
  borrarEntrenador,
};
