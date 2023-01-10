import React from 'react'
import {
    Container,
    Card,
    Form,
    FormLabel,
    Row,
    Col,
    Button,
    FormCheck,
    FormGroup,
    FormSelect,
    FormControl,
  } from "react-bootstrap";
  import fotoEvento from "../../assets/prox-evento.jpg";
const Eventos = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card>
          
          <Card.Body className="px-4">
            <Row className="align-items-center">
              <Col md="6">
                <img src={fotoEvento} alt="/" width={620} height={400} />
              </Col>

              <Col className="align-items-center m-lg-4">
                <div className="text-center">
                  <Button className="mb-4 mt-4" size="lg" disabled={true}>
                    Comprar Tickets
                  </Button>
                </div>

                <div className="text-center">
                  <Button className="mb-4 mt-4" size="lg" disabled={true}>
                    Ver Carreras
                  </Button>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center">
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                SIGUIENTE EVENTO: 1/10/2022
              </h3>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default Eventos
