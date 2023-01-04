import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Card,
  Form,
  FormLabel,
  Row,
  Col,
  Button,
  FormCheck,
  FormGroup,
  FormSelect,
  FormControl,
} from "react-bootstrap";
import lupa from "../assets/lupa.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import InfoRestaurante from "../componentes/restaurantes/InfoRestaurante";

const Restaurantes = () => {
  const [isLoading, setLoading] = useState(true);
  const [restaurantes, setrestaurantes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/restaurantes/listado_de_restaurantes")
      .then((res) => {
        console.log(res);
        setrestaurantes(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(restaurantes);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE RESTAURANTES</h1>
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
          style={{ backgroundColor: "#AFBBF7", width: "210px", height: "40px" }}
        >
          <Link
            size="sm"
            to={`/restaurantes/createRestaurante`}
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
              AGREGAR RESTAURANTE
            </Button>
          </Link>
        </div>
      </Row>
      <Row className="row-cols-3 mx-5">
        {restaurantes.data.map((restaurante) => (
          <InfoRestaurante
            Id={restaurante.codigo_restaurante}
            key={restaurante.codigo_restaurante}
            nombre={restaurante.nombre_restaurante}
            capacidad={restaurante.capacidad_restaurante}
            descripcion={restaurante.descripcion_restaurante}
            area={restaurante.nombre_area}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Restaurantes;
