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

const CardLugarEdit = (props) => {
  const [estado, setEstado] = useState("");
  const [estados, setEstados] = useState([]);
  const [municipio, setMunicipio] = useState("");
  const [parroquia, setParroquia] = useState("");
  const [lugares, setLugares] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [direccion, setdireccion] = useState(true);
  const [toggleEstado, setToggleEstadtoggleEstado] = useState(false);
  const [toggleMunicipio, setToggleMunicipio] = useState(true);
  const [toggleParroquia, setToggleParroquia] = useState(true);
  const handleEstado = (event) => {
    setEstado(event.target.value);
    setToggleEstadtoggleEstado(true);
    setToggleMunicipio(false);
  };
  const handleMunicipio = (event) => {
    setMunicipio(event.target.value);
    setToggleParroquia(false);
  };

  const handleParroquia = (event) => {
    setParroquia(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/lugares/listado_de_emp")
      .then((res) => {
        console.log(res);
        setLugares(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(lugares);
  console.log(props.lugar)

  props.onSaveLugar(parroquia);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Container>
      <Card className="mx-5 mt-3">
        <Card.Body>
          <Card.Title>Direccion actual: </Card.Title>
          <Card.Text className="text-muted">
            {lugares[2].find((lug) => lug.id_lugar == props.lugar).nombre_lugar}
          </Card.Text>
          <Card.Body>
            <Row>
              <Col>
                <FormLabel>Estado:</FormLabel>
                <FormSelect onChange={handleEstado}>
                  <option value={-1} disabled={toggleEstado}>
                    Estado
                  </option>
                  {lugares[0].map((estado) => (
                    <option key={estado.id_lugar} value={estado.id_lugar}>
                      {estado.nombre_lugar}
                    </option>
                  ))}
                </FormSelect>
              </Col>
              <Col>
                <FormLabel>Municipio:</FormLabel>
                <FormSelect
                  onChange={handleMunicipio}
                  disabled={toggleMunicipio}
                >
                  <option value={-1} disabled={!toggleMunicipio}>
                    Municipio
                  </option>
                  {lugares[1]
                    .filter((municipio) => municipio.fk_lugar == estado)
                    .map((municipio) => (
                      <option
                        key={municipio.id_lugar}
                        value={municipio.id_lugar}
                      >
                        {municipio.nombre_lugar}
                      </option>
                    ))}
                </FormSelect>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormLabel>Parroquia:</FormLabel>
                <FormSelect
                  onChange={handleParroquia}
                  disabled={toggleParroquia}
                >
                  <option value={-1} disabled={!toggleParroquia}>
                    Parroquia
                  </option>
                  {lugares[2]
                    .filter((parroquia) => parroquia.fk_lugar == municipio)
                    .map((parroquia) => (
                      <option
                        key={parroquia.id_lugar}
                        value={parroquia.id_lugar}
                      >
                        {parroquia.nombre_lugar}
                      </option>
                    ))}
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
export default CardLugarEdit;
