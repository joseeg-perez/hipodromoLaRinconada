const Stud = require("../database/stud.js");
const { registrarPropietarioStud } = require("./propietarioStudServices.js");
const { registrarStudColor } = require("./studColorServices.js");
const { registrarStudVestimenta, buscarStudVestimentaId } = require("./studVestimentaServices.js");
const { registrarColorStudVestimenta } = require("./colorStudVestimentaServices.js");

const obtenerListaDeStuds = async () => {
    try {
        const listaStuds = await Stud.obtenerListaDeStuds();

        return(listaStuds);
    } catch (error) {
        throw(error);
    }
};  

const obtenerStudIndividual = async (studId) => {
    try {
        const stud = await Stud.obtenerStudIndividual(studId);

        return(stud);
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
        await registrarStudColor(studColor1);//Registro del primer color del stud
        await registrarStudColor(studColor2);//Registro del segundo color del stud

        const listaVestimentas = nuevoStud.vestimentas;
        for (let i = 0; i < listaVestimentas.length; i++) {

            const studVestimenta = {
                fkVestimenta: listaVestimentas[i].codigo,
                fkStud: idStudCreado,
            };
             await registrarStudVestimenta(studVestimenta);
        }
        const array = await buscarStudVestimentaId()
        
        //Saco los IDs de las 'n' stud vestimentas creadas
        const ultimasStudVestimentas = array.slice(-listaVestimentas.length); 

        //Mantiene el orden en el ciclo
        const contadorVes = ultimasStudVestimentas.length;

        for (let i = 0; i < contadorVes; i++) {
            const actual = ultimasStudVestimentas.shift();//Saco el id del stud vestimenta por delante
            const colorStudVestimenta = {
                fkStudVestimenta: actual.codigo_sv,
                fkColor: nuevoStud.vestimentas[i].colorV,
            };
            await registrarColorStudVestimenta(colorStudVestimenta);
        }

        return(studCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarStud = async (studId, cambios) => {
    try {
        const studActualizado = await Stud.actualizarStud(studId, cambios);
        
        return(studActualizado);
    } catch (error) {
        throw(error);
    }
};

const borrarStud = async (studId) => {
    try {
        await Stud.borrarStud(studId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeStuds,
    obtenerStudIndividual,
    registrarStud,
    actualizarStud,
    borrarStud,
};