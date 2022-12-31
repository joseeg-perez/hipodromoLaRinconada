import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardMedImpRetiro } from "./CardMedImpRetiro";
import axios from "axios";

export const PagMedImpRetiro = (props) => {
  return (
    <Container>
      <h2 className="text-center mt-4">{props.titulo}</h2>
      <Row className="row-cols-4">
        {props.items.map((item) => (
          <CardMedImpRetiro
            nombre={item.nombre}
            descripcion={item.descripcion}
            key={item.key}
          />
        ))}
      </Row>
    </Container>
  );
};
