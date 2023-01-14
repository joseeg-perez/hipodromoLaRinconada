const participacionService = require("../services/participacionServices.js");

const obtenerListaDeParticipaciones = async (req, res) => {
  try {
    const listaDeParticipaciones =
      await participacionService.obtenerListaDeParticipaciones();

    res.status(200).send({ status: "OK", data: listaDeParticipaciones });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerListaDeJinetesDisponibles = async (req, res) => {
  const {
    params: { participacionId },
  } = req;

  try {
    const listaDeJinetes = await participacionService.obtenerListaDeJinetesDisponibles(participacionId);

    res.status(200).send({ status: "OK", data: listaDeJinetes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerListaDeEjemplaresDisponibles = async (req, res) => {
  const  {
    body
  } = req;

  try {
    const listaDeEjemplares = await participacionService.obtenerListaDeEjemplaresDisponibles(body);

    res.status(200).send({ status: "OK", data: listaDeEjemplares });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerParticipacionParaRetiro = async (req, res) => {
  const {
    params: { participacionId },
  } = req;

  try {
    const listaDeEjemplares = await participacionService.obtenerParticipacionParaRetiro(participacionId);

    res.status(200).send({ status: "OK", data: listaDeEjemplares });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerSexoCarrera = async (req, res) => {
  const {
    params: { participacionId },
  } = req;

  try {
    const listaDeEjemplares = await participacionService.obtenerSexoCarrera(participacionId);

    res.status(200).send({ status: "OK", data: listaDeEjemplares });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerPuestosOcupados = async (req, res) => {
  const {
    params: { participacionId },
  } = req;

  try {
    const listaDePuestosOcupados = await participacionService.obtenerPuestosOcupados(participacionId);

    res.status(200).send({ status: "OK", data: listaDePuestosOcupados });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const cantidadEjemplaresPorParticipacion = async (req, res) => {
  const {
    params: { participacionId },
  } = req;

  try {
    const listaDeEjemplaresPorParticipacion = await participacionService.cantidadEjemplaresPorParticipacion(participacionId);

    res.status(200).send({ status: "OK", data: listaDeEjemplaresPorParticipacion });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const participantesInscritos = async (req, res) => {
  const {
    params: { participacionId },
  } = req;
  
  try {
    const listaDeEjemplaresPorParticipacion = await participacionService.participantesInscritos(participacionId);

    res.status(200).send({ status: "OK", data: listaDeEjemplaresPorParticipacion });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerParticipacionIndividual = async (req, res) => {
  const {
    params: { participacionId },
  } = req;

  try {
    const participacion =
      await participacionService.obtenerParticipacionIndividual(
        participacionId
      );
    res.status(200).send({ status: "OK", data: participacion });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const obtenerParticipacionesEnCarrera = async (req, res) => {
  const {
    params: { participacionId },
  } = req;

  try {
    const participacionEnCarrera = await participacionService.obtenerParticipacionesEnCarrera(participacionId);
    res.status(200).send({ status: "OK", data: participacionEnCarrera });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const registrarParticipacion = async (req, res) => {
    const { 
        gualdrapa,
        puestoPista,
        pesoCaballo,
        pesoJinete,
        fkEjemplar,
        fkCarrera,
        fkJinete,
        implementoUsados,
        medicamentoUsados,
    } = req.body;

    const nuevaParticipacion = {
        gualdrapa,
        puestoPista,
        pesoCaballo,
        pesoJinete,
        fkEjemplar,
        fkCarrera,
        fkJinete,
        implementoUsados,
        medicamentoUsados,
    };
   

  try {
    const participacionCreada =
      await participacionService.registrarParticipacion(nuevaParticipacion);
    res
      .status(200)
      .send({
        status: "OK",
        data: `Se ha registrado la participacion en el puesto '${participacionCreada}' de forma satisfactoria.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const actualizarParticipacion = async (req, res) => {
  const {
    body,
    params: { participacionId },
  } = req;

  try {
    await participacionService.actualizarParticipacion(participacionId, body);
    res.send({
      status: "OK",
      data: `Se ha actualizado la informacion de la participacion de forma satisfactoria.`,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const borrarParticipacion = async (req, res) => {
  const {
    params: { participacionId },
  } = req;

  try {
    await participacionService.borrarParticipacion(participacionId);
    res
      .status(200)
      .send({
        status: "OK",
        data: `El participacion con el id '${participacionId}' se ha eliminado con exito.`,
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  obtenerListaDeParticipaciones,
  obtenerListaDeJinetesDisponibles,
  obtenerParticipacionIndividual,
  obtenerParticipacionesEnCarrera,
  obtenerListaDeEjemplaresDisponibles,
  obtenerParticipacionParaRetiro,
  participantesInscritos,
  cantidadEjemplaresPorParticipacion,
  obtenerSexoCarrera,
  obtenerPuestosOcupados,
  registrarParticipacion,
  actualizarParticipacion,
  borrarParticipacion,
};
