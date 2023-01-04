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
import InfoHara from "../componentes/haras/InfoHara";

const Haras = () => {
  const [isLoading, setLoading] = useState(true);
  const [haras, setHaras] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/haras/listado_de_haras")
      .then((res) => {
        console.log(res);
        setHaras(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(Haras);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE HARAS</h1>
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
          style={{ backgroundColor: "#AFBBF7", width: "150px", height: "40px" }}
        >
          <Link size="sm" to={`/haras/createHara`} className="text-center">
            <Button
              className="btn fw-bold"
              size="sm"
              style={{
                backgroundColor: "#E8EEDF",
                color: "black",
                border: "black",
              }}
            >
              AGREGAR HARA
            </Button>
          </Link>
        </div>
      </Row>
      <Row className="row-cols-2 mx-5">
        {haras.data.map((hara) => (
          <InfoHara
            Id={hara.codigo_hara}
            key={hara.codigo_hara}
            nombre={hara.nombre_hara}
            lugar={hara.fk_lugar}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Haras;
