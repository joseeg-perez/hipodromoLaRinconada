import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Tabla from "../components/Tabla";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const PropietarioDetail = () => {
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
        setPesoJinete(res.data.data[0].peso_jinete);
        setAlturaJinete(res.data.data[0].altura_jinete);
        setfkRango(res.data.data[0].fk_rango);
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

  console.log(rangos);
  console.log(fkRango);

  if (isLoading) {
    return <div></div>;
  }

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
    setFechaNacimiento(event.target.value);
  };
  const handleRango = (event) => {
    setfkRango(event.target.value);
    setToggleRango(true);
  };
  const handleAltura = (event) => {
    setAlturaJinete(event.target.value);
  };
  const handlePeso = (event) => {
    setPesoJinete(event.target.value);
  };

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mx-5 mt-5">
            <Card.Header>
              <h2>
                {nombre1Persona} {apellido1Persona}
              </h2>
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col className="col-3"></Col>
                <Col>
                  <Row>
                    <Col>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 fw-bold me-2 font-weight-600">
                            Rango:
                          </span>{" "}
                          <span>{fkRango}</span>
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 fw-bold me-2 font-weight-600">
                            Fecha de nacimiento:
                          </span>{" "}
                          {fechaNacimiento}
                        </li>
                      </ul>
                    </Col>
                    <Col className="align-content-end mt-5">
                      <div className="d-flex pt-1 justify-content-end mt-4">
                        <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                          <img src={edit} alt="/" width={20} />
                        </Button>

                        <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
                          <img src={trash} alt="/" width={20} />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <div className="mt-5">
            <h2 className="ms-5">Tablas</h2>
            <Card className="mb-3 mx-5">
              <Card.Body>
                <h3 className="mt-2 text-center">Mejores resultados</h3>
                <div className="text-center">
                  {/* <Tabla
                    columnas={columnas}
                    informacion={info}
                    funcion={(x) => (
                      <tr>
                        <td>{`${x.posicion}`}</td>
                        <td>{`${x.victorias}`}</td>
                        <td>{`${x.ganancia}`}</td>
                      </tr>
                    )}
                  ></Tabla> */}
                </div>
                <h3 className="mt-4 text-center">Caballerizas</h3>
                <div className="text-center">
                  {/* <Tabla
                    columnas={columnas}
                    informacion={info}
                    funcion={(x) => (
                      <tr>
                        <td>{`${x.nombre}`}</td>
                        <td>{`${x.caballeriza}`}</td>
                        <td>{`${x.puesto}`}</td>
                        <td>{`${x.fecha_ingreso}`}</td>
                        <td>{`${x.stud}`}</td>
                      </tr>
                    )}
                  ></Tabla> */}
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropietarioDetail;
