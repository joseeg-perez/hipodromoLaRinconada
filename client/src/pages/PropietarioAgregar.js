import React, { useState } from "react";
import {
  Container,
  Row,
  Card,
  Form,
  FormLabel,
  Col,
  Button,
} from "react-bootstrap";
import { CardLugar } from "../componentes/layout/CardLugar";
import CardTelefono from "../componentes/layout/CardTelefono";

const PropietarioAgregar = (props) => {
  const [cedulaPersona, setCedulaPersona] = useState("");
  const [nombre1Persona, setnombre1Persona] = useState("");
  const [nombre2Persona, setnombre2Persona] = useState("");
  const [apellido1Persona, setapellido1Persona] = useState("");
  const [apellido2Persona, setapellido2Persona] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [correo, setcorreo] = useState("");

  const handleCedula = (event) => {
    setCedulaPersona(event.target.value);
  };
  const handlePnombre = (event) => {
    setnombre1Persona(event.target.value);
  };
  const handleSnombre = (event) => {
    setnombre2Persona(event.target.value);
  };
  const handlePapellido = (event) => {
    setapellido1Persona(event.target.value);
  };
  const handleSapellido = (event) => {
    setapellido2Persona(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setfechaNacimiento(event.target.value);
  };
  const handleCorreo = (event) => {
    setcorreo(event.target.value);
  };

  var telefono;
  const handleTelefono = (enteredPrefijo, enteredNumero) => {
    telefono = {
      prefijo: enteredPrefijo,
      numero: enteredNumero,
    };
    console.log(telefono);
  };

  var fk_lugar;
  const handleLugar = (enteredLugar) => {
    fk_lugar = enteredLugar;
    console.log(fk_lugar);
  };

  const handleData = (event) => {
    event.preventDefault();
    console.warn(
      cedulaPersona,
      nombre1Persona,
      nombre2Persona,
      apellido1Persona,
      apellido2Persona,
      fechaNacimiento,
      correo,
      telefono,
      fk_lugar
    );
    setCedulaPersona("");
    setnombre1Persona("");
    setnombre2Persona("");
    setapellido1Persona("");
    setapellido2Persona("");
    setfechaNacimiento("");
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
                      value={cedulaPersona}
                      type="number"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleCedula}
                    />
                    <FormLabel>Cédula</FormLabel>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={nombre1Persona}
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
                      value={nombre2Persona}
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
                      value={apellido1Persona}
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
                      value={apellido2Persona}
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
                      value={fechaNacimiento}
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
                      value={correo}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleCorreo}
                    />
                    <FormLabel>Correo electrónico</FormLabel>
                  </div>
                </Col>
              </Row>
              <CardLugar onSaveLugar={handleLugar} />
              <CardTelefono onSaveTelefono={handleTelefono} />
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

export default PropietarioAgregar;
