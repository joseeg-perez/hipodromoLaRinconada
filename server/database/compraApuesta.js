const dbConnection = require("../database/dbConfig.js");
const httpError = require("../helpers/httpMessages.js");

const obtenerListaDeCompraApuesta = async () => {
  const query = {
    text: "SELECT * FROM compra_apuesta",
  };

  try {
    const { rows } = await dbConnection.query(query);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const obtenerCompraApuestaIndividual = async (compraApuestaId) => {
  const query = {
    text: "SELECT * FROM compra_apuesta WHERE codigo_compra=$1",
    values: [compraApuestaId],
  };

  try {
    const { rows } = await dbConnection.query(query);
    if (rows.length === 0)
      httpError.idNoEncontrado("El compra de Apuesta", compraApuestaId);

    dbConnection.end;
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const registrarCompraApuesta = async (nuevoCompraApuesta) => {
  const { 
    montoTotal,
    fechaCompra,
    fkUsuario,
    fkCliente,
    fkTipoApuesta,
    fkTaquilla, } = nuevoCompraApuesta;

  const text = `INSERT INTO compra_apuesta(
    monto_total,
    fecha_compra,
    fk_usuario,
    fk_cliente,
    fk_tipo_apuesta,
    fk_taquilla) VALUES($1, $2, $3, $4, $5, $6)`;

  const values = [
        montoTotal,
        fechaCompra,
        fkUsuario,
        fkCliente,
        fkTipoApuesta,
        fkTaquilla
    ];

  try {
    const { rows } = await dbConnection.query(text, values);
    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `La compra de la apuesta ya ha sido registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const actualizarCompraApuesta = async (compraApuestaId, cambios) => {
  const { 
        montoTotal,
        fechaCompra,
        fkUsuario,
        fkCliente,
        fkTipoApuesta,
        fkTaquilla,
    } = cambios;

  const query = {
    text: `UPDATE compra_apuesta
            SET monto_total=$1,
            fecha_compra=$2,
            fk_usuario=$3,
            fk_cliente=$4,
            fk_tipo_apuesta=$5,
            fk_taquilla=$6
            WHERE codigo_compra=$7;`,
    values: [
        montoTotal,
        fechaCompra,
        fkUsuario,
        fkCliente,
        fkTipoApuesta,
        fkTaquilla,
        compraApuestaId
    ],
  };
  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("La compra de la apuesta", compraApuestaId);

    dbConnection.end;
    return;
  } catch (error) {
    if (error.code === "23505") {
      throw {
        status: 409,
        message: `Ya hay un compra de apuesta con el codigo '${compraApuestaId}' registrada.`,
      };
    }
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const borrarCompraApuesta = async (compraApuestaId) => {
  const query = {
    text: "DELETE FROM compra_apuesta WHERE codigo_compra=$1",
    values: [compraApuestaId],
  };

  try {
    const { rowCount } = await dbConnection.query(query);
    if (rowCount === 0)
      httpError.idNoEncontrado("La compra dela apuesta", compraApuestaId);

    dbConnection.end;
    return;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  obtenerListaDeCompraApuesta,
  obtenerCompraApuestaIndividual,
  registrarCompraApuesta,
  actualizarCompraApuesta,
  borrarCompraApuesta,
};
