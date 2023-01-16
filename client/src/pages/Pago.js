import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormLabel,
  Row,
} from "react-bootstrap";

const Pago = () => {
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
                <Row className="d-flex align-items-center">
                  <Col>
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
                {/* <Col>
              <FormSelect onChange={handleCaballeriza}>
                <option key={-1} disabled={toggleCaballeriza}>
                  Banco
                </option>
                {caballerizas.data.map((caballeriza) => (
                  <option
                    key={caballeriza.codigo_caballeriza}
                    value={caballeriza.codigo_caballeriza}
                  >
                    {caballeriza.codigo_caballeriza} (puestos:
                    <span> </span>
                    {caballeriza.cantidad_puestos})
                  </option>
                ))}
              </FormSelect>
            </Col> */}
                <Row className="d-flex align-items-center">
                  <Col>
                    <div className="mb-3 form-floating">
                      <input
                        id="propietariotarjeta"
                        type="text"
                        className="form-control"
                        placeholder="Numero de tarjeta"
                      />
                      <FormLabel>Nombre del Tarjetahabiente</FormLabel>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input
                      label="Expiration"
                      className="form-control"
                      id="fecha_expiracion"
                      type="fecha_expiracion"
                      placeholder="MM/YYYY"
                      maxLength={7}
                    />
                  </Col>
                  <Col>
                    <input
                      label="Expiration"
                      className="form-control"
                      id="contraseña"
                      type="password"
                      placeholder="Contraseña"
                      maxLength={7}
                    />
                  </Col>
                  <Col size="3">
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
