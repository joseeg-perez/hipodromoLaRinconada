import React from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import caballo1 from "../assets/caballo1.jpg";
import caballo2 from "../assets/caballo2.jpg";
import caballo3 from "../assets/caballo3.jpg";
import lupa from "../assets/lupa.svg";
import InfoEjemplar from "../componentes/ejemplares/InfoEjemplar";

const Ejemplares = (props) => {
  const Ejemplares = [
    {
      imagen: caballo1,
      nombre: "El burlon",
      numero: 5,
      numero_tatuaje_labial: 27,
      peso: 156,
      precio: 256000,
      hara: "Potricos de Sevilla",
      pelaje: "SuavePa",
      sexo: "M",
      padre: "Luchito",
      madre: "teresita",
      stud: "los toros del hood ",
      fecha_nac: "20/03/04",
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
      Id: 1,
    },
    {
      imagen: caballo2,
      nombre: "EL caballo WHITTEE",
      numero: 7,
      pelaje: "RUlos Chidos",
      sexo: "M",
      Id: 2,
    },
    {
      imagen: caballo3,
      nombre: "TIro al blanco",
      numero: 10,
      pelaje: "Blanquito",
      sexo: "M",
      Id: 3,
    },
  ];

  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE EJEMPLARES</h1>
      </Row>

      <Row className="row justify-content-center">
        <div
          className="rounded-start d-flex align-items-center"
          style={{ backgroundColor: "#6376D4", width: "400px", height: "40px" }}
        >
          <input
            className="col-9"
            type="text"
            placeholder="Buscar"
            style={{
              backgroundImage: `url(${lupa})`,
              backgroundSize: "20px 20px",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "255px",
              backgroundPositionY: "2px",
              border: 0,
              borderRadius: "4px",
            }}
          ></input>

          <Button
            className="btn  ms-4 fw-bold"
            size="sm"
            style={{
              backgroundColor: "#E8EEDF",
              color: "black",
              border: "black",
            }}
          >
            BUSCAR
          </Button>
        </div>

        <div
          className="rounded-end d-flex align-items-center"
          style={{ backgroundColor: "#AFBBF7", width: "180px", height: "40px" }}
        >
          <Link
            size="sm"
            to={`/ejemplares/createEjemplar`}
            className="text-center"
          >
            <Button
              className="btn fw-bold"
              size="sm"
              style={{
                backgroundColor: "#E8EEDF",
                color: "black",
                border: "black",
              }}
            >
              AGREGAR EJEMPLAR
            </Button>
          </Link>
        </div>
      </Row>
      <Row className="row-cols-2 mx-5">
        {Ejemplares.map((ejemplar) => (
          <InfoEjemplar
            key={ejemplar.nombre}
            imagen={ejemplar.imagen}
            nombre={ejemplar.nombre}
            numero={ejemplar.numero}
            pelaje={ejemplar.pelaje}
            sexo={ejemplar.sexo}
            padre={ejemplar.padre}
            madre={ejemplar.madre}
            stud={ejemplar.stud}
            fecha_nac={ejemplar.fecha_nac}
            entrenador={ejemplar.entrenador}
            mejorPos={ejemplar.mejorPos}
            cantidad2do={ejemplar.cantidad2do}
            ganancia={ejemplar.ganancia}
            Id={ejemplar.Id}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Ejemplares;
