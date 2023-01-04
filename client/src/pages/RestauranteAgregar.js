import React, { useState } from "react";
import { Button, Card, Container, Form, FormLabel } from "react-bootstrap";
import axios from "axios";
import CardArea from "../componentes/layout/CardArea";

const RestauranteAgregar = () => {
  const [nombreRestaurante, setnombreRestaurante] = useState("");
  const [descripcionRestaurante, setDescripcionRestaurante] = useState("");
  const [capacidadRestaurante, setCapacidadRestaurante] = useState("");
  const handlenombreRestaurante = (event) => {
    setnombreRestaurante(event.target.value);
  };
  const handledescripcionRestaurante = (event) => {
    setDescripcionRestaurante(event.target.value);
  };
  const handlecapacidadRestaurante = (event) => {
    setCapacidadRestaurante(event.target.value);
  };
  var fk_area;
  const handleArea = (enteredArea) => {
    fk_area = enteredArea;
    console.log(fk_area);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/restaurantes/registrar_restaurante",
        {
          nombreRestaurante,
          descripcionRestaurante,
          capacidadRestaurante,
          fk_area,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(
      nombreRestaurante,
      descripcionRestaurante,
      capacidadRestaurante
    );
    setnombreRestaurante("");
    setDescripcionRestaurante("");
    setCapacidadRestaurante("");
  };
  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Agregar Restaurante</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del Restaurante</FormLabel>
              <div>
                <input
                  value={nombreRestaurante}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Restaurante"
                  onChange={handlenombreRestaurante}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={descripcionRestaurante}
                  className="form-control"
                  rows="4"
                  onChange={handledescripcionRestaurante}
                ></textarea>
              </div>
              <FormLabel>Capacidad del Restaurante</FormLabel>
              <div>
                <input
                  value={capacidadRestaurante}
                  type="number"
                  className="form-control bg-transparent"
                  placeholder="Capacidad de Restaurante"
                  onChange={handlecapacidadRestaurante}
                />
              </div>
              <CardArea onSaveArea={handleArea} />
              <Button
                className="mt-3 float-end"
                size="lg"
                type="submit"
                onClick={handleData}
              >
                Crear Restaurante
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default RestauranteAgregar;
