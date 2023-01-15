const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeTarjetaDebito = async () => {
    const query = {
        text: "SELECT * FROM metodo_pago_td",
      };
    
      try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0) httpError.noRegistrado("ningun tipo de tarjeta de debito");
    
        dbConnection.end;
        return rows;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

const obtenerTarjetaDebitoIndividual = async (tarjetaDebitoId) => {
    const query = {
        text: "SELECT * FROM metodo_pago_td WHERE codigo_metodo=$1",
        values: [tarjetaDebitoId],
      };
    
      try {
        const { rows } = await dbConnection.query(query);
        if (rows.length === 0) httpError.idNoEncontrado("La tarjeta de debito", tarjetaDebitoId);
    
        dbConnection.end;
        return rows;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

const registrarTarjetaDebito = async (nuevaTarjetaDebito) => {
    const { 
        fechaVencimiento,
        tipoCuenta,
        numeroTarjeta,
        fkBanco,
     } = nuevaTarjetaDebito;

    const text = `INSERT INTO metodo_pago_td(
        fecha_vencimiento,
        tipo_cuenta,
        numero_tarjeta,
        fk_banco) VALUES($1, $2, $3, $4)`;
        
    const values = [
        fechaVencimiento,
        tipoCuenta,
        numeroTarjeta,
        fkBanco
    ];

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La tarjeta de debito ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarTarjetaDebito = async (tarjetaDebitoId, cambios) => {
    const { 
        fechaVencimiento,
        tipoCuenta,
        numeroTarjeta,
        fkBanco } = cambios;

  const query = {
    text: `UPDATE metodo_pago_td
            SET fecha_vencimiento=$1, 
            tipo_cuenta=$2,
            numero_tarjeta=$3,
            fk_banco=$4
            WHERE codigo_metodo=$5;`,
    values: [fechaVencimiento, tipoCuenta, numeroTarjeta, fkBanco, tarjetaDebitoId],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("La tarjeta de debito", tarjetaDebitoId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay una tarjeta de debito con el codigo '${tarjetaDebitoId}' registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }  
};

const borrarTarjetaDebito = async (tarjetaDebitoId) => {
    const query = {
        text: "DELETE FROM metodo_pago_td WHERE codigo_metodo=$1",
        values: [tarjetaDebitoId],
      };
    
      try {
        const { rowCount } = await dbConnection.query(query);
        if (rowCount === 0) httpError.idNoEncontrado("La tarjeta de debito ", tarjetaDebitoId);
    
        dbConnection.end;
        return;
      } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
      }
};

module.exports = {
  obtenerListaDeTarjetaDebito,
  obtenerTarjetaDebitoIndividual,
  registrarTarjetaDebito,
  actualizarTarjetaDebito,
  borrarTarjetaDebito,
};
