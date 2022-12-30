import React, { useState } from "react";
import { Card, Form, FormLabel, Button, Container } from "react-bootstrap";

export const EditarMedImpRet = (props) => {
  const [nombreItem, setNombreItem] = useState(props.nombre);
  const [descripcionItem, setDescripcionItem] = useState(props.descripcion);

  const handleNombreItem = (event) => {
    setNombreItem(event.target.value);
  };
  const handleDescripcionItem = (event) => {
    setDescripcionItem(event.target.value);
  };
  const handleData = (event) => {
    event.preventDefault();
    console.warn(nombreItem, descripcionItem);
    setNombreItem(nombreItem);
    setDescripcionItem(descripcionItem);
  };

  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">{props.titulo}</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del Medicamento</FormLabel>
              <div>
                <input
                  value={nombreItem}
                  type="text"
                  className="form-control bg-transparent"
                  onChange={handleNombreItem}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={descripcionItem}
                  className="form-control"
                  rows="4"
                  onChange={handleDescripcionItem}
                ></textarea>
              </div>
            </Form>
            <Button
              className="mt-3 float-end"
              size="lg"
              type="submit"
              onClick={handleData}
            >
              {props.titulo}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};
