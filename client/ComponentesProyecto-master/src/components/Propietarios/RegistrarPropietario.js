import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  FormLabel,
  FormSelect,
  FormGroup,
  Form,
  Button,
} from "react-bootstrap";
import { CardLugar } from "../Lugar/CardLugar";

export const RegistrarPropietario = (props) => {
  const [cedulaPropietario, setCedulaPropietario] = useState("");
  const [pnombrePropietario, setPnombrePropietario] = useState("");
  const [snombrePropietario, setSnombrePropietario] = useState("");
  const [papellidoPropietario, setPapellidoPropietario] = useState("");
  const [sapellidoPropietario, setSapellidoPropietario] = useState("");
  const [fecha_nacPropietario, setFecha_nacPropietario] = useState("");
  const [correoPropietario, setCorreoPropietario] = useState("");

  const handleCedula = (event) => {
    setCedulaPropietario(event.target.value);
  };
  const handlePnombre = (event) => {
    setPnombrePropietario(event.target.value);
  };
  const handleSnombre = (event) => {
    setSnombrePropietario(event.target.value);
  };
  const handlePapellido = (event) => {
    setPapellidoPropietario(event.target.value);
  };
  const handleSapellido = (event) => {
    setSapellidoPropietario(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setFecha_nacPropietario(event.target.value);
  };
  const handleCorreo = (event) => {
    setCorreoPropietario(event.target.value);
  };

  const handleData = (event) => {
    event.preventDefault();
    console.warn(
      cedulaPropietario,
      pnombrePropietario,
      snombrePropietario,
      papellidoPropietario,
      sapellidoPropietario,
      fecha_nacPropietario
    );
    setCedulaPropietario("");
    setPnombrePropietario("");
    setSnombrePropietario("");
    setPapellidoPropietario("");
    setSapellidoPropietario("");
    setFecha_nacPropietario("");
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Propietario
              </h3>
              <Row className="align-items-center">
                <Col>
                  <div className="mb-3 form-floating">
                    <input
                      value={cedulaPropietario}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleCedula}
                    />
                    <FormLabel>Cédula</FormLabel>
                  </div>
                </Col>
                <Col>
                  <div className="mb-3 form-floating">
                    <input
                      value={cedulaPropietario}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleCedula}
                    />
                    <FormLabel>Número de teléfono</FormLabel>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={pnombrePropietario}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePnombre}
                    />
                    <FormLabel>Primer nombre</FormLabel>
                  </div>
                </Col>

                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={snombrePropietario}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleSnombre}
                    />
                    <FormLabel>Segundo Nombre</FormLabel>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={papellidoPropietario}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlePapellido}
                    />
                    <FormLabel>Primer apellido</FormLabel>
                  </div>
                </Col>

                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={sapellidoPropietario}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleSapellido}
                    />
                    <FormLabel>Segundo apellido</FormLabel>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center my-2">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={fecha_nacPropietario}
                      type="date"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleFecha_nac}
                    />
                    <FormLabel>Fecha de nacimiento</FormLabel>
                  </div>
                </Col>
                <Col>
                  <div className="mb-3 form-floating">
                    <input
                      value={correoPropietario}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleCorreo}
                    />
                    <FormLabel>Correo electrónico</FormLabel>
                  </div>
                </Col>
              </Row>
              <CardLugar lugares={props.lugares} />
              <Button
                className="mb-4 mt-4 align"
                size="lg"
                type="submit"
                onClick={handleData}
              >
                Registrar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
