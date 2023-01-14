import React, { useState, useEffect } from "react";
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
import axios from "axios";

const ResultadoAgregar = (props) => {
  const location = useLocation();
  const {
    props: { id, fecha, distancia, cantidad, nombre, p1, p2, p3, p4, p5 },
  } = location.state;

  const [isLoading, setLoading] = useState(true);
  const [ejemplares, setEjemplares] = useState([]);
  const [isLoading2, setLoading2] = useState(true);
  const [tiposResultados, setTiposResultados] = useState([]);
  const [cuerposDiferencia, setCuerposDiferencia] = useState([]);
  const [isLoading3, setLoading3] = useState(true);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/v1/participaciones/participaciones_para_retiro/${id}`
      )
      .then((res) => {
        console.log(res);
        setEjemplares(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        "http://localhost:5000/api/v1/tipo_resultados/listado_de_tipoResultados"
      )
      .then((res) => {
        console.log(res);
        setTiposResultados(res.data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        "http://localhost:5000/api/v1/cuerpos_de_diferencia/listado_de_cuerpoDiferencias"
      )
      .then((res) => {
        console.log(res);
        setCuerposDiferencia(res.data);
        setLoading3(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading || isLoading2 || isLoading3) return <div>Cargando</div>;
  console.log(tiposResultados);
  console.log(ejemplares);

  let cuerpos = [];
  cuerposDiferencia.data.map((x) =>
    cuerpos.push(
      <option value={x.codigo_cuerpo_dif}>{x.nombre_cuerpo_dif}</option>
    )
  );

  let content = [];
  for (let index = 0; index < ejemplares.data.length; index++) {
    content.push(
      <option value={tiposResultados.data[index].codigo_tipo_resultado}>
        {tiposResultados.data[index].nombre_tipo_resultado}
      </option>
    );
  }
  //content.push(<option value={tiposResultados.data[16].id}>{tiposResultados.data[16].nombre_tipo_resultado}</option>)

  let lista = [];
  for (let index = 0; index < ejemplares.data.length; index++) {
    lista.push(
      <li className="list-group-item" style={{ height: "50px" }}>
        {index + 1}
      </li>
    );
  }

  let diferencias = [];
  for (let index = 0; index < ejemplares.data.length; index++) {
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
            <FormSelect id={`dc${index + 1}`} style={{ width: "115px" }}>
              {cuerpos}
            </FormSelect>
          </Col>
        </Row>
      </li>
    );
  }

  let speedRatings = [];
  for (let index = 0; index < ejemplares.data.length; index++) {
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
  for (let index = 0; index < ejemplares.data.length; index++) {
    parciales.push(
      <li className="list-group-item" style={{ height: "50px" }}>
        <Row className="row row-cols-4">
          <Col className="d-flex justify-content-center">
            <input
              id={`tp300${index + 1}`}
              style={{ width: "65px" }}
              placeholder="300m"
              className="form-control"
            ></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input
              id={`tp400${index + 1}`}
              style={{ width: "65px" }}
              placeholder="400m"
              className="form-control"
            ></input>
          </Col>

          <Col className="d-flex justify-content-center">
            <input
              id={`tp800${index + 1}`}
              style={{ width: "65px" }}
              placeholder="800m"
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
    let resultados = [];
    let premioEntrenador = 0;
    let premioJinete = 0;
    let premioPropietario = 0;
    let premio = 0;
    ejemplares.data.map((x) => {
      premio =
        auxiliar == 1
          ? p1
          : auxiliar == 2
          ? p2
          : auxiliar == 3
          ? p3
          : auxiliar == 4
          ? p4
          : auxiliar == 5
          ? p5
          : 0;
      resultados.push({
        diferenciaTiempo: `0:${document.getElementById(`dt${auxiliar}`).value}`,
        speedRating: document.getElementById(`src${auxiliar}`).value,
        speedRating300m: document.getElementById(`sr300${auxiliar}`).value,
        speedRating400m: document.getElementById(`sr400${auxiliar}`).value,
        speedRating800m: document.getElementById(`sr800${auxiliar}`).value,
        observacion: document.getElementById("txta").value,
        gananciaEntrenador: premio/4,
        gananciaJinete: premio/4,
        gananciaPropietario: premio/2,
        tiempoTotal:`0:${document.getElementById(`tpc${auxiliar}`).value}`,
        fkTipoResultado: document.getElementById(x.codigo_participacion).value,
        fkCuerpoDiferencia: document.getElementById(`dc${auxiliar}`).value,
        tiempo300m: `0:${document.getElementById(`tp300${auxiliar}`).value}`,
        tiempo400m: `0:${document.getElementById(`tp400${auxiliar}`).value}`,
        tiempo800m: `0:${document.getElementById(`tp800${auxiliar}`).value}`,
      });
      // console.log(document.getElementById(x.id).value);
      // console.log(document.getElementById(`dt${auxiliar}`).value);
      // console.log(document.getElementById(`dc${auxiliar}`).value);
      // console.log(document.getElementById(`sr300${auxiliar}`).value);
      // console.log(document.getElementById(`sr400${auxiliar}`).value);
      // console.log(document.getElementById(`sr800${auxiliar}`).value);
      // console.log(document.getElementById(`src${auxiliar}`).value);
      // //console.log(document.getElementById(`tp300${auxiliar}`).value);
      // //console.log(document.getElementById(`tp400${auxiliar}`).value);
      // //console.log(document.getElementById(`tp800${auxiliar}`).value);
      // console.log(document.getElementById(`tpc${auxiliar}`).value);
      auxiliar = auxiliar + 1;
    });
    console.log(resultados);
    auxiliar=1;
    //console.log(document.getElementById("txta").value);
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
                  {ejemplares.data.map((x) => (
                    <Col className="mb-3">
                      <Row className="row row-cols-2 d-flex">
                        <Col className="col-8">
                          <CardEjemplarResultado
                            key={x.codigo_ejemplar}
                            id={x.codigo_ejemplar}
                            nombre={x.nombre_ejemplar}
                          ></CardEjemplarResultado>
                        </Col>
                        <Col
                          className="col-4
                         d-flex justify-content-end"
                        >
                          <FormSelect id={x.codigo_participacion}>
                            {content}
                          </FormSelect>
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
                              className="list-group list-group-flush"
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
                              className="list-group list-group-flush"
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
