const Stud = require("../database/stud.js");
const { registrarPropietarioStud } = require("./propietarioStudServices.js");
const { registrarStudColor } = require("./studColorServices.js");

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

        console.log(studColor1.fkStud)
        await registrarPropietarioStud(propietarioStud);
        await registrarStudColor(studColor1);
        await registrarStudColor(studColor2);


        return(studCreado);
    } catch (error) {
        throw(error);
    }
};

const actualizarStud = async (studId, cambios) => {

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