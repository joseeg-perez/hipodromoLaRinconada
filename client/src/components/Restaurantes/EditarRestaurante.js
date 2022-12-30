import React, { useState } from "react";
import { Card, Form, FormLabel, Button, Container } from "react-bootstrap";

export const EditarRestaurante = (props) => {
  const [nombreRestaurante, setNombreRestaurante] = useState(props.nombre);
  const [descripcionRestaurante, setDescripcionRestaurante] = useState(
    props.descripcion
  );
  const [capacidadRestaurante, setCapacidadRestaurante] = useState(
    props.capacidad
  );

  const handleNombreRestaurante = (event) => {
    setNombreRestaurante(event.target.value);
  };
  const handleDescripcionRestaurante = (event) => {
    setDescripcionRestaurante(event.target.value);
  };
  const handleCapacidadRestaurante = (event) => {
    setCapacidadRestaurante(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(
      nombreRestaurante,
      descripcionRestaurante,
      capacidadRestaurante
    );
    setNombreRestaurante(nombreRestaurante);
    setDescripcionRestaurante(descripcionRestaurante);
    setCapacidadRestaurante(capacidadRestaurante);
  };

  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">{props.titulo}</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del Restaurante</FormLabel>
              <div>
                <input
                  value={nombreRestaurante}
                  type="text"
                  className="form-control bg-transparent"
                  onChange={handleNombreRestaurante}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={descripcionRestaurante}
                  className="form-control"
                  rows="4"
                  onChange={handleDescripcionRestaurante}
                ></textarea>
              </div>
              <div className="mt-3">
                <FormLabel>Capacidad</FormLabel>
                <input
                  value={capacidadRestaurante}
                  className="form-control"
                  type="number"
                  onChange={handleCapacidadRestaurante}
                ></input>
              </div>
            </Form>
            <Button
              className="mt-3 float-end"
              size="lg"
              type="submit"
              onClick={handleData}
            >
              Confirmar
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};
