import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Button,
  FormSelect,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const InscribirEjemplar = () => {
  const location = useLocation();
  const {
    props: { id, cantidad },
  } = location.state;
  console.log(id);

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
  ];

  const medicamentos = [
    {
      id: "1",
      nombre: "Atamel",
    },
    {
      id: "2",
      nombre: "Omeprasol",
    },
    {
      id: "3",
      nombre: "Dencoru",
    },
    {
      id: "4",
      nombre: "Ranitidina",
    },
    {
      id: "5",
      nombre: "Riopan",
    },
  ];

  const implementos = [
    {
      id: "1",
      nombre: "Lentes",
    },
    {
      id: "2",
      nombre: "Fulete",
    },
    {
      id: "3",
      nombre: "Hoddie",
    },
    {
      id: "4",
      nombre: "Mascara",
    },
    {
      id: "5",
      nombre: "Rodillera",
    },
    {
      id: "6",
      nombre: "Canillera",
    },
  ];

  const jinetes = [
    {
      id: "1",
      nombre: "Oscar Isaac",
    },
    {
      id: "2",
      nombre: "Marco Gimenez",
    },
    {
      id: "3",
      nombre: "Jerry Mina",
    },
  ];

  let content = [];
  for (let index = 0; index < cantidad; index++) {
    content.push(<option value={index + 1}>{index + 1}</option>);
  }

  let contenidoMedicamentos = [];
  medicamentos.map((x) =>
    contenidoMedicamentos.push(
      <div className="form-check col-auto">
        <input
          className="form-check-input"
          type="checkbox"
          value={x.id}
          id={x.nombre}
        ></input>
        <label className="form-check-label" for={x.id}>
          {x.nombre}
        </label>
      </div>
    )
  );

  let contenidoImplementos = [];
  implementos.map((x) =>
    contenidoImplementos.push(
      <div className="form-check col-auto">
        <input
          className="form-check-input"
          type="checkbox"
          value={x.id}
          id={x.id}
        ></input>
        <label className="form-check-label" for={x.id}>
          {x.nombre}
        </label>
      </div>
    )
  );

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("entro");
    console.log(document.getElementById("numero").value);
    console.log(document.getElementById("ejemplar").value);
    console.log(document.getElementById("peso").value);
    /*console.log(document.getElementById("implemento").value);
    console.log(document.getElementById("medicamento").value);*/
    console.log(document.getElementById("jinete").value);
    console.log(document.getElementById("pesoJinete").value);
    console.log(document.getElementById("puesto").value);
    let medicamentoUsados=[];
    medicamentos.map((x)=>document.getElementById(x.nombre).checked ? medicamentoUsados.push(x) : console.log("no se usa"));
    let implementoUsados=[];
    implementos.map((x)=>document.getElementById(x.id).checked ? implementoUsados.push(x) : console.log("no se usa"));
    
    console.log(medicamentoUsados);
    console.log(implementoUsados);
  };

  return (
    <Container>
      <Form>
        <Row className="text-center">
          <h1>REGISTRAR EJEMPLAR EN CARRERA</h1>
        </Row>

        <Row className="mt-3">
          <Col className="justify-content-center align-items-center mx-5">
            <Card>
              <Card.Body>
                <Row className="row row-cols-4">
                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Numero</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <input
                        type="number"
                        min={1}
                        id="numero"
                        className=" form-control"
                        style={{ width: "220px" }}
                        placeholder="Numero"
                      ></input>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Seleccionar Ejemplar</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <FormSelect
                        id="ejemplar"
                        className="col-7"
                        style={{ height: "38px", width: "220px" }}
                      >
                        {ejemplares.map((x) => (
                          <option value={x.id}>{x.nombre}</option>
                        ))}
                      </FormSelect>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Peso del Ejemplar</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <input
                        type="number"
                        min={1}
                        id="peso"
                        className=" form-control"
                        style={{ width: "220px" }}
                        placeholder="Peso"
                      ></input>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0 border-end-0">
                    <Row className="text-center">
                      <h4>Medicamento</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <Col className="">
                        <Row className="row row-cols-2 d-flex justify-content-center">
                          {contenidoMedicamentos.map((x) => (
                            <Col>{x}</Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Seleccionar jinete</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <FormSelect
                        id="jinete"
                        className="col-7"
                        style={{ height: "38px", width: "220px" }}
                      >
                        {jinetes.map((x) => (
                          <option value={x.id}>{x.nombre}</option>
                        ))}
                      </FormSelect>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Peso del Jinete</h4>
                    </Row>

                    <Row className=" d-flex justify-content-center mb-2">
                      <input
                        type="number"
                        min={1}
                        id="pesoJinete"
                        className=" form-control"
                        style={{ width: "220px" }}
                        placeholder="Peso"
                      ></input>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0">
                    <Row className="text-center">
                      <h4>Puesto en pista</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <FormSelect
                        id="puesto"
                        className="col-7"
                        style={{ height: "38px", width: "220px" }}
                      >
                        {content}
                      </FormSelect>
                    </Row>
                  </Col>

                  <Col className="border border-2 border-dark border-top-0 border-start-0 border-end-0">
                    <Row className="text-center">
                      <h4>Implemento</h4>
                    </Row>

                    <Row className="d-flex justify-content-center mb-2">
                      <Col className="">
                        <Row className="row row-cols-2 d-flex justify-content-center">
                          {contenidoImplementos.map((x) => (
                            <Col>{x}</Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
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

export default InscribirEjemplar;
