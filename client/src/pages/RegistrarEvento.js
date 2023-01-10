import React, {useState,useEffect} from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import fotico from "../assets/agregarCarrera.jpg";
import InfoCarrera from "../componentes/eventos/InfoCarrera";
import axios from "axios";

const RegistrarEvento = () => {
  const location = useLocation();
  const {
    props: { id, fecha },
  } = location.state;
  const [isLoading, setLoading] = useState(true);
  const [carreras, setCarreras] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/carreras/listadoDeCarreraXEvento/${id}`)
      .then((res) => {
        console.log(res);
        setCarreras(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading) return <div>Cargando</div>;
  console.log(carreras);

  // const carreras = [
  //   {
  //     id: "1",
  //     num: 1,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "2",
  //     num: 2,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "3",
  //     num: 3,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "4",
  //     num: 4,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "5",
  //     num: 5,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "6",
  //     num: 6,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "7",
  //     num: 7,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "8",
  //     num: 8,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "9",
  //     num: 9,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "10",
  //     num: 10,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "11",
  //     num: 11,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  //   {
  //     id: "12",
  //     num: 12,
  //     nombre: "Carrera 1",
  //     hora: "5:00 PM",
  //     distancia: 1500,
  //     cantidad: 16,
  //     edad: "5-8",
  //     peso: "125kg-135kg",
  //     genero: "Yeguas",
  //     camp: "Si",
  //     vic: 15,
  //   },
  // ];

  let numeroSigCarrera=carreras.data.length+1;
  console.log(numeroSigCarrera);

  return (
    <Container>
      <Row>
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <Row className="row row-cols-2">
                <Col className="d-flex justify-content-center">
                  <img src={fotico} width={480} height={300}></img>
                </Col>

                <Col>
                  <Row className="text-center">
                    <h1>REGISTRAR EVENTO</h1>
                  </Row>
                  <Row className="text-center">
                    <p>{`Fecha del evento: ${fecha}`}</p>
                  </Row>

                  <Row className="mt-5 d-flex justify-content-center mx-5">
                    <NavLink
                      className="btn btn-primary d-flex align-items-center"
                      size="xxl"
                      style={{ width: "200px", height: "100px" }}
                      to={{
                        pathname: "/carrera/crear",
                        state: { id, numeroSigCarrera },
                      }}
                    >
                      <h3>AGREGAR CARRERA</h3>
                    </NavLink>
                  </Row>
                </Col>
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
                <h2>CARRERAS DE ESTE EVENTO</h2>
              </Row>

              <Row className="row row-cols-3">
                {carreras.data.map((x) => (
                  <InfoCarrera
                    key={x.codigo_carrera}
                    id={x.codigo_carrera}
                    num={x.numero_carrera}
                    nombre={x.nombre_carrera}
                    p1={x.premio_primero}
                    p2={x.premio_segundo}
                    p3={x.premio_tercero}
                    p4={x.premio_cuarto}
                    p5={x.premio_quinto}
                    hora={x.hora_carrera}
                    cat={x.nombre_categoria}
                    tipo="editar"
                  ></InfoCarrera>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrarEvento;
