import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import InfoEventos from "../componentes/eventos/InfoEventos";
import axios from "axios";

const Gaceta = () => {
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
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let an = hoy.getFullYear();
  if (dia < 10) dia = `0${dia}`;
  if (mes < 10) mes = `0${mes}`;
  let fechaHoy = `${an}/${mes}/${dia}`;
 
  return (
    <Container>
      <Row className="text-center">
        <h1>EVENTOS</h1>
      </Row>

      <Row>
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row className="row row-cols-3 mt-3 text-center d-flex justify-content-center">
                {eventos.data.map((x) =>
                  x.fecha_evento > fechaHoy ? (
                    <InfoEventos
                      key={x.codigo_evento}
                      id={x.codigo_evento}
                      fecha={x.fecha_evento}
                      tipo="gaceta"
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

export default Gaceta;
