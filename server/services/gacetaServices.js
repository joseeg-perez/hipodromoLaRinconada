const Query = require("../database/gaceta.js");

const obtenerListaQuery1 = async (gacetaId) => {
  try {
    const listaQuery1 = await Query.obtenerListaQuery1(gacetaId);

    return listaQuery1;
  } catch (error) {
    throw error;
  }
};

const obtenerListaQuery2 = async (gacetaId) => {
    try {
      const listaQuery1 = await Query.obtenerListaQuery2(gacetaId);
  
      return listaQuery1;
    } catch (error) {
      throw error;
    }
  };

const obtenerListaQuery3 = async (gacetaId) => {
    try {
      const listaQuery1 = await Query.obtenerListaQuery3(gacetaId);
  
      return listaQuery1;
    } catch (error) {
      throw error;
    }
};

const obtenerListaQuery4 = async (gacetaId) => {
    try {
      const listaQuery1 = await Query.obtenerListaQuery4(gacetaId);
  
      return listaQuery1;
    } catch (error) {
      throw error;
    }
};

const obtenerListaQuery5 = async (gacetaId) => {
    try {
      const listaQuery1 = await Query.obtenerListaQuery5(gacetaId);
  
      return listaQuery1;
    } catch (error) {
      throw error;
    }
};

const obtenerListaQuery6 = async (gacetaId) => {
    try {
      const listaQuery1 = await Query.obtenerListaQuery6(gacetaId);
  
      return listaQuery1;
    } catch (error) {
      throw error;
    }
};

const obtenerListaQuery7 = async (gacetaId) => {
    try {
      const listaQuery1 = await Query.obtenerListaQuery7(gacetaId);
  
      return listaQuery1;
    } catch (error) {
      throw error;
    }
};

const obtenerListaQuery8 = async (gacetaId) => {
    try {
      const listaQuery1 = await Query.obtenerListaQuery8(gacetaId);
  
      return listaQuery1;
    } catch (error) {
      throw error;
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
};
