import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  Button,
  Form,
  FormCheck,
  InputGroup,
  FormLabel,
  FormGroup,
  FormSelect,
} from "react-bootstrap";
import caballo1 from "../../assets/caballo1.jpg";
import caballo2 from "../../assets/caballo2.jpg";
import caballo3 from "../../assets/caballo3.jpg";
import Tabla from "../Tabla";
import edit from "../../assets/editicon.png";
import trash from "../../assets/trashicon.png";

export const EditarJinete = (props) => {
  const [nombre1Jinete, setnombre1Jinete] = useState(props.nombre1);
  const [apellido1Jinete, setapellido1Jinete] = useState(props.apellido1);
  const [nombre2Jinete, setnombre2Jinete] = useState(props.nombre2);
  const [apellido2Jinete, setapellido2Jinete] = useState(props.apellido2);
  const [fecha_nacJinete, setFecha_nacJinete] = useState(props.fecha_nac);
  const [rangoJinete, setRangoJinete] = useState(props.rango);
  const [alturaJinete, setAlturaJinete] = useState(props.altura);
  const [pesoJinete, setPesoJinete] = useState(props.peso);

  const handleData = (event) => {
    event.preventDefault();
    console.warn(
      "all data",
      nombre1Jinete,
      apellido1Jinete,
      nombre2Jinete,
      apellido2Jinete,
      fecha_nacJinete,
      rangoJinete,
      alturaJinete,
      pesoJinete
    );
  };
  const handleNombre1 = (event) => {
    setnombre1Jinete(event.target.value);
  };
  const handleapellido1 = (event) => {
    setapellido1Jinete(event.target.value);
  };
  const handlenombre2 = (event) => {
    setnombre2Jinete(event.target.value);
  };
  const handleapellido2 = (event) => {
    setapellido2Jinete(event.target.value);
  };
  const handleFecha_nac = (event) => {
    setFecha_nacJinete(event.target.value);
  };
  const handlePeso = (event) => {
    setPesoJinete(event.target.value);
  };
  const handleAltura = (event) => {
    setAlturaJinete(event.target.value);
  };
  const handleRango = (event) => {
    setRangoJinete(event.target.value);
  };

  return (
    <div>
      <Container>
        <Card className="mx-5 mb-3 mt-5">
          <Card.Header>
            <h2>
              {props.nombre1} {props.apellido1}
            </h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleData}>
              <Row className="align-items-center">
                <Col>
                  <Row>
                    <Col>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">
                            Primer Nombre
                          </FormLabel>
                          <input
                            value={nombre1Jinete}
                            type="text"
                            className="form-control"
                            onChange={handleNombre1}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">
                            Segundo Nombre
                          </FormLabel>
                          <input
                            value={nombre2Jinete}
                            type="text"
                            className="form-control"
                            onChange={handlenombre2}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">
                            Primer apellido
                          </FormLabel>
                          <input
                            value={apellido1Jinete}
                            type="text"
                            className="form-control"
                            onChange={handleapellido1}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">
                            Segundo apellido
                          </FormLabel>
                          <input
                            value={apellido2Jinete}
                            type="text"
                            className="form-control"
                            onChange={handleapellido2}
                          />
                        </li>
                      </ul>
                    </Col>
                    <Col>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">
                              Fecha de nacimiento
                            </FormLabel>
                            <input
                              value={fecha_nacJinete}
                              type="date"
                              className="form-control"
                              onChange={handleFecha_nac}
                            />
                          </FormGroup>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">Altura</FormLabel>
                          <input
                            value={alturaJinete}
                            type="number"
                            className="form-control"
                            onChange={handleAltura}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormLabel className="fw-bold">Peso</FormLabel>
                          <input
                            value={pesoJinete}
                            type="number"
                            className="form-control"
                            onChange={handlePeso}
                          />
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <FormGroup>
                            <FormLabel className="fw-bold">
                              Rango de Jinete
                            </FormLabel>
                            <FormSelect
                              onChange={handleRango}
                              value={rangoJinete}
                            >
                              <option>{rangoJinete}</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>Luchito Suarez</option>
                              <option>Landon Donovan</option>
                            </FormSelect>
                          </FormGroup>
                        </li>
                        <Col className="d-flex justify-content-end">
                          <div className="d-flexjustify-content-end mt-5">
                            <Button
                              className="btn btn-success text-light btn-sm mx-1"
                              onClick={handleData}
                            >
                              Confirmar
                            </Button>

                            <Button className="btn btn-danger text-light btn-sm mx-1">
                              Cancelar
                            </Button>
                          </div>
                        </Col>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
