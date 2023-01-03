import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormLabel,
  FormSelect,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const StudAgregar = () => {
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [nombreStud, setNombreStud] = useState("");
  const [propietarioStud, setPropietarioStud] = useState("");
  const [togglePropietario, setTogglePropietario] = useState(false);
  const [toggleVestimenta, setToggleVestimenta] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [propietarios, setPropietarios] = useState([]);
  const [vestimentasDispo, setVestimentasDispo] = useState([]);

  const handleFechaCreacion = (event) => {
    setFechaCreacion(event.target.value);
  };
  const handleNombreStud = (event) => {
    setNombreStud(event.target.value);
  };
  const handlePropietario = (event) => {
    setPropietarioStud(event.target.value);
    setTogglePropietario(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/propietarios/listado_de_propietarios")
      .then((res) => {
        console.log(res);
        setPropietarios(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/v1/vestimentas/listado_de_vestimentas")
      .then((res) => {
        console.log(res);
        setVestimentasDispo(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(propietarios);
  console.log(vestimentasDispo);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Stud
              </h3>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={nombreStud}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleNombreStud}
                    />
                    <FormLabel>Nombre Stud</FormLabel>
                  </div>
                </Col>
                <Col className="mb-4">
                  <Col>
                    <FormLabel>Propietario:</FormLabel>
                    <FormSelect onChange={handlePropietario}>
                      <option value={-1} disabled={togglePropietario}>
                        Propietario
                      </option>
                      {propietarios.data.map((propietario) => (
                        <option
                          value={propietario.codigo_persona}
                          key={propietario.codigo_persona}
                        >
                          {propietario.nombre1_persona} <span> </span>
                          {propietario.apellido1_persona}
                        </option>
                      ))}
                    </FormSelect>
                  </Col>
                </Col>
                <Col className="mt-2">
                  <Link
                    size="sm"
                    to={`/propietarios/createPropietario`}
                    className="text-center"
                  >
                    <Button size="sm" type="submit">
                      Agregar Propietario
                    </Button>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={fechaCreacion}
                      type="date"
                      className="form-control"
                      placeholder="First name"
                      onChange={handleFechaCreacion}
                    />
                    <FormLabel>Fecha de creacion</FormLabel>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>Vestimentas del stud</Card.Title>
                  <Col className="col-6">
                    <FormSelect className="mt-3">
                      {vestimentasDispo.data.map((vestimenta) => (
                        <option
                          value={vestimenta.codigo_vestimenta}
                          key={vestimenta.codigo_vestimenta}
                        >
                          {vestimenta.nombre_vestimenta}
                        </option>
                      ))}
                    </FormSelect>
                  </Col>
                  <Col></Col>
                </Card.Body>
              </Card>
              <Button
                className="mb-4 mt-4 align"
                size="lg"
                type="submit"
                // onClick={handleData}
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

export default StudAgregar;
