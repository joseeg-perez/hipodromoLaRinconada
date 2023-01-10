import React from "react";
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
import SimbolosPartnes from "../layout/SimbolosPartnes";
import bar from "../../assets/bar.svg";
const Contacto = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="px-4">
          <Card.Body>
            <Row>
              <h4 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-1">
                ACERCA DE NOSOTROS...
              </h4>
            </Row>

            <Row>
              <div className="text-center">
                <h6 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-1">
                  Nuestros Partners
                </h6>
              </div>

              <div className="text-center">
                <SimbolosPartnes></SimbolosPartnes>
              </div>

              <div className="text-center">
                <h6 className="mb-4 pb-2 pb-md-0 mb-md-1">
                  Contactanos:0424-2333584/-/hipodromoLosPibes@gmail.com
                </h6>
              </div>
            </Row>

            <Row className="align-items-center px-5">
              <Col  className="text-center">
                <Button className="mb-2 mt-4 px-4" size="lg" disabled={true}>
                  Acerca de nuestras <br></br>instalaciones
                </Button>
              </Col>

              <Col  className="text-center">
                <Button className="mb-2 mt-4 px-4" size="lg" disabled={true}>
                  Acerca de nuestra <br></br>historia
                </Button>
              </Col>
            </Row>

            <Row>
              <div className="text-center">
                <Button className="mb-1 mt-4" size="lg" disabled={true}>
                  Nuestros Restaurantes
                </Button>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Contacto;
