const Stud = require("../database/stud.js");
const { registrarPropietarioStud } = require("./propietarioStudServices.js");
const { registrarStudColor } = require("./studColorServices.js");
const { registrarStudVestimenta, buscarStudVestimentaId } = require("./studVestimentaServices.js");
const { registrarColorStudVestimenta } = require("./colorStudVestimentaServices.js");
const { actualizarPropietarioStud } = require("./propietarioStudServices.js");

const obtenerListaDeStuds = async () => {
  try {
    const listaStuds = await Stud.obtenerListaDeStuds();

    return listaStuds;
  } catch (error) {
    throw error;
  }
};

const obtenerStudIndividual = async (studId) => {
  try {
    const stud = await Stud.obtenerStudIndividual(studId);

    return stud;
  } catch (error) {
    throw error;
  }
};

const obtenerPropietarioDeStud = async (studId) => {
  try {
    const stud = await Stud.obtenerPropietarioDeStud(studId);

    return stud;
  } catch (error) {
    throw error;
  }
};

const obtenerPropietarioDeStudDistintos = async (studId) => {
  try {
    const stud = await Stud.obtenerPropietarioDeStudDistintos(studId);

    return stud;
  } catch (error) {
    throw error;
  }
};

const obtenerVestimentaStud = async (studId) => {
  try {
    const stud = await Stud.obtenerVestimentaStud(studId);

    return stud;
  } catch (error) {
    throw error;
  }
};

const obtenerCaballoStud = async (studId) => {
  try {
    const stud = await Stud.obtenerCaballoStud(studId);

    return stud;
  } catch (error) {
    throw error;
  }
};

const obtenerPosibleCaballoStud = async (studId) => {
  try {
    const stud = await Stud.obtenerPosibleCaballoStud(studId);

    return stud;
  } catch (error) {
    throw error;
  }
};

const cambiarPorcentajes = async (cambios) => {

    try {
        const propietarioPost = cambios.UltimosPropietarios.pop();//Se saca el ultimo de la lista ya que es el que se va a registrar
        const nuevoPropietarioStud = {
        porcentajePropiedad: propietarioPost.porcentaje,
        fechaInicioPropiedad: null,
        fechaFinPropiedad: null,
        fkStud: cambios.fkStud,
        fkPropietario: propietarioPost.idpropietario,
    }
        await registrarPropietarioStud(nuevoPropietarioStud);

        const propietariosPatch = cambios.UltimosPropietarios;//lista de propietarios que se van a actualizar
        for (let i = 0; i < propietariosPatch.length; i++) {
            const propietarioActualizado = { //Propietario al cual se le modifican los porcentajes de propiedad
                porcentajePropiedad: propietariosPatch[i].porcentaje,
                fechaInicioPropiedad: propietariosPatch[i].fecha_inicio,
                fechaFinPropiedad: null,
                fkStud: cambios.fkStud,
                fkPropietario: propietariosPatch[i].idpropietario,
                propietarioStudId: propietariosPatch[i].propietariostudid,
            }
            await actualizarPropietarioStud(propietarioActualizado.propietarioStudId, propietarioActualizado); 
        }
    } catch (error) {
        throw(error); 
    }
};

const agregarVestimentas = async (cambios) => {
    try {
        const listaVestimentas = cambios.vestimentas;
        for (let i = 0; i < listaVestimentas.length; i++) {
            const nuevaStudVestimenta = {
                fkVestimenta: listaVestimentas[i].fkVestimenta,
                fkStud: listaVestimentas[i].fkStud,
            }
            await registrarStudVestimenta(nuevaStudVestimenta);
        }
    } catch (error) {
        throw(error);
    }
};

const registrarStud = async (nuevoStud) => {
  try {
    const studCreado = await Stud.registrarStud(nuevoStud);
    const idStudCreado = await Stud.obtenerIdStudNueva(nuevoStud);

    const propietarioStud = {
      porcentajePropiedad: 100,
      fkStud: idStudCreado,
      fkPropietario: nuevoStud.propietarioStud,
    };

    const studColor1 = {
      fkColor: nuevoStud.color1,
      fkStud: idStudCreado,
    };

    const studColor2 = {
      fkColor: nuevoStud.color2,
      fkStud: idStudCreado,
    };

    await registrarPropietarioStud(propietarioStud);
    await registrarStudColor(studColor1); //Registro del primer color del stud
    await registrarStudColor(studColor2); //Registro del segundo color del stud

    const listaVestimentas = nuevoStud.vestimentas;
    for (let i = 0; i < listaVestimentas.length; i++) {
      const studVestimenta = {
        fkVestimenta: listaVestimentas[i].codigo,
        fkStud: idStudCreado,
      };
      await registrarStudVestimenta(studVestimenta);
    }
    const array = await buscarStudVestimentaId();

    //Saco los IDs de las 'n' stud vestimentas creadas
    const ultimasStudVestimentas = array.slice(-listaVestimentas.length);

    //Mantiene el orden en el ciclo
    const contadorVes = ultimasStudVestimentas.length;

    for (let i = 0; i < contadorVes; i++) {
      const actual = ultimasStudVestimentas.shift(); //Saco el id del stud vestimenta por delante
      const colorStudVestimenta = {
        fkStudVestimenta: actual.codigo_sv,
        fkColor: nuevoStud.vestimentas[i].colorV,
      };
      await registrarColorStudVestimenta(colorStudVestimenta);
    }

    return studCreado;
  } catch (error) {
    throw error;
  }
};

const actualizarStud = async (studId, cambios) => {
  try {
    const studActualizado = await Stud.actualizarStud(studId, cambios);

    return studActualizado;
  } catch (error) {
    throw error;
  }
};

const borrarStud = async (studId) => {
  try {
    await Stud.borrarStud(studId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
    obtenerListaDeStuds,
    obtenerStudIndividual,
    obtenerPropietarioDeStud,
    obtenerPropietarioDeStudDistintos,
    obtenerVestimentaStud,
    obtenerCaballoStud,
    obtenerPosibleCaballoStud,
    cambiarPorcentajes,
    agregarVestimentas,
    registrarStud,
    actualizarStud,
    borrarStud,
};
