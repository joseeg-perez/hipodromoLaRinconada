import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import caballo1 from "../assets/caballo1.jpg";
import caballo2 from "../assets/caballo2.jpg";
import caballo3 from "../assets/caballo3.jpg";
import lupa from "../assets/lupa.svg";
import InfoEjemplar from "../componentes/ejemplares/InfoEjemplar";
import axios from "axios";

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

  const [isLoading, setLoading] = useState(true);
  const [ejemplares, setEjemplares] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/ejemplares/listado_de_ejemplares")
      .then((res) => {
        console.log(res);
        setEjemplares(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(ejemplares);

  if (isLoading) {
    return <div></div>;
  }

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
        {ejemplares.data.map((ejemplar) => (
          <InfoEjemplar
            key={ejemplar.codigo_ejemplar}
            Id={ejemplar.codigo_ejemplar}
            imagen={ejemplar.imagen_ejemplar}
            nombre={ejemplar.nombre_ejemplar}
            stud={ejemplar.nombre_stud}
            fecha_nacimiento={ejemplar.fechanac}
            entrenador={ejemplar.entrenador}
            caballeriza={ejemplar.caballeriza}
            hara={ejemplar.nombre_hara}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Ejemplares;
