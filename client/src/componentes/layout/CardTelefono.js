import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FormLabel,
  FormSelect,
} from "react-bootstrap";

const CardTelefono = (props) => {
  const [prefijo, setPrefijo] = useState("");
  const [numero, setNumero] = useState("");

  const handlePrefijo = (event) => {
    setPrefijo(event.target.value);
  };
  const handleNumero = (event) => {
    setNumero(event.target.value);
  };

  props.onSaveTelefono(prefijo, numero);

  return (
    <Container>
      <Card className="mx-5 mt-3">
        <Card.Body>
          <Card.Title>Telefono de contacto: </Card.Title>
          <Card.Body>
            <Row>
              <Col>
                <div className="mb-3 form-floating">
                  <input
                    value={prefijo}
                    type="number"
                    className="form-control"
                    placeholder="First name"
                    onChange={handlePrefijo}
                  />
                  <FormLabel>Prefijo</FormLabel>
                </div>
              </Col>
              <Col>
                <div className="mb-3 form-floating">
                  <input
                    value={numero}
                    type="number"
                    className="form-control"
                    placeholder="First name"
                    onChange={handleNumero}
                  />
                  <FormLabel>Número</FormLabel>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardTelefono;
