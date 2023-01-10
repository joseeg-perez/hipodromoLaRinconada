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

const CardArea = (props) => {
  const [areas, setareas] = useState("");
  const [IP, setIP] = useState("");
  const [Ubicacion, setUbicacion] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [toggleIP, setToggleIP] = useState(false);

  const handleIP = (event) => {
    setToggleIP(true);
    setIP(event.target.value);
  };

  const handleUbicacion = (event) => {
    setUbicacion(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/areas/listado_de_areas")
      .then((res) => {
        console.log(res);
        setareas(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(areas);

  props.onSaveArea(Ubicacion);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Container>
      <Card className="mx-5 mt-3">
        <Card.Body>
          <Card.Title>Ubicación: </Card.Title>
          <FormSelect onChange={handleIP}>
            <option value={-1} disabled={toggleIP}>
              Ubicacion
            </option>
            <option key={0} value={"Infraestructura"}>
              Intraestructura
            </option>
            <option key={1} value={"patio"}>
              Patio
            </option>
          </FormSelect>
          <Card.Body>
            <Row>
              <Col>
                <FormLabel>Infraestructura:</FormLabel>
                <FormSelect onChange={handleUbicacion}>
                  <option value={-1} disabled={toggleIP}>
                    Lugar
                  </option>
                  {areas.data.map(
                    (area) =>
                      area.tipo_area == IP && (
                        <option key={area.codigo_area} value={area.codigo_area}>
                          {area.nombre_area}
                        </option>
                      )
                  )}
                </FormSelect>
              </Col>
            </Row>
          </Card.Body>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardArea;
