import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>OPCIONES</h1>
        </Col>
      </Row>

      <Row>
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <Card.Body>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CREAR ROLES</li>
                <li className="list-group-item">CONSULTAR USUARIOS</li>
                <li className="list-group-item">CONSULTAR JINETES</li>
                <li className="list-group-item">CONSULTAR EJEMPLARES</li>
                <li className="list-group-item">CONSULTAR PROPIETARIOS</li>
                <Link className="list-group-item" to="/studs">CONSULTAR STUDS</Link>
                <li className="list-group-item">
                  CONSULTAR MEDICAMENTOS,IMPLEMENTOS,RETIROS
                </li>
                <Link className="list-group-item" to="/caballerizas">CONSULTAR CABALLERIZA</Link>
                <li className="list-group-item">CONSULTAR VETERINARIO</li>
                <li className="list-group-item">CONSULTAR RESTAURANTES</li>
                <li className="list-group-item">CONSULTAR EVENTOS</li>
                <li className="list-group-item">
                  CONSULTAR HISTORIAL DE CAMBIOS
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
