const Ejemplar = require("../database/ejemplar.js");
const { registrarEjemplarPropietario } = require("./ejemplarPropietarioServices.js");
const {registrarPuestoCaballo} = require("./puestoCaballoServices.js")

const obtenerListaDeEjemplares = async () => {
  try {
    const listaEjemplares = await Ejemplar.obtenerListaDeEjemplares();

    return listaEjemplares;
  } catch (error) {
    throw error;
  }
};

const obtenerEjemplarIndividual = async (ejemplarId) => {
  try {
    const ejemplar = await Ejemplar.obtenerEjemplarIndividual(ejemplarId);

    return ejemplar;
  } catch (error) {
    throw error;
  }
};

const obtenerPropietarioDelEjemplarIndividual = async (nuevoEjemplar) => {
  try {
    const ejemplar = await Ejemplar.obtenerPropietarioDelEjemplarIndividual(
      nuevoEjemplar
    );

    return ejemplar;
  } catch (error) {
    throw error;
  }
};

const obtenerNoPropietarioDelEjemplarIndividual = async (nuevoEjemplar) => {
  try {
    const ejemplar = await Ejemplar.obtenerNoPropietarioDelEjemplarIndividual(
      nuevoEjemplar
    );

    return ejemplar;
  } catch (error) {
    throw error;
  }
};

const obtenerPosibleStudDelEjemplarIndividual = async (nuevoEjemplar) => {
  try {
    const ejemplar = await Ejemplar.obtenerPosibleStudDelEjemplarIndividual(
      nuevoEjemplar
    );

    return ejemplar;
  } catch (error) {
    throw error;
  }
};

const registrarEjemplar = async (nuevoEjemplar) => {
  try {
    const ejemplar = await Ejemplar.registrarEjemplar(nuevoEjemplar);
    const idEjemplarCreado = (await Ejemplar.selectStarEjemplar()).pop().codigo_ejemplar;

    const nuevoPuestoCaballo = {
      fk_ejemplar: idEjemplarCreado,
      fk_puesto: nuevoEjemplar.fk_puesto
    }
    console.log(nuevoEjemplar, 'EN EJEMPLAR SERVICE')
    console.log(nuevoPuestoCaballo)
    await registrarPuestoCaballo(nuevoPuestoCaballo)

    const nuevoEjemplarPropietario = {
      porcentajePropiedad: 100,
      fechaFinPropiedad: null,
      fkEjemplar: idEjemplarCreado,
      fkPropStud: nuevoEjemplar.fkPropietario
    }
    await registrarEjemplarPropietario(nuevoEjemplarPropietario);

    return ejemplar;
  } catch (error) {
    throw error;
  }
};

const studYEntrenadorEjemplar = async (fkEjmplar) => {
    try {
        const studEntrenador = await Ejemplar.studYEntrenadorEjemplar(fkEjmplar);
        
        return(studEntrenador);
    } catch (error) {
        throw(error);
    }
};

const actualizarEjemplar = async (ejemplarId, cambios) => {
  try {
    const ejemplarActualizado = await Ejemplar.actualizarEjemplar(
      ejemplarId,
      cambios
    );

    return ejemplarActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarEjemplar = async (ejemplarId) => {
  try {
    await Ejemplar.borrarEjemplar(ejemplarId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
    obtenerListaDeEjemplares,
    obtenerEjemplarIndividual,
    obtenerPropietarioDelEjemplarIndividual,
    obtenerNoPropietarioDelEjemplarIndividual,
    obtenerPosibleStudDelEjemplarIndividual,
    registrarEjemplar,
    studYEntrenadorEjemplar,
    actualizarEjemplar,
    borrarEjemplar,
};
