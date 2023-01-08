const Veterinario = require("../database/Veterinario.js");
const {
  registrarVeterinarioCaballeriza,
} = require("./veterinarioCaballerizaServices.js");

const obtenerListaDeVeterinarios = async () => {
  try {
    const listaVeterinarios = await Veterinario.obtenerListaDeVeterinarios();

    return listaVeterinarios;
  } catch (error) {
    throw error;
  }
};

const obtenerListaDeCaballerizasVacias = async () => {
  try {
    const listaCaballerizas =
      await Veterinario.obtenerListaDeCaballerizasVacias();

    return listaCaballerizas;
  } catch (error) {
    throw error;
  }
};

const obtenerVeterinarioIndividual = async (veterinarioId) => {
  try {
    const veterinario = await Veterinario.obtenerVeterinarioIndividual(
      veterinarioId
    );

    return veterinario;
  } catch (error) {
    throw error;
  }
};

const registrarVeterinario = async (nuevoVeterinario) => {
  try {
    const veterinarioCreado = await Veterinario.registrarVeterinario(
      nuevoVeterinario
    );
    const idVeterinarioCreado = await Veterinario.obtenerIdVeterinarioNuevo(
      nuevoVeterinario
    );

    const veterinarioCaballeriza = {
      fkCaballeriza: nuevoVeterinario.fkCaballeriza,
      fkVeterinario: idVeterinarioCreado,
    };

    await registrarVeterinarioCaballeriza(veterinarioCaballeriza);

    return veterinarioCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarVeterinario = async (veterinarioId, cambios) => {
  try {
    const VeterinarioActualizada = await Veterinario.actualizarVeterinario(
      veterinarioId,
      cambios
    );

    return VeterinarioActualizada;
  } catch (error) {
    throw error;
  }
};

const borrarVeterinario = async (veterinarioId) => {
  try {
    await Veterinario.borrarVeterinario(veterinarioId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerListaDeVeterinarios,
  obtenerListaDeCaballerizasVacias,
  obtenerVeterinarioIndividual,
  registrarVeterinario,
  actualizarVeterinario,
  borrarVeterinario,
};
