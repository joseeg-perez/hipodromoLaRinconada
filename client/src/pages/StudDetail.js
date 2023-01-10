import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import InfoEjemplar from "../componentes/ejemplares/InfoEjemplar";
import TablaCard from "../componentes/layout/TablaCard";
import Tabla from "../componentes/tablas/Tabla";
import StudUpdate from "./StudUpdate";
import imagen from "../assets/caballo1.jpg";

const StudDetail = () => {
  const params = useParams();
  console.log(params.studId);
  const match = useRouteMatch();
  const { studId } = params;

  let columnas1 = (
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Cedula</th>
      <th>%</th>
    </tr>
  );

  let columnas2 = (
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Cedula</th>
      <th>Record</th>
      <th>Dinero</th>
    </tr>
  );
  let columnas3 = (
    <tr>
      <th>Num_Carrera</th>
      <th>Nombre</th>
      <th>Pos</th>
      <th>Intervalo</th>
      <th>Tiempo</th>
      <th>Peso</th>
      <th>Jinete</th>
      <th>Peso_Jinete</th>
    </tr>
  );
  const informacion1 = [
    {
      id: "1",
      nombre: "Alejandro",
      apellido: "Marquez",
      cedula: "28.308.632",
      porcentaje: 54,
    },
    {
      id: "2",
      nombre: "Jose",
      apellido: "Gimenez",
      cedula: "6.089.356",
      porcentaje: 28,
    },
    {
      id: "3",
      nombre: "Yohander",
      apellido: "Hernandez",
      cedula: "29.458.321",
      porcentaje: 18,
    },
  ];

  const informacion2 = [
    {
      id: "1",
      nombre: "Oscar",
      apellido: "Isaac",
      cedula: "28.308.632",
      record: "26-69",
      dinero: "1.200.696 Bs",
    },
    {
      id: "2",
      nombre: "Marco",
      apellido: "Gimenez",
      cedula: "6.089.356",
      record: "2-9",
      dinero: "200.000 Bs",
    },
    {
      id: "3",
      nombre: "Jerry",
      apellido: "Mina",
      cedula: "29.458.321",
      record: "30-36",
      dinero: "2.000.000 Bs",
    },
  ];

  const ejemplares = [
    {
      id: "1",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "2",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "3",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "4",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "5",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
    {
      id: "6",
      nombre: "LA FURIA NEGRA",
      entrenador: "Eleazar Ramirez",
      jinete: "Theo Capriles",
      pelaje: "Rojo",
      edad: 8,
      imagen: imagen,
      stud: "Potricos LG",
    },
  ];

  const resultados1 = [
    {
      id: "1",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "2",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "3",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "4",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "5",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
    {
      id: "6",
      num_carrera: 520,
      nombre: "Furia Roja",
      pos: 1,
      intervalo: "N/A",
      tiempo: "4:20:12 min",
      peso: "150kg",
      jinete: "Leandro Mendoza",
      peso_jinete: "48kg",
    },
  ];

  return (
    <Container>
      <Row className="text-center">
        <h1>PAPA PEDRO</h1>
      </Row>
      <Row>
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Header>
              <Row className="row row-cols-2">
                <Col className="col cols-3">
                  <Row className="row row-cols-3">
                    <Col className="col-3">
                      <h6>COLORES:</h6>
                    </Col>
                    <Col
                      className="offset-3 col-2"
                      style={{ backgroundColor: "#DEC618" }}
                    ></Col>
                    <Col
                      className="col-2"
                      style={{ backgroundColor: "#9900FF" }}
                    ></Col>
                  </Row>
                </Col>

                <Col className="d-flex justify-content-end">
                  <h6>FECHA CREACION: 5/12/2006</h6>
                </Col>
              </Row>
            </Card.Header>

            <Card.Body>
              <Row>
                <Tabla
                  titulo="PROPIETARIOS"
                  columnas={columnas1}
                  informacion={informacion1}
                  funcion={(x) => (
                    <tr>
                      <td>{`${x.nombre}`}</td>
                      <td>{`${x.apellido}`}</td>
                      <td>{`${x.cedula}`}</td>
                      <td>{`${x.porcentaje}`}</td>
                    </tr>
                  )}
                ></Tabla>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <TablaCard
          tituloTabla="ENTRENADORES"
          columnas={columnas2}
          informacion={informacion2}
          funcion={(x) => (
            <tr>
              <td>{`${x.nombre}`}</td>
              <td>{`${x.apellido}`}</td>
              <td>{`${x.cedula}`}</td>
              <td>{`${x.record}`}</td>
              <td>{`${x.dinero}`}</td>
            </tr>
          )}
        ></TablaCard>
      </Row>

      <Row>
        <Col>
          <Row className="text-center">
            <h3>CABALLOS DEL STUD</h3>
          </Row>

          <Row className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="row row-cols-2 my-2 d-flex justify-content-center">
                  {ejemplares.map((x) => (
                    <InfoEjemplar
                      imagen={x.imagen}
                      key={x.id}
                      id={x.id}
                      nombre={x.nombre}
                      entrenador={x.entrenador}
                      jinete={x.jinete}
                      pelaje={x.pelaje}
                      edad={x.edad}
                      stud={x.stud}
                    ></InfoEjemplar>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Row className="text-center">
            <h3>RESULTADOS DE LOS CABALLOS</h3>
          </Row>

          <Row className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Tabla
                  titulo="RESULTADOS CARRERAS DE 1100 MTS"
                  columnas={columnas3}
                  informacion={resultados1}
                  funcion={(x) => (
                    <tr>
                      <td>{`${x.num_carrera}`}</td>
                      <td>{`${x.nombre}`}</td>
                      <td>{`${x.pos}`}</td>
                      <td>{`${x.intervalo}`}</td>
                      <td>{`${x.tiempo}`}</td>
                      <td>{`${x.peso}`}</td>
                      <td>{`${x.jinete}`}</td>
                      <td>{`${x.peso_jinete}`}</td>
                    </tr>
                  )}
                ></Tabla>

                <Tabla
                  titulo="RESULTADOS CARRERAS DE 1400 MTS"
                  columnas={columnas3}
                  informacion={resultados1}
                  funcion={(x) => (
                    <tr>
                      <td>{`${x.num_carrera}`}</td>
                      <td>{`${x.nombre}`}</td>
                      <td>{`${x.pos}`}</td>
                      <td>{`${x.intervalo}`}</td>
                      <td>{`${x.tiempo}`}</td>
                      <td>{`${x.peso}`}</td>
                      <td>{`${x.jinete}`}</td>
                      <td>{`${x.peso_jinete}`}</td>
                    </tr>
                  )}
                ></Tabla>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>

      <Row className="d-flex justify-content-end mt-3 mb-3">
        <Col className="col-auto">
          <Link
            className="btn fw-bold"
            style={{
              backgroundColor: "#91B6FA",
              color: "black",
              border: "black",
            }}
            to={`${match.url}/updateStud`}
          >
            EDITAR STUD
          </Link>
        </Col>
        <Col className="col-auto me-5">
          <Button
            className="fw-bold"
            style={{
              backgroundColor: "#FA6660",
              color: "black",
              border: "black",
            }}
          >
            ELIMINAR STUD
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default StudDetail;
