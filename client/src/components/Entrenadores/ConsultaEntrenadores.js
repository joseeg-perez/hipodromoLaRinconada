import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardEntrenador } from "./CardEntrenador";

export const ConsultaEntrenadores = (props) => {
  return (
    <Container>
      <h2 className="text-center mt-5">Entrenadores</h2>
      <Row className="row-cols-2 mx-5">
        {props.entrenadores.map((entrenador) => (
          <CardEntrenador
            key={entrenador.key}
            nombre={entrenador.nombre1}
            apellido={entrenador.apellido1}
            stud={entrenador.stud}
            caballeriza={entrenador.caballeriza}
          />
        ))}
      </Row>
    </Container>
  );
};
