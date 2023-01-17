const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeTarjetaCredito = async () => {
    const query = {
        text: "SELECT * FROM metodo_pago_tc",
      };
    
      try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0) httpError.noRegistrado("ningun tipo de tarjeta de credito");
    
        dbConnection.end;
        return rows;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

const obtenerTarjetaCreditoIndividual = async (tarjetaCreditoId) => {
    const query = {
        text: "SELECT * FROM metodo_pago_tc WHERE codigo_metodo=$1",
        values: [tarjetaCreditoId],
      };
    
      try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0) httpError.idNoEncontrado("La tarjeta de credito", tarjetaCreditoId);
    
        dbConnection.end;
        return rows;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

const registrarTarjetaCredito = async (nuevaTarjetaCredito) => {
    const { 
        fecha_vencimiento,
        numero_tarjeta,
        banco,
     } = nuevaTarjetaCredito;

    const text = `INSERT INTO metodo_pago_tc(
        fecha_vencimiento,
        numero_tarjeta,
        fk_banco) VALUES($1, $2, $3)`;
        
    const values = [
        fecha_vencimiento,
        numero_tarjeta,
        banco
    ];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La tarjeta de credito ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarTarjetaCredito = async (tarjetaCreditoId, cambios) => {
    const { 
        fechaVencimiento,
        numeroTarjeta,
        fkBanco, } = cambios;

  const query = {
    text: `UPDATE metodo_pago_tc
            SET fecha_vencimiento=$1, 
            numero_tarjeta=$2,
            fk_banco=$3
            WHERE codigo_metodo=$4;`,
    values: [fechaVencimiento, numeroTarjeta, fkBanco, tarjetaCreditoId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("La tarjeta de credito", tarjetaCreditoId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay una tarjeta de credito con el codigo '${tarjetaCreditoId}' registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }  
};

const borrarTarjetaCredito = async (tarjetaCreditoId) => {
    const query = {
        text: "DELETE FROM metodo_pago_tc WHERE codigo_metodo=$1",
        values: [tarjetaCreditoId],
      };
    
      try {
        const { rowCount } = await dbConnection.query(query);
        if (rowCount === 0) httpError.idNoEncontrado("La tarjeta de Credito ", tarjetaCreditoId);
    
        dbConnection.end;
        return;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
  obtenerListaDeTarjetaCredito,
  obtenerTarjetaCreditoIndividual,
  registrarTarjetaCredito,
  actualizarTarjetaCredito,
  borrarTarjetaCredito,
};
