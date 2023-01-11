const Participacion = require("../database/participacion.js");
const { registrarParticipacionImplemento } = require("./participacionImplementoServices.js");
const { registrarParticipacionMedicamento } = require("./participacionMedicamentoServices.js");
const { studYEntrenadorEjemplar } = require("./ejemplarServices.js");

const obtenerListaDeParticipaciones = async () => {
    try {
        const listaParticipaciones = await Participacion.obtenerListaDeParticipaciones();

        return(listaParticipaciones);
    } catch (error) {
        throw(error);
    }
};

const obtenerParticipacionIndividual = async (participacionId) => {
    try {
        const participacion = await Participacion.obtenerParticipacionIndividual(participacionId);

        return(participacion);
    } catch (error) {
        throw(error);
    }
};

const registrarParticipacion = async (nuevaParticipacion) => {
    try {
        const studYEntrenador = await studYEntrenadorEjemplar(nuevaParticipacion.fkEjemplar);

        const participacion = {
            gualdrapa: nuevaParticipacion.gualdrapa,
            puestoPista: nuevaParticipacion.puestoPista,
            pesoCaballo: nuevaParticipacion.pesoCaballo,
            fkEjemplar: nuevaParticipacion.fkEjemplar,
            fkCarrera: nuevaParticipacion.fkCarrera,
            fkJinete: nuevaParticipacion.fkJinete,
            fkEntrenador: studYEntrenador[0].fk_entrenador,
            fkStud: studYEntrenador[0].fk_stud,
        }
        

        const participacionCreada = await Participacion.registrarParticipacion(participacion);
        const idParticipacionCreada = (await Participacion.obtenerListaDeParticipaciones()).pop().codigo_participacion;
        const listaImplementos = nuevaParticipacion.implementoUsados;
        const listaMedicamentos = nuevaParticipacion.medicamentoUsados;

        for (let i = 0; i < listaImplementos.length; i++) {
            const nuevoImplemento = {
                fkImplemento: listaImplementos[i],
                fkParticipacion: idParticipacionCreada,
            }
            await registrarParticipacionImplemento(nuevoImplemento);
        }

        for (let i = 0; i < listaMedicamentos.length; i++) {
            const nuevoMedicamento = {
                fkMedicamento: listaMedicamentos[i],
                fkParticipacion: idParticipacionCreada,
            }
            await registrarParticipacionMedicamento(nuevoMedicamento);
        }
        
        return(participacionCreada);
    } catch (error) {
        throw(error);
    }
};

const actualizarParticipacion = async (participacionId, cambios) => {
    try {
        await Participacion.actualizarParticipacion(participacionId, cambios);
        
        return;
    } catch (error) {
        throw(error);
    }
};

const borrarParticipacion = async (participacionId) => {
    try {
        await Participacion.borrarParticipacion(participacionId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeParticipaciones,
    obtenerParticipacionIndividual,
    registrarParticipacion,
    actualizarParticipacion,
    borrarParticipacion,
};