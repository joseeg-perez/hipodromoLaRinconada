const gacetaService = require("../services/gacetaServices.js");

const obtenerListaQuery1 = async (req, res) => {
    const {
        params: { gacetaId },
      } = req;

    try {
      const listaQuery1 = await gacetaService.obtenerListaQuery1(gacetaId);
  
      res.status(200).send({ status: "OK", data: listaQuery1 });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };

const obtenerListaQuery2 = async (req, res) => {
    const {
        params: { gacetaId },
      } = req;

    try {
      const listaQuery2 = await gacetaService.obtenerListaQuery2(gacetaId);
  
      res.status(200).send({ status: "OK", data: listaQuery2 });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const obtenerListaQuery3 = async (req, res) => {
    const {
        params: { gacetaId },
      } = req;

    try {
      const listaQuery2 = await gacetaService.obtenerListaQuery3(gacetaId);
  
      res.status(200).send({ status: "OK", data: listaQuery2 });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const obtenerListaQuery4 = async (req, res) => {
    const {
        params: { gacetaId },
      } = req;

    try {
      const listaQuery2 = await gacetaService.obtenerListaQuery4(gacetaId);
  
      res.status(200).send({ status: "OK", data: listaQuery2 });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const obtenerListaQuery5 = async (req, res) => {
    const {
        params: { gacetaId },
      } = req;

    try {
      const listaQuery2 = await gacetaService.obtenerListaQuery5(gacetaId);
  
      res.status(200).send({ status: "OK", data: listaQuery2 });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const obtenerListaQuery6 = async (req, res) => {
    const {
        params: { gacetaId },
      } = req;

    try {
      const listaQuery2 = await gacetaService.obtenerListaQuery6(gacetaId);
  
      res.status(200).send({ status: "OK", data: listaQuery2 });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const obtenerListaQuery7 = async (req, res) => {
    const {
        params: { gacetaId },
      } = req;

    try {
      const listaQuery2 = await gacetaService.obtenerListaQuery7(gacetaId);
  
      res.status(200).send({ status: "OK", data: listaQuery2 });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const obtenerListaQuery8 = async (req, res) => {
    const {
        params: { gacetaId },
      } = req;

    try {
      const listaQuery2 = await gacetaService.obtenerListaQuery8(gacetaId);
  
      res.status(200).send({ status: "OK", data: listaQuery2 });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

  module.exports = {
    obtenerListaQuery1,
    obtenerListaQuery2,
    obtenerListaQuery3,
    obtenerListaQuery4,
    obtenerListaQuery5,
    obtenerListaQuery6,
    obtenerListaQuery7,
    obtenerListaQuery8,
  }