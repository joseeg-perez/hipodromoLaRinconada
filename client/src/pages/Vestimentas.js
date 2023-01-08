import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lupa from "../assets/lupa.svg";
import axios from "axios";
import InfoVestimenta from "../componentes/vestimentas/InfoVestimenta";

const Vestimentas = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [vestimentas, setvestimentas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/vestimentas/listado_de_vestimentas")
      .then((res) => {
        console.log(res);
        setvestimentas(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(vestimentas);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE VESTIMENTAS</h1>
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
          style={{ backgroundColor: "#AFBBF7", width: "200px", height: "40px" }}
        >
          <Link
            size="sm"
            to={`/vestimentas/createVestimenta`}
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
              AGREGAR VESTIMENTA
            </Button>
          </Link>
        </div>
      </Row>
      <Row>
        <Row className="row-cols-4">
          {vestimentas.data.map(
            (vestimenta) =>
              vestimenta.codigo_vestimenta !== 1 && (
                <InfoVestimenta
                  nombre={vestimenta.nombre_vestimenta}
                  Id={vestimenta.codigo_vestimenta}
                  key={vestimenta.codigo_vestimenta}
                />
              )
          )}
        </Row>
      </Row>
    </Container>
  );
};

export default Vestimentas;
