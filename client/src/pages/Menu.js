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
                <Link className="list-group-item" to="/jinetes">
                  CONSULTAR JINETES
                </Link>
                <Link className="list-group-item" to="/ejemplares">
                  CONSULTAR EJEMPLARES
                </Link>
                <Link className="list-group-item" to="/propietarios">
                  CONSULTAR PROPIETARIOS
                </Link>
                <Link className="list-group-item" to="/studs">
                  CONSULTAR STUDS
                </Link>
                <Link className="list-group-item" to="/medicamentos">
                  CONSULTAR MEDICAMENTOS
                </Link>
                <Link className="list-group-item" to="/implementos">
                  CONSULTAR IMPLEMENTOS
                </Link>
                <Link className="list-group-item" to="/motivosRet">
                  CONSULTAR MOTIVOS DE RETIRO
                </Link>
                <Link className="list-group-item" to="/caballerizas">
                  CONSULTAR CABALLERIZAS
                </Link>
                <Link className="list-group-item" to="/veterinarios">
                  CONSULTAR VETERINARIOS
                </Link>
                <Link className="list-group-item" to="/restaurantes">
                  CONSULTAR RESTAURANTES
                </Link>
                <Link className="list-group-item" to="/eventos">
                  CONSULTAR EVENTOS
                </Link>
                <li className="list-group-item">
                  CONSULTAR HISTORIAL DE CAMBIOS
                </li>
                <Link className="list-group-item" to="/vestimentas">
                  CONSULTAR VESTIMENTAS
                </Link>
                <Link className="list-group-item" to="/retiros/eventos">
                  RETIROS
                </Link>
                <Link className="list-group-item" to="/haras">
                  CONSULTAR HARAS
                </Link>
                <Link className="list-group-item" to="/pelajes">
                  CONSULTAR PELAEJES
                </Link>
                <Link className="list-group-item" to="/gaceta">
                  CONSULTAR GACETA
                </Link>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
