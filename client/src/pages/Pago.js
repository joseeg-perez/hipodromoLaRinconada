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

const Pago = () => {
  const [bancos, setbancos] = useState([]);
  const [isLoading, setLoading] = useState([]);
  const [toggleMetodos, settoggleMetodos] = useState(false);
  const [metodo, setmetodo] = useState("");

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
                      id="numerotarjeta"
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
                    <Button color="info" rounded>
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
