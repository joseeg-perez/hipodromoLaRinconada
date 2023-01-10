import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import basura from "../../assets/trashicon.png";

const InfoCaballeriza = (props) => {
  //[numero,entrenador,veterinatio,total,disponible]=[props.numero,props.entrenador,props.veterinario,props.total,props.disponible];
  const numero = props.numero;
  return (
    <Container>
      <Col className="col d-flex justify-content-center">
        <Card className="w-75 mb-3 align-self-center">
          <Card.Header>
            <h5>{`Nro. ${props.numero}`}</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Entrenador: ${props.entrenador}`}</li>
                <li className="list-group-item">{`Veterinario: ${props.veterinario}`}</li>
                <li className="list-group-item">{`Puestos: ${props.total}`}</li>
                <li className="list-group-item">{`Disponibles: ${props.disponible}`}</li>
              </ul>
            </Row>

            <Row>
              <Col className="d-flex justify-content-end">
                <Link
                  className="btn btn-primary"
                  to={{
                    pathname: `/caballerizas/${props.id}`,
                    state: { props },
                  }}
                >
                  Mas info
                </Link>
              </Col>

              <Col className="d-flex justify-content-end col-auto">
                <Button style={{backgroundColor: "#FA6660", border: "#FA6660"}}>
                  <img src={basura} width={25} height={25}></img>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default InfoCaballeriza;
