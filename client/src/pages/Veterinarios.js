import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lupa from "../assets/lupa.svg";

const Veterinarios = () => {
  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE VETERINARIOS</h1>
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
            to={`/veterinarios/createVeterinario`}
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
              AGREGAR VETERINARIO
            </Button>
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default Veterinarios;
