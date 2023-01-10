import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import axios from "axios";

const RegistrarCarrera = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [reglas, setReglas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    console.log("entro");
    axios
      .get("http://localhost:5000/api/v1/reglas/listado_de_reglas")
      .then((res) => {
        console.log(res);
        setReglas(res.data);
        setLoading2(false);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/v1/categorias/listado_de_categorias")
      .then((res) => {
        console.log(res);
        setCategorias(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const location = useLocation();
  const evento = location.state;
  console.log(evento.id);
  console.log(evento.numeroSigCarrera);
  if (isLoading || isLoading2) return <div>Cargando</div>;

  console.log(reglas);
  console.log(categorias);

  const reglas2 = [];
  reglas.data.map((x) => {
    if (x.nombre_regla != "Distancia" && x.nombre_regla != "Genero") {
      reglas2.push(x);
    }
  });
  console.log(reglas2);

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    let nombreCarrera = document.getElementById("nombre").value;
    let numeroCarrera = evento.numeroSigCarrera;
    let premioPrimero = document.getElementById("premio1").value;
    let premioSegundo = document.getElementById("premio2").value;
    let premioTercero = document.getElementById("premio3").value;
    let premioCuarto = document.getElementById("premio4").value;
    let premioQuinto = document.getElementById("premio5").value;
    let horaCarrera = document.getElementById("hora").value;
    let fkEvento = evento.id;
    let fkCategoriaCarrera = document.getElementById("categoria").value;
    let carreraRegla = [];
    reglas.data.map((x) =>
      //const reglaAux={fk_regla: x.codigo_regla, valor_regla: document.getElementById(x.nombre_regla).value}
      carreraRegla.push({
        fk_regla: x.codigo_regla,
        valor_regla: document.getElementById(x.nombre_regla).value,
      })
    );
    console.warn(
      "all data",
      nombreCarrera,
      numeroCarrera,
      premioPrimero,
      premioSegundo,
      premioTercero,
      premioCuarto,
      premioQuinto,
      horaCarrera,
      fkEvento,
      fkCategoriaCarrera,
      carreraRegla
    );
    // try {
    //   await axios.post(
    //     "http://localhost:5000/api/v1/carreras/registrar_carrera",
    //     {
    //       nombreCarrera,
    //       numeroCarrera,
    //       premioPrimero,
    //       premioSegundo,
    //       premioTercero,
    //       premioCuarto,
    //       premioQuinto,
    //       horaCarrera,
    //       fkEvento,
    //       fkCategoriaCarrera,
    //       carreraRegla,
    //     }
    //   );
    // } catch (error) {
    //   throw error;
    // }
    // console.log("entro");
    // console.log(document.getElementById("nombre").value);
    // console.log(document.getElementById("hora").value);
    // console.log(document.getElementById("cantidad").value);
    // console.log(document.getElementById("categoria").value);
    // reglas.data.map((x) =>
    //   console.log(document.getElementById(x.nombre_regla).value)
    // );
    // console.log(document.getElementById("premio1").value);
    // console.log(document.getElementById("premio2").value);
    // console.log(document.getElementById("premio3").value);
    // console.log(document.getElementById("premio4").value);
    // console.log(document.getElementById("premio5").value);
  };

  return (
    <Container>
      <Form>
        <Row className="text-center">
          <h1>REGISTRAR CARRERA</h1>
        </Row>

        <Row>
          <Row className="" style={{ marginLeft: "40px" }}>
            <h3>INFORMACION GENERAL</h3>
          </Row>

          <Row>
            <Col className="justify-content-center align-items-center mx-5">
              <Card>
                <Card.Body>
                  <Row className="row row-cols-2">
                    <Col>
                      <Row className="row row-cols-2">
                        <Col>
                          <h5>NOMBRE DE LA CARRERA</h5>
                        </Col>
                        <Col>
                          <input className="" id="nombre"></input>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col>
                          <h5>HORA DE LA CARRERA</h5>
                        </Col>
                        <Col>
                          <input
                            type="time"
                            id="hora"
                            min="12:00"
                            max="20:00"
                          ></input>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row className="row row-cols-2">
                        <Col>
                          <h5>CANTIDAD DE CABALLOS</h5>
                        </Col>
                        <Col>
                          <input
                            className=""
                            type="number"
                            min={8}
                            id="cantidad"
                          ></input>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col className="col-6">
                          <h5>CATEGORIA</h5>
                        </Col>
                        <Col className="col-4">
                          <select
                            className=""
                            style={{ width: "188.8px" }}
                            id="categoria"
                          >
                            {categorias.data.map((x) => (
                              <option value={x.codigo_categoria}>
                                {x.nombre_categoria}
                              </option>
                            ))}
                          </select>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>

        <Row className="mt-3">
          <Row className="" style={{ marginLeft: "40px" }}>
            <h3>DETALLES DE LA CARRERA</h3>
          </Row>

          <Row>
            <Col className="justify-content-center align-items-center mx-5">
              <Card>
                <Card.Body>
                  <Row className="row row-cols-4">
                    <Col
                      className="border border-2 border-dark border-top-0 border-start-0"
                      style={{ height: "75px" }}
                    >
                      <Row className="text-center">
                        <h5>DISTANCIA</h5>
                      </Row>

                      <Row className="d-flex justify-content-center">
                        <select id="Distancia" className="col-7">
                          <option value={1200}>1200</option>
                          <option value={1400}>1400</option>
                          <option value={1600}>1600</option>
                          <option value={1800}>1800</option>
                          <option value={2000}>2000</option>
                          <option value={2400}>2400</option>
                        </select>
                      </Row>
                    </Col>

                    <Col className="border border-2 border-dark border-top-0 border-start-0">
                      <Row className="text-center">
                        <h5>GENERO</h5>
                      </Row>

                      <Row className="d-flex justify-content-center">
                        <select id="Genero" className="col-7">
                          <option value={1}>Caballo</option>
                          <option value={2}>Yegua</option>
                        </select>
                      </Row>
                    </Col>

                    {reglas2.map((x) => (
                      <Col
                        className={
                          x.codigo_regla % 4 == 0
                            ? "border border-2 border-dark border-top-0 border-start-0 border-end-0"
                            : "border border-2 border-dark border-top-0 border-start-0"
                        }
                        style={{ height: "75px" }}
                      >
                        <Row className="text-center">
                          <h5>{x.nombre_regla.toUpperCase()}</h5>
                        </Row>

                        <Row className="d-flex justify-content-center">
                          <input
                            className="col-7"
                            type="number"
                            min={0}
                            id={x.nombre_regla}
                          ></input>
                        </Row>
                      </Col>
                    ))}

                    <Col></Col>
                  </Row>

                  <Row className="mt-3 d-flex justify-content-center">
                    <Row className="text-center">
                      <h3>PREMIOS</h3>
                    </Row>

                    <Row className="row row-cols-3 mt-3 d-flex">
                      <Col className=" border border-2 border-dark border-top-0 border-start-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>1</h2>
                          </Col>
                          <Col className="">
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row>
                                  <input id="premio1" type="number"></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>

                      <Col className="border border-2 border-dark border-top-0 border-start-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>2</h2>
                          </Col>
                          <Col>
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row>
                                  <input id="premio2" type="number"></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>

                      <Col className="border border-2 border-dark border-top-0 border-start-0 border-end-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>3</h2>
                          </Col>
                          <Col>
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row className="d-flex justify-content-center align-items-center">
                                  <input id="premio3" type="number"></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>

                      <Col className=" mb-3 border border-2 border-dark border-top-0 border-start-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2 mt-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>4</h2>
                          </Col>
                          <Col className="">
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row>
                                  <input id="premio4" type="number"></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>

                      <Col className="mb-3 border border-2 border-dark border-top-0 border-start-0">
                        <Row className="row row-cols-2 d-flex justify-content-center mb-2 mt-2">
                          <Col className="col-1 d-flex align-items-end">
                            <h2>5</h2>
                          </Col>
                          <Col>
                            <Card style={{ width: "145px", height: "70px" }}>
                              <Card.Body className="d-flex align-items-center">
                                <Row>
                                  <input id="premio5" type="number"></input>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row></Row>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
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

export default RegistrarCarrera;
