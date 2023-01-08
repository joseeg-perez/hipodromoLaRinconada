import React from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import caballo1 from "../assets/caballo1.jpg";
import caballo2 from "../assets/caballo2.jpg";
import caballo3 from "../assets/caballo3.jpg";
import Tabla from "../componentes/tablas/Tabla";
import edit from "../assets/editicon.png";
import trash from "../assets/trashicon.png";
import { useParams, useRouteMatch } from "react-router-dom";

export const EjemplarDetail = () => {
  const params = useParams();
  console.log(params.EjemplarId);
  const match = useRouteMatch();
  const { EjemplarId } = params;

  const Ejemplares = [
    {
      imagen: caballo1,
      nombre: "El burlon",
      numero: 5,
      numero_tatuaje_labial: 27,
      peso: 156,
      precio: 256000,
      hara: "Potricos de Sevilla",
      pelaje: "SuavePa",
      sexo: "M",
      padre: "Luchito",
      madre: "teresita",
      stud: "los toros del hood ",
      fecha_nac: "20/03/04",
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
    },
    {
      imagen: caballo2,
      nombre: "EL caballo WHITTEE",
      numero: 7,
      pelaje: "RUlos Chidos",
      sexo: "M",
    },
    {
      imagen: caballo3,
      nombre: "TIro al blanco",
      numero: 10,
      pelaje: "Blanquito",
      sexo: "M",
    },
  ];

  const propietario = [
    {
      id: "1",
      nombre: "Alejandro Marquez",
      cedula: "28.308.632",
      fecha_inicio: "8/1/2023",
      porcentaje: 54,
    },
    {
      id: "2",
      nombre: "Jose Gimenez",
      cedula: "6.089.356",
      fecha_inicio: "8/1/2023",
      porcentaje: 28,
    },
    {
      id: "3",
      nombre: "Yohander Hernandez",
      cedula: "29.458.321",
      fecha_inicio: "8/1/2023",
      porcentaje: 18,
    },
  ];

  let columnas1 = (
    <tr>
      <th>Nombre</th>
      <th>Caballeriza</th>
      <th>Puesto</th>
      <th>Fecha_Ingreso</th>
      <th>Stud</th>
    </tr>
  );

  let columnas2 = (
    <tr>
      <th>Nombre</th>
      <th>Cedula</th>
      <th>Fecha_Inicio</th>
      <th>Porcentaje</th>
    </tr>
  );

  const onSeleccionPropietarioHandler = (id,propietario, event) => {
    event.preventDefault();
    console.log(id);
    console.log(propietario);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="mx-5">
              <Card.Header>
                <h2>{Ejemplares[0].nombre}</h2>
              </Card.Header>
              <Card.Body>
                <Row className="align-items-center">
                  <Col className="col-3">
                    <Image
                      src={Ejemplares[0].imagen}
                      width={200}
                      rounded={20}
                      alt="/"
                    />
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <ul class="list-unstyled mb-1-9">
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Entrenador:
                            </span>{" "}
                            <span>{Ejemplares[0].entrenador}</span>
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Stud:
                            </span>{" "}
                            {Ejemplares[0].stud}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Fecha de nacimiento:
                            </span>{" "}
                            {Ejemplares[0].fecha_nac}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Numero:
                            </span>{" "}
                            {Ejemplares[0].numero}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Hara de procedencia:
                            </span>{" "}
                            {Ejemplares[0].hara}
                          </li>
                          <li class="display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Pelaje:
                            </span>{" "}
                            {Ejemplares[0].pelaje}
                          </li>
                        </ul>
                      </Col>
                      <Col>
                        <ul class="list-unstyled mb-1-9">
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Padre:
                            </span>{" "}
                            <span>{Ejemplares[0].padre}</span>
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Madre:
                            </span>{" "}
                            {Ejemplares[0].madre}
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Precio:
                            </span>{" "}
                            {Ejemplares[0].precio}$
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Peso:
                            </span>{" "}
                            {Ejemplares[0].peso} Kg
                          </li>
                          <li class="mb-2 mb-xl-3 display-28">
                            <span class="display-26 fw-bold me-2 font-weight-600">
                              Sexo:
                            </span>{" "}
                            {Ejemplares[0].sexo}
                          </li>
                          <li>
                            <div className="d-flex pt-1 justify-content-end mt-4">
                              <Button className="btn btn-light btn-outline-success btn-sm mx-1">
                                <img src={edit} alt="/" width={20} />
                              </Button>

                              <Button className="btn btn-light btn-outline-danger btn-sm mx-1">
                                <img src={trash} alt="/" width={20} />
                              </Button>
                            </div>
                          </li>
                        </ul>
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
                  <h3 className="mt-2 text-center">Propietarios</h3>
                  <Tabla
                    columnas={columnas2}
                    informacion={propietario}
                    estilo=" table-hover"
                    funcion={(x) => (
                      <tr onClick={(e) => onSeleccionPropietarioHandler(x.id,x, e)}>
                        <td>{`${x.nombre}`}</td>
                        <td>{`${x.cedula}`}</td>
                        <td>{`${x.fecha_inicio}`}</td>
                        <td>{`${x.porcentaje}`}</td>
                      </tr>
                    )}
                  ></Tabla>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
