const dbConnection = require("../database/dbConfig.js");


const obtenerUltimoId  = async (nombreId, nombreTabla) => {
    const query = {
      text: `SELECT MAX(${nombreId}) FROM ${nombreTabla}`,
    }
  
    try {
      const { rows } = await dbConnection.query(query);
      const maximo = JSON.stringify(rows[0].max)
  
      dbConnection.end;
      return (maximo);
  } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { obtenerUltimoId };