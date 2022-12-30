import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardVeterinario } from "./CardVeterinario";

export const ConsultaVeterinarios = (props) => {
  return (
    <Container>
      <h2 className="text-center mt-5">Veterinarios</h2>
      <Row className="row-cols-2 mx-5">
        {props.veterinarios.map((veterinario) => (
          <CardVeterinario
            key={veterinario.key}
            nombre={veterinario.nombre1}
            apellido={veterinario.apellido1}
            stud={veterinario.stud}
            caballeriza={veterinario.caballeriza}
          />
        ))}
      </Row>
    </Container>
  );
};
