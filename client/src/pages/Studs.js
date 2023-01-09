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
import InfoStud from "../componentes/studs/InfoStud";
import lupa from "../assets/lupa.svg";
import { Link } from "react-router-dom";
import axios from "axios";
const Studs = () => {
  const [isLoading, setLoading] = useState(true);
  const [Studs, setStuds] = useState([]);
  const [Colores, setColores] = useState([]);
  const [StudColores, setStudColores] = useState([]);
  var segundo = false;
  var anterior;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/studs/listado_de_studs")
      .then((res) => {
        console.log(res);
        setStuds(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(Studs);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Container>
      <Row className="text-center">
        <h1>LISTADO DE STUDS</h1>
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
          <Link size="sm" to={`/studs/createStud`} className="text-center">
            <Button
              className="btn fw-bold"
              size="sm"
              style={{
                backgroundColor: "#E8EEDF",
                color: "black",
                border: "black",
              }}
            >
              AGREGAR STUD
            </Button>
          </Link>
        </div>
      </Row>
      <Row className="row-cols-3 my-4">
        {Studs.data.map((stud) => {
          if (!segundo) {
            anterior = stud.codigo_del_color;
            segundo = true;
          } else {
            segundo = false;
            console.log(
              stud.nombre,
              stud.fecha,
              anterior,
              stud.codigo_del_color
            );
            return (
              <InfoStud
                key={stud.codigo_stud}
                id={stud.codigo_stud}
                nombre={stud.nombre_stud}
                propietario={stud.nombre}
                fecha={stud.fecha}
                color1={anterior}
                color2={stud.codigo_del_color}
              ></InfoStud>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default Studs;
