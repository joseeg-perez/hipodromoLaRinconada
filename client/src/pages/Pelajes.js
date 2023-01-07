import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lupa from "../assets/lupa.svg";
import axios from "axios";
import { CardPelaje } from "../components/Pelaje/CardPelaje";
import InfoPelaje from "../componentes/pelajes/InfoPelaje";

const Pelajes = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [pelajes, setPelajes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/pelajes/listado_de_pelajes")
      .then((res) => {
        console.log(res);
        setPelajes(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(pelajes);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE PELAJES</h1>
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
          style={{ backgroundColor: "#AFBBF7", width: "160px", height: "40px" }}
        >
          <Link size="sm" to={`/pelajes/createPelaje`} className="text-center">
            <Button
              className="btn fw-bold"
              size="sm"
              style={{
                backgroundColor: "#E8EEDF",
                color: "black",
                border: "black",
              }}
            >
              AGREGAR PELAJE
            </Button>
          </Link>
        </div>
      </Row>
      <Row>
        <Row className="row-cols-4">
          {pelajes.data.map(
            (pelaje) =>
              pelaje.codigo_pelaje !== 1 && (
                <InfoPelaje
                  nombre={pelaje.nombre_pelaje}
                  abrev={pelaje.abrev_pelaje}
                  codigo={pelaje.codigo_pelaje}
                  key={pelaje.codigo_pelaje}
                />
              )
          )}
        </Row>
      </Row>
    </Container>
  );
};

export default Pelajes;
