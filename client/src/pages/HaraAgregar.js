import React, { useState } from "react";
import {
  Container,
  Row,
  Card,
  Form,
  FormLabel,
  Col,
  Button,
} from "react-bootstrap";
import CardLugar from "../componentes/layout/CardLugar";
import CardTelefono from "../componentes/layout/CardTelefono";
import axios from "axios";

const HaraAgregar = (props) => {
  const [nombreHara, setnombreHara] = useState("");

  const handlenombre = (event) => {
    setnombreHara(event.target.value);
  };

  var fkLugar;
  const handleLugar = (enteredLugar) => {
    fkLugar = enteredLugar;
    console.log(fkLugar);
  };

  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/haras/registrar_hara", {
        nombreHara,
        fkLugar,
      });
    } catch (error) {
      throw error;
    }
    console.warn(nombreHara, fkLugar);
    setnombreHara("");
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Hara
              </h3>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={nombreHara}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlenombre}
                    />
                    <FormLabel>Nombre del Hara</FormLabel>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <CardLugar onSaveLugar={handleLugar} />
              <Button
                className="mb-4 mt-4 align"
                size="lg"
                type="submit"
                onClick={handleData}
              >
                Registrar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default HaraAgregar;
