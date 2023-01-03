import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Form,
  Col,
  FormLabel,
  FormGroup,
  Row,
  FormSelect,
} from "react-bootstrap";
import axios from "axios";

export const CardLugar = (props) => {
  const [estado, setEstado] = useState([]);
  const [municipio, setMunicipio] = useState("");
  const [parroquia, setParroquia] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [lugares, setLugares] = useState(true);
  const [direccion, setdireccion] = useState(true);
  let estados = [];

  const handleEstado = (event) => {
    setEstado(event.target.value);
  };
  const handleParroquia = (event) => {
    setParroquia(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/lugares/listado_de_lugares")
      .then((res) => {
        console.log(res);
        setLugares(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(lugares);

  props.onSaveLugar(parroquia);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Container>
      <Card className="mx-5 mt-3">
        <Card.Body>
          <Card.Title>Direccion: </Card.Title>
          <Card.Body>
            <Row>
              <Col>
                <FormLabel>Estado:</FormLabel>
                <FormSelect onChange={handleEstado}>
                  {lugares.data.map((lugar) => (
                    <option key={lugar.id_lugar} value={lugar.id_lugar}>
                      {lugar.nombre_lugar}
                    </option>
                  ))}
                </FormSelect>
              </Col>
              <Col>
                <FormLabel>Municipio:</FormLabel>
                <FormSelect>
                  {/* {municipios.map((municipio) => (
                    <option key={municipio}>{municipio}</option>
                  ))} */}
                </FormSelect>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormLabel>Parroquia:</FormLabel>
                <FormSelect onChange={handleParroquia}>
                  <option value={1}>1</option>
                  <option value={77}>1</option>
                  <option value={150}>1</option>
                </FormSelect>
              </Col>
              <Col></Col>
            </Row>
          </Card.Body>
        </Card.Body>
      </Card>
    </Container>
  );
};
