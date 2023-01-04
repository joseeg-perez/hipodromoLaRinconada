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
  const studs = [
    {
      id: "1",
      nombre: "PAPA PEDRO",
      record: "Record: 20-15",
    },
    {
      id: "2",
      nombre: "PAPA PEDRO",
      record: "Record: 20-15",
    },
    {
      id: "3",
      nombre: "PAPA PEDRO",
      record: "Record: 20-15",
    },
    {
      id: "4",
      nombre: "PAPA PEDRO",
      record: "Record: 20-15",
    },
    {
      id: "5",
      nombre: "PAPA PEDRO",
      record: "Record: 20-15",
    },
    {
      id: "6",
      nombre: "PAPA PEDRO",
      record: "Record: 20-15",
    },
  ];
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
        {Studs.data.map((stud) => (
          <InfoStud
            key={stud.codigo_stud}
            id={stud.codigo_stud}
            nombre={stud.nombre_stud}
            record={stud.record}
            propietario={stud.propietario}
            fecha={stud.fecha_creacion}
          ></InfoStud>
        ))}
      </Row>
    </Container>
  );
};

export default Studs;
