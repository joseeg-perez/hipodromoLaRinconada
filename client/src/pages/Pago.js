import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";

const Pago = (props) => {
  const [bancos, setbancos] = useState([]);
  const [isLoading, setLoading] = useState([]);
  const [toggleMetodos, settoggleMetodos] = useState(false);
  const [metodo, setmetodo] = useState("");

  const handleData = async (event) => {
    let apuesta = props.apuesta;
    let TipoApuesta = props.TipoApuesta;
    let costo = props.costo;

    if (metodo == 2) {
      let denominacion = document.getElementById("efectivo").value;
      console.warn(apuesta, TipoApuesta, costo, denominacion);
      try {
        await axios.post(
          "http://localhost:5000/api/v1/efectivo/registrar_efectivo",
          {
            apuesta,
            TipoApuesta,
            costo,
            denominacion,
          }
        );
      } catch (error) {
        throw error;
      }
      alert("Se creo el tipo de apuesta con éxito");
    } else if (metodo == 1) {
      let numero_tarjeta = document.getElementById("numerotarjeta").value;
      let fecha_vencimiento = document.getElementById("fecha_expiracion").value;
      let banco = document.getElementById("banco").value;
      console.warn(
        apuesta,
        TipoApuesta,
        costo,
        numero_tarjeta,
        fecha_vencimiento,
        banco
      );
      try {
        await axios.post(
          "http://localhost:5000/api/v1/tarjeta_credito/registrar_tarjetaCredito",
          {
            apuesta,
            TipoApuesta,
            costo,
            numero_tarjeta,
            fecha_vencimiento,
            banco,
          }
        );
      } catch (error) {
        throw error;
      }
      alert("Se creo el tipo de apuesta con éxito");
    } else if (metodo == 0) {
      let numero_tarjeta = document.getElementById("numerotarjeta").value;
      let tipo_cuenta = document.getElementById("tipocuenta").value;
      let fecha_vencimiento = document.getElementById("fecha_expiracion").value;
      let banco = document.getElementById("banco").value;
      console.warn(
        apuesta,
        TipoApuesta,
        costo,
        tipo_cuenta,
        numero_tarjeta,
        fecha_vencimiento,
        banco
      );
      try {
        await axios.post(
          "http://localhost:5000/api/v1/tarjeta_debito/registrar_tarjetaDebito",
          {
            apuesta,
            TipoApuesta,
            costo,
            tipo_cuenta,
            numero_tarjeta,
            fecha_vencimiento,
            banco
          }
        );
      } catch (error) {
        throw error;
      }
      alert("Se creo el tipo de apuesta con éxito");
    }
  };

  const handleMetodos = (event) => {
    settoggleMetodos(true);
    setmetodo(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/bancos/listado_de_bancos")
      .then((res) => {
        console.log(res);
        setbancos(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading) return <div></div>;
  return (
    <Container>
      <Row className="d-flex justify-content-center py-5">
        <Col>
          <Card style={{ borderRadius: "15px" }} className="mx-5">
            <Card.Header>
              <h3>Pago</h3>
            </Card.Header>
            <Card.Body className="p-4">
              <Form>
                <Row>
                  <Col className="text-start">
                    <FormLabel className="text-start">Banco</FormLabel>
                    <FormSelect id="banco" disabled={metodo == 2}>
                      {bancos.data.map((banco) => (
                        <option>{banco.nombre_banco}</option>
                      ))}
                    </FormSelect>
                  </Col>
                  <Col className="text-start">
                    <FormLabel className="text-start">Método de Pago</FormLabel>
                    <FormSelect id="metodo" onChange={handleMetodos}>
                      <option value={0}>Tarjeta de Débito</option>
                      <option value={1}>Tarjeta de Crédito</option>
                      <option value={2}>Efectivo</option>
                    </FormSelect>
                  </Col>
                </Row>
                {toggleMetodos && metodo == 2 ? (
                  <div className="mt-3 mb-3 form-floating">
                    <input
                      id="efectivo"
                      type="number"
                      className="form-control"
                      placeholder="Numero de tarjeta"
                    />
                    <FormLabel>Monto cobrado</FormLabel>
                  </div>
                ) : (
                  <div>
                    <Row className="d-flex align-items-center">
                      <Col className="mt-3">
                        <div className="mb-3 form-floating">
                          <input
                            id="numerotarjeta"
                            type="number"
                            className="form-control"
                            placeholder="Numero de tarjeta"
                          />
                          <FormLabel>Número de tarjeta</FormLabel>
                        </div>
                      </Col>
                    </Row>
                    <Row className="d-flex align-items-center">
                      {toggleMetodos && metodo == 0 && (
                        <Col className="text-start">
                          <FormLabel className="text-start">
                            Tipo de cuenta
                          </FormLabel>
                          <FormSelect id="tipocuenta">
                            <option value="corriente">corriente</option>
                            <option value="ahorro">ahorro</option>
                          </FormSelect>
                        </Col>
                      )}
                    </Row>
                    <Row>
                      <Col className="mt-3 text-start">
                        <FormLabel className="text-start">
                          Fecha de expiracion
                        </FormLabel>
                        <input
                          label="Expiration"
                          className="form-control"
                          id="fecha_expiracion"
                          type="fecha_expiracion"
                          placeholder="MM/YYYY"
                          maxLength={7}
                        />
                      </Col>
                    </Row>
                  </div>
                )}
                <Row>
                  <Col size="3" className="mt-4">
                    <Button color="info" rounded onClick={handleData}>
                      Confirmar Pago
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pago;
