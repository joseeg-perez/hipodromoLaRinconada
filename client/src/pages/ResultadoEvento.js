import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Tabla from "../componentes/tablas/Tabla";
import axios from "axios";

const ResultadoEvento = () => {
  const location = useLocation();
  const {
    props: { id, fecha },
  } = location.state;

  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [carreras, setCarreras] = useState([]);
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/gaceta/query1/${id}`)
      .then((res) => {
        console.log(res);
        setCarreras(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:5000/api/v1/resultados/resultados_evento/${id}`)
      .then((res) => {
        console.log(res);
        setResultados(res.data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading || isLoading2) return <div>Cargando</div>;

  console.log(resultados);
  let columnas6 = (
    <tr>
      <th>Pos</th>
      <th>Num</th>
      <th>Nombre</th>
      <th>P.P</th>
      <th>Jinete</th>
      <th>Peso Jinete</th>
      <th>Entrenador</th>
      <th>Tiempo</th>
      <th>Dif. Cuerpos</th>
    </tr>
  );

  let grid = [];

  for (let index = 0; index < carreras.data.length; index++) {
    carreras.data[index] = {
      ...carreras.data[index],
      resultadoParticipaciones: [],
    };
  }
  carreras.data.map((x) => grid.push(x));

  for (let index = 0; index < grid.length; index++) {
    resultados.data.map((x) =>
      x.codigo_carrera == grid[index].codigo_carrera ? (
        grid[index].resultadoParticipaciones.push(x)
      ) : (
        <p></p>
      )
    );
  }
  console.log(grid);
  return (
    <Container>
      <Row className="text-center">
        <h1>{`RESULTADOS DEL EVENTO DEL ${fecha}`}</h1>
      </Row>

      {grid.map((x) => (
        <Row className="mt-3">
          <Row className="ms-5">
            <h2>{`CARRERA Nro.${x.numero_carrera}`}</h2>
          </Row>
          <Row>
            <Col className="justify-content-center align-items-center mx-5">
              <Card className="mb-4">
                <Card.Header>
                  <Row>
                    <Col className="col-auto">
                      <h4>{`NOMBRE: ${x.nombre_carrera.toUpperCase()}`}</h4>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="col-auto">
                      <h4>{`HORA: ${x.hora_carrera}`}</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-auto">
                      <h4>{`DISTANCIA: ${x.valor_regla}mts`}</h4>
                    </Col>
                  </Row>
                  <Row className="row row-cols-6">
                    <Col className="col-auto">
                      <h4>{`PREMIOS: `}</h4>
                    </Col>

                    <Col className="col-auto">
                      <h4>{`1ro: ${x.premio_primero}$`}</h4>
                    </Col>
                    <Col className="col-auto">
                      <h4>{`2do: ${x.premio_segundo}$`}</h4>
                    </Col>
                    <Col className="col-auto">
                      <h4>{`3ro: ${x.premio_tercero}$`}</h4>
                    </Col>
                    <Col className="col-auto">
                      <h4>{`4to: ${x.premio_cuarto}$`}</h4>
                    </Col>
                    <Col className="col-auto">
                      <h4>{`5to: ${x.premio_quinto}$`}</h4>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="row row-cols-1">
                    <Tabla
                      
                      columnas={columnas6}
                      informacion={x.resultadoParticipaciones}
                      funcion={(x) => (
                        <tr>
                          <td>{`${x.puesto}`}</td>
                          <td>{`${x.gualdrapa}`}</td>
                          <td>{`${x.caballo}`}</td>
                          <td>{`${x.puesto_pista}`}</td>
                          <td>{`${x.jinete}`}</td>
                          <td>{`${x.peso_jinete}`}</td>
                          <td>{`${x.entrenador}`}</td>
                          <td>{`${x.tiempo_total}`}</td>
                          <td>{`${x.cuerpos}`}</td>
                        </tr>
                      )}
                    ></Tabla>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      ))}
    </Container>
  );
};

export default ResultadoEvento;
