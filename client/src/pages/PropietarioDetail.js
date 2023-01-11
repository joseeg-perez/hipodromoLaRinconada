import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Tabla from "../components/Tabla";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PropietarioUpdate = () => {
  const Params = useParams();
  const [cedulaPersona, setCedulaPersona] = useState("");
  const [nombre1Persona, setnombre1Persona] = useState("");
  const [nombre2Persona, setnombre2Persona] = useState("");
  const [apellido1Persona, setapellido1Persona] = useState("");
  const [apellido2Persona, setapellido2Persona] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [fkRango, setfkRango] = useState("");
  const [alturaJinete, setAlturaJinete] = useState("");
  const [pesoJinete, setPesoJinete] = useState("");
  const [lugar, setLugar] = useState("");
  const [extension, setExtension] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [correo, setCorreo] = useState("");
  const [toggleRango, setToggleRango] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [rangos, setRangos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/propietarios/${Params.propietarioId}`)
      .then((res) => {
        console.log(res);
        setCedulaPersona(res.data.data[0].cedula_persona);
        setnombre1Persona(res.data.data[0].nombre1_persona);
        setnombre2Persona(res.data.data[0].nombre2_persona);
        setapellido1Persona(res.data.data[0].apellido1_persona);
        setapellido2Persona(res.data.data[0].apellido2_persona);
        setFechaNacimiento(res.data.data[0].fecha_nacimiento_persona);
        setLugar(res.data.data[0].nombre_lugar);
        setCuerpo(res.data.data[0].cuerpo);
        setExtension(res.data.data[0].extension);
        setCorreo(res.data.data[0].correo);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/rango_jinetes/listado_de_rgoJinetes")
      .then((res) => {
        console.log(res);
        setRangos(res.data);
        setLoading(false);
      });
    //   .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Card className="mx-5">
        <Card.Header>
          <h2>
            {nombre1Persona} {apellido1Persona}
          </h2>
        </Card.Header>
        <Card.Body>
          <Row className="align-items-center">
            <Col>
              <Row>
                <Col>
                  <ul class="list-unstyled mb-1-9">
                    <li class="mb-2 mb-xl-3 display-28">
                      <span class="display-26 fw-bold me-2 font-weight-600 text-muted">
                        Nombre completo: {nombre1Persona} {nombre2Persona}{" "}
                        {apellido1Persona} {apellido2Persona}
                      </span>
                    </li>
                    <li class="mb-2 mb-xl-3 display-28">
                      <span class="display-26 fw-bold me-2 font-weight-600">
                        Cédula:
                      </span>{" "}
                      {cedulaPersona}
                    </li>
                    <li class="mb-2 mb-xl-3 display-28">
                      <span class="display-26 fw-bold me-2 font-weight-600">
                        Correo:
                      </span>{" "}
                      {correo}
                    </li>
                    <li class="mb-2 mb-xl-3 display-28">
                      <span class="display-26 fw-bold me-2 font-weight-600">
                        Teléfono de contacto:
                      </span>{" "}
                      {extension}
                      {cuerpo}
                    </li>
                    <li class="mb-2 mb-xl-3 display-28">
                      <span class="display-26 fw-bold me-2 font-weight-600">
                        Dirección:
                      </span>{" "}
                      {lugar}
                    </li>
                    <li class="mb-2 mb-xl-3 display-28">
                      <span class="display-26 fw-bold me-2 font-weight-600">
                        Fecha de nacimiento:
                      </span>{" "}
                      {fechaNacimiento}
                    </li>
                  </ul>
                </Col>
                <Col className="d-flex align-bottom justify-content-end">
                  <div className="d-flex pt-1 justify-content-end mt-4">
                    <Link
                      size="sm"
                      to={`/propietarios/${Params.propietarioId}/updatePropietario`}
                      className="text-center align-self-end"
                    >
                      <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                        <img src={edit} alt="/" width={20} />
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PropietarioUpdate;
