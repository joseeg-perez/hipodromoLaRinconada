const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDePagos = async () => {
  const query = {
    text: "SELECT * FROM pago",
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.noRegistrado("ningun tipo de pago");

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerPagoIndividual = async (pagoId) => {
  const query = {
    text: "SELECT * FROM pago WHERE codigo_pago=$1",
    values: [pagoId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0) httpError.idNoEncontrado("La pago", pagoId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarPago = async (nuevoPago) => {
  const { 
        montoPago,
        fkCompra,
        fkTc,
        fkTd,
        fkEfectivo,
    } = nuevoPago;

  let values = [];

  const text = `INSERT INTO pago(
    monto_pago,
    fk_compra,
    fk_tc,
    fk_td,
    fk_efectivo) VALUES($1, $2, $3, $4, $5)`;

    if (fkTc !== undefined){
      console.log("credito")
      values = [
        montoPago,
        fkCompra,
        fkTc,
        null,
        null
      ];
    }

    else if (fkTd !== undefined){
      console.log("debito")
      values = [
        montoPago,
        fkCompra,
        null,
        fkTd,
        null
      ];
    }

    else if (fkEfectivo !== undefined){
      console.log("efectivo")
      values = [
        montoPago,
        fkCompra,
        null,
        null,
        fkEfectivo
      ];
    }

  try {
    await dbConnection.query(text, values);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `El pago ya ha sido registrado.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarPago = async (pagoId, cambios) => {
  const { 
        montoPago,
        fechaPago,
        fkCompra,
        fkTd,
        fkTc,
        fkEfectivo, 
    } = cambios;

  const query = {
    text: `UPDATE pago
        SET monto_pago=$1,
        fecha_pago=$2,
        fk_compra=$3,
        fk_td=$4,
        fk_tc=$5,
        fk_efectivo=$6
        WHERE codigo_pago=$7;`,
    values: [
        montoPago,
        fechaPago,
        fkCompra,
        fkTd,
        fkTc,
        fkEfectivo,
        pagoId
    ],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El pago", pagoId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay una pago con el codigo '${pagoId}' registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarPago = async (pagoId) => {
  const query = {
    text: "DELETE FROM pago WHERE codigo_pago=$1",
    values: [pagoId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0) httpError.idNoEncontrado("El pago ", pagoId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDePagos,
  obtenerPagoIndividual,
  registrarPago,
  actualizarPago,
  borrarPago,
};
