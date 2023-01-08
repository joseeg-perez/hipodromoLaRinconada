import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormSelect,
  Row,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CardEjemplarResultado from "../componentes/eventos/CardEjemplarResultado";

const ResultadoAgregar = (props) => {
  const location = useLocation();
  const {
    props: { id, fecha, distancia, cantidad },
  } = location.state;

  console.log(cantidad);
  const ejemplares = [
    {
      id: "1",
      nombre: "Black Mamba",
    },
    {
      id: "2",
      nombre: "Black Mamba",
    },
    {
      id: "3",
      nombre: "Black Mamba",
    },
    {
      id: "4",
      nombre: "Black Mamba",
    },
    {
      id: "5",
      nombre: "Black Mamba",
    },
    {
      id: "6",
      nombre: "Black Mamba",
    },
    {
      id: "7",
      nombre: "Black Mamba",
    },
    {
      id: "8",
      nombre: "Black Mamba",
    },
    {
      id: "9",
      nombre: "Black Mamba",
    },
    {
      id: "10",
      nombre: "Black Mamba",
    },
    {
      id: "11",
      nombre: "Black Mamba",
    },
    {
      id: "12",
      nombre: "Black Mamba",
    },
    /*{
      id: "13",
      nombre: "Black Mamba",
    },
    {
      id: "14",
      nombre: "Black Mamba",
    },
    {
      id: "15",
      nombre: "Black Mamba",
    },
    {
      id: "16",
      nombre: "Black Mamba",
    },*/
  ];

  const tipo_resultado = [
    {
      id: 1,
      nombre: "1",
    },
    {
      id: 2,
      nombre: "2",
    },
    {
      id: 3,
      nombre: "3",
    },
    {
      id: 4,
      nombre: "4",
    },
    {
      id: 5,
      nombre: "5",
    },
    {
      id:6,
      nombre: "6",
    },
    {
      id: 7,
      nombre: "7",
    },
    {
      id: 8,
      nombre: "8",
    },
    {
      id: 9,
      nombre: "9",
    },
    {
      id: 10,
      nombre: "10",
    },
    {
      id: 11,
      nombre: "11",
    },
    {
      id: 12,
      nombre: "12",
    },
    {
      id: 13,
      nombre: "13",
    },
    {
      id: 14,
      nombre: "14",
    },
    {
      id: 15,
      nombre: "15",
    },
    {
      id: 16,
      nombre: "16",
    },
    {
      id: 17,
      nombre: "Retiro",
    },
  ];

  const cuerpos_diferencia = [
    {
      id: 1,
      nombre: "Pescuezo",
    },
    {
      id: 2,
      nombre: "1/2",
    },
    {
      id: 3,
      nombre: "1",
    },
    {
      id: 4,
      nombre: "1 y 1/2",
    },
    {
      id: 5,
      nombre: "2",
    },
    {
      id:6,
      nombre: "2 y 1/2",
    },
    {
      id: 7,
      nombre: "3",
    },
    {
      id: 8,
      nombre: "3 y 1/2",
    },
    {
      id: 9,
      nombre: "4",
    },
    {
      id: 10,
      nombre: "4 y 1/2",
    },
    {
      id: 11,
      nombre: "5",
    },
    {
      id: 12,
      nombre: "Rodo",
    },
  ];

  let cuerpos=[];
  cuerpos_diferencia.map((x)=>(
    cuerpos.push(
      <option value={x.nombre}>{x.nombre}</option>
    )
  ));

  let content = [];
  for (let index = 0; index < ejemplares.length; index++) {
    content.push(<option value={tipo_resultado[index].id}>{tipo_resultado[index].nombre}</option>);
  }
  content.push(<option value={tipo_resultado[16].id}>{tipo_resultado[16].nombre}</option>)

  let lista = [];
  for (let index = 0; index < ejemplares.length; index++) {
    lista.push(<li className="list-group-item" style={{ height: "50px" }}>{index + 1}</li>);
  }

  let diferencias = [];
  for (let index = 0; index < ejemplares.length; index++) {
    diferencias.push(
      <li className="list-group-item" style={{ height: "50px" }}>
        <Row className="row row-cols-2">
          <Col className="d-flex justify-content-center">
            <input
              id={`dt${index + 1}`}
              style={{ width: "80px" }}
              placeholder="D.tiempo"
              className="form-control"
            ></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <FormSelect
              id={`dc${index + 1}`}
              style={{ width: "115px" }}
            >
              {cuerpos}
            </FormSelect>
          </Col>
        </Row>
      </li>
    );
  }

  let speedRatings = [];
  for (let index = 0; index < ejemplares.length; index++) {
    speedRatings.push(
      <li className="list-group-item" style={{ height: "50px" }}>
        <Row className="row row-cols-4">
          <Col className="d-flex justify-content-center">
            <input
              id={`sr300${index + 1}`}
              style={{ width: "65px" }}
              placeholder="300m"
              className="form-control"
            ></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input
              id={`sr400${index + 1}`}
              style={{ width: "65px" }}
              placeholder="400m"
              className="form-control"
            ></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input
              id={`sr800${index + 1}`}
              style={{ width: "65px" }}
              placeholder="800m"
              className="form-control"
            ></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input
              id={`src${index + 1}`}
              style={{ width: "65px" }}
              placeholder="Carrera"
              className="form-control"
            ></input>
          </Col>
        </Row>
      </li>
    );
  }

  let parciales = [];
  for (let index = 0; index < ejemplares.length; index++) {
    parciales.push(
      <li className="list-group-item" style={{ height: "50px" }}>
        <Row className="row row-cols-4">
          <Col className="d-flex justify-content-center">
            <input
              id={`tp300${index + 1}`}
              style={{ width: "65px" }}
              placeholder="300m"
              disabled={true}
              className="form-control"
            ></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input
              id={`tp400${index + 1}`}
              style={{ width: "65px" }}
              placeholder="400m"
              disabled={true}
              className="form-control"
            ></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input
              id={`tp800${index + 1}`}
              style={{ width: "65px" }}
              placeholder="800m"
              disabled={true}
              className="form-control"
            ></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input
              id={`tpc${index + 1}`}
              style={{ width: "65px" }}
              placeholder="Carrera"
              className="form-control"
            ></input>
          </Col>
        </Row>
      </li>
    );
  }

  let auxiliar;
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("entro");
    auxiliar = 1;
    ejemplares.map((x) => {
      console.log(document.getElementById(x.id).value);
      console.log(document.getElementById(`dt${auxiliar}`).value);
      console.log(document.getElementById(`dc${auxiliar}`).value);
      console.log(document.getElementById(`sr300${auxiliar}`).value);
      console.log(document.getElementById(`sr400${auxiliar}`).value);
      console.log(document.getElementById(`sr800${auxiliar}`).value);
      console.log(document.getElementById(`src${auxiliar}`).value);
      //console.log(document.getElementById(`tp300${auxiliar}`).value);
      //console.log(document.getElementById(`tp400${auxiliar}`).value);
      //console.log(document.getElementById(`tp800${auxiliar}`).value);
      console.log(document.getElementById(`tpc${auxiliar}`).value);
      auxiliar = auxiliar + 1;
    });
    console.log(document.getElementById("txta").value);
    /*console.log(document.getElementById(12).value);
    console.log(document.getElementById("dt1").value);
    console.log(document.getElementById("dc1").value);*/
  };
  return (
    <Container>
      <Form id="form">
        <Row className="text-center">
          <h1>AGREGAR RESULTADO</h1>
        </Row>

        <Row>
          <Col className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="text-center">
                  <h3>EJEMPLARES PARTICIPANTES</h3>
                </Row>

                <Row className="row row-cols-4">
                  {ejemplares.map((x) => (
                    <Col className="mb-3">
                      <Row className="row row-cols-2 d-flex">
                        <Col className="col-8">
                          <CardEjemplarResultado
                            key={x.id}
                            id={x.id}
                            nombre={x.nombre}
                          ></CardEjemplarResultado>
                        </Col>
                        <Col
                          className="col-4
                         d-flex justify-content-end"
                        >
                          <FormSelect id={x.id}>{content}</FormSelect>
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="text-center">
                  <h3>CLASIFICACION</h3>
                </Row>

                <Row>
                  <div className="card-group">
                    <Col style={{ width: "72px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Pos</h6>
                          </Row>

                          <Row
                            className="text-center"
                            style={{ marginTop: "40px" }}
                          >
                            <ul className="list-group list-group-flush">
                              {lista}
                            </ul>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col style={{ width: "304px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Diferencias</h6>
                          </Row>

                          <Row className="row row-cols-2">
                            <Col>
                              <Row className="text-center">
                                <p>Tiempo</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>Cuerpos</p>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <ul
                              className="list-group list-group-flush"
                              style={{ marginLeft: "6px" }}
                            >
                              {diferencias}
                            </ul>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col style={{ width: "395px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Speed Ratings</h6>
                          </Row>

                          <Row className="row row-cols-4">
                            <Col>
                              <Row className="text-center">
                                <p>300m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>400m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>800m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>Carrera</p>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <ul
                              class="list-group list-group-flush"
                              style={{ marginLeft: "6px" }}
                            >
                              {speedRatings}
                            </ul>
                          </Row>
                        </div>
                      </div>
                    </Col>

                    <Col style={{ width: "395px" }} className="col-1">
                      <div className="card">
                        <div className="card-body">
                          <Row className="text-center">
                            <h6>Parciales</h6>
                          </Row>

                          <Row className="row row-cols-4">
                            <Col>
                              <Row className="text-center">
                                <p>300m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>400m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>800m</p>
                              </Row>
                            </Col>

                            <Col>
                              <Row className="text-center">
                                <p>Carrera</p>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <ul
                              class="list-group list-group-flush"
                              style={{ marginLeft: "6px" }}
                            >
                              {parciales}
                            </ul>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3 ms-5">
          <Col>
            <Row>
              <h4>Observaciones</h4>
            </Row>
            <Row>
              <textarea
                className="col-3"
                style={{ height: "100px" }}
                id="txta"
              ></textarea>
            </Row>
          </Col>
        </Row>

        <Row className="mt-3 d-flex justify-content-center">
          <Col className="col-auto d-flex justify-content-center">
            <Button onClick={formSubmissionHandler} size="xl">
              GUARDAR
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ResultadoAgregar;
