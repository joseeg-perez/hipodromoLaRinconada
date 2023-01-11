import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import InfoEventos from "../componentes/eventos/InfoEventos";
import axios from "axios";

const EventosRetirar = () => {
  const [isLoading, setLoading] = useState(true);
  const [eventos, setEventos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/eventos/listado_de_eventos")
      .then((res) => {
        console.log(res);
        setEventos(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading) return <div>Cargando</div>;
  console.log(eventos);
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let an = hoy.getFullYear();
  if (dia < 10) dia = `0${dia}`;
  if (mes < 10) mes = `0${mes}`;
  let fechaHoy = `${an}/${mes}/${dia}`;
  // const eventos = [
  //   {
  //     id: "1",
  //     fecha: "09/10/2022",
  //   },
  //   {
  //     id: "2",
  //     fecha: "09/10/2022",
  //   },
  //   {
  //     id: "3",
  //     fecha: "09/10/2022",
  //   },
  //   {
  //     id: "4",
  //     fecha: "09/10/2022",
  //   },
  //   {
  //     id: "5",
  //     fecha: "09/10/2022",
  //   },
  //   {
  //     id: "6",
  //     fecha: "09/10/2022",
  //   },
  //   {
  //     id: "7",
  //     fecha: "09/10/2022",
  //   },
  //   {
  //     id: "8",
  //     fecha: "09/10/2022",
  //   },
  //   {
  //     id: "9",
  //     fecha: "09/10/2022",
  //   },
  // ];

  return (
    <Container>
      <Row className="text-center">
        <h1>RETIRAR EJEMPLAR DE UN EVENTO</h1>
      </Row>

      <Row className="mt-3 mb-2">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body style={{ height: "478px", overflowY: "scroll" }}>
              <Row className="text-center">
                <h3>PROXIMOS EVENTOS</h3>
              </Row>

              <Row className="d-flex justify-content-center row-cols-2 mt-2">
                <Col className="col-auto">
                  <h5>Buscar Evento</h5>
                </Col>
                <Col className="col-auto">
                  <input type="date"></input>
                </Col>

                <Col className="col-auto">
                  <Button
                    className="d-flex align-items-center"
                    style={{ height: "28px" }}
                  >
                    Buscar
                  </Button>
                </Col>
              </Row>

              <Row className="row row-cols-3 mt-3 text-center d-flex justify-content-center">
                {eventos.data.map((x) =>
                  x.fecha_evento > fechaHoy ? (
                    <InfoEventos
                      key={x.codigo_evento}
                      id={x.codigo_evento}
                      fecha={x.fecha_evento}
                      tipo="carrerasRegistradas"
                      tipo2="retirarEjemplar"
                    ></InfoEventos>
                  ) : (
                    console.log("no")
                  )
                )}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventosRetirar;
