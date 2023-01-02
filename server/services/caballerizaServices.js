const Caballeriza = require("../database/Caballeriza.js");
const { registrarPuesto } = require("../database/puesto.js");

const obtenerListaDeCaballerizas = async () => {
    try {
        const listaCaballerizas = await Caballeriza.obtenerListaDeCaballerizas();

        return(listaCaballerizas);
    } catch (error) {
        throw(error);
    }
};

const obtenerCaballerizaIndividual = async (caballerizaId) => {
    try {
        const caballeriza = await Caballeriza.obtenerCaballerizaIndividual(caballerizaId);

        return(caballeriza);
    } catch (error) {
        throw(error);
    }
};

const registrarCaballeriza = async (nuevaCaballeriza) => {
    try {
        const caballerizaCreada = await Caballeriza.registrarCaballeriza(nuevaCaballeriza);
        
        //llena la tabla puestos dependiendo de la capacidad de cada caballeriza
        for (let i = 1; i <= nuevaCaballeriza.cantidadPuestos; i++) {
            const puesto = {
                numeroPuesto: i,
                fkCaballeriza: nuevaCaballeriza.codigoCaballeriza,
            };
            await registrarPuesto(puesto);
        }

        return(caballerizaCreada);
    } catch (error) {
        throw(error);
    }
};

const actualizarCaballeriza = (caballerizaId, cambios) => {
    try {
        const caballerizaActualizada = Caballeriza.actualizarCaballeriza(caballerizaId, cambios);
        
        return(caballerizaActualizada);
    } catch (error) {
        throw(error);
    }
};

const borrarCaballeriza = async (caballerizaId) => {
    try {
        await Caballeriza.borrarCaballeriza(caballerizaId);
    } catch (error) {
        throw(error);
    }
};

module.exports = {
    obtenerListaDeCaballerizas,
    obtenerCaballerizaIndividual,
    registrarCaballeriza,
    actualizarCaballeriza,
    borrarCaballeriza,
};