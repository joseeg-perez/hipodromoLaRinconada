import React, { useState } from "react";
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

export const CardLugar = (props) => {
  let estados = [];
  let municipios = [];
  let parroquias = [];

  props.lugares.map((lugar) => {
    if (!estados.includes(lugar.estado)) estados.push(lugar.estado);
  });

  const [estado, setEstado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [parroquia, setParroquia] = useState("");

  const handleEstado = (event) => {
    setEstado(event.target.value);

    props.lugares.map((lugar) => {
      if (!municipios.includes(lugar.municipio)) {
        if (lugar.estado === estado) municipios.push(lugar.municipio);
      }
    });
  };

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
                  {estados.map((estado) => (
                    <option key={estado}>{estado}</option>
                  ))}
                </FormSelect>
              </Col>
              <Col>
                <FormLabel>Municipio:</FormLabel>
                <FormSelect>
                  {municipios.map((municipio) => (
                    <option key={municipio}>{municipio}</option>
                  ))}
                </FormSelect>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormLabel>Parroquia:</FormLabel>
                <FormSelect>
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
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