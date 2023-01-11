import React, {useState, useEffect} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import InfoCarrera from "../componentes/eventos/InfoCarrera";
import axios from "axios";

const CarrerasEvento = () => {
  const location = useLocation();
  const {
    props: { id, fecha, tipo2 },
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

  return (
    <Container>
      <Row className="text-center">
        <h1>{`EVENTO DEL ${fecha}`}</h1>
      </Row>

      <Row>
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
                    tipo={
                      tipo2 == "agregarResultados"
                        ? "resultado"
                        : tipo2 == "inscribirEjemplar"
                        ? "inscribir"
                        : tipo2 == "retirarEjemplar"
                        ? "retirar"
                        : "ver"
                    }
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

export default CarrerasEvento;
