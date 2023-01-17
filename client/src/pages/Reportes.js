import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Reportes = () => {
  return (
    <Container>
      <Row className="text-center">
        <h1>REPORTES</h1>
      </Row>

      <Row className="mb-3">
        <Col className="justify-content-center align-items-center mx-5">
          <Card>
            <ul className="list-group list-group-flush">
              <Link className="list-group-item" to="/jinetes">
                LISTADO DE EJEMPLARES GANADORES DE CLASICOS
              </Link>
              <Link className="list-group-item" to="/ejemplares">
                EJEMPLARES GANADORES DE LAS ULTIMAS 15 CARRERAS DEL PROGRAMA
              </Link>
              <Link className="list-group-item" to="/propietarios">
                HISTORIAL DE JINETE, CON QUE EJEMPLAR HA GANADO Y CUAL CARRERA
              </Link>
              <Link className="list-group-item" to="/studs">
                TOTAL DE APUESTAS POR TAQUILLA
              </Link>
              <Link className="list-group-item" to="/medicamentos">
                TOTAL DE APUESTAS POR TAQUILLA POR TIPO DE APUESTAS
              </Link>
              <Link className="list-group-item" to="/implementos">
                TOTAL PAGADO POR TAQUILLA POR CARRERA Y POR TIPO DE APUESTAS
              </Link>
              <Link className="list-group-item" to="/motivosRet">
                TOTAL DE VENTAS EN ENTRADAS AL RECINTO
              </Link>
              <Link className="list-group-item" to="/caballerizas">
                PROMEDIO DE USO DE LOS IMPLEMENTOS EN LAS ULTIMAS 25 CARRERAS
              </Link>
              <Link className="list-group-item" to="/veterinarios">
                IMPLEMENTOS MAS UTILIZADOS EN LAS CARRERAS DE MAYOR A MENOR
                SEGUN SU PORCENTAJE DE USO
              </Link>
              <Link className="list-group-item" to="/restaurantes">
                CARRERAS MAS FRECUENTES SEGUN SU TIPO
              </Link>
              <Link className="list-group-item" to="/eventos">
                PESO PROMEDIO DE LOS JINETES PARA LAS 25 ULTIMAS CARRERAS
              </Link>
              <Link className="list-group-item" to="">
                PROMEDIO DE EJEMPLARES QUE CORRIERON EN LAS ULTIMAS 50 CARRERAS
                SEGUN SU PELAJE
              </Link>
              <Link className="list-group-item" to="/vestimentas">
                PROMEDIO DE EJEMPLARES QUE CORRIERON EN LAS ULTIMAS 50 CARRERAS
                SEGUN SU SEXO
              </Link>
              <Link className="list-group-item" to="/retiros/eventos">
                MEJORES EJEMPLARES REMATADORES DE TODAS LAS CARRERAS SEGUN SU
                DESEMPEÑO EN LOS ULTIMOS 400 MTS DE CADA CARRERA
              </Link>
              <Link className="list-group-item" to="/haras">
                MEJORES HEMBRAS Y MACHOS EN BASE A LA CANTIDAD DE HIJOS
                GANADORES
              </Link>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Reportes;
