import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Card,
  Form,
  FormLabel,
  Col,
  Button,
} from "react-bootstrap";
import CardLugarEdit from "../componentes/layout/CardLugarEdit";
import CardTelefono from "../componentes/layout/CardTelefono";
import axios from "axios";
import { useParams } from "react-router-dom";

const HaraUpdate = (props) => {
  const [nombreHara, setnombreHara] = useState("");
  const [fk_Lugar, setfk_Lugar] = useState("");
  const [isLoading, setLoading] = useState(true);
  const Params = useParams();
  useEffect(() => {
    console.log(Params.haraId);
    axios
      .get(`http://localhost:5000/api/v1/haras/${Params.haraId}`)
      .then((res) => {
        console.log(res);
        setnombreHara(res.data.data[0].nombre_hara);
        setfk_Lugar(res.data.data[0].fk_lugar);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handlenombre = (event) => {
    setnombreHara(event.target.value);
  };

  var fkLugar;
  const handleLugar = (enteredLugar) => {
    fkLugar = enteredLugar;
    console.log(fkLugar);
  };

  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/api/v1/haras/${Params.haraId}`, {
        nombreHara,
        fkLugar,
      });
    } catch (error) {
      throw error;
    }
    console.warn(nombreHara, fkLugar);
    setnombreHara("");
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mx-5 mt-3">
          <Card.Body className="px-4">
            <Form>
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registro de Hara
              </h3>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="mb-3 form-floating">
                    <input
                      value={nombreHara}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={handlenombre}
                    />
                    <FormLabel>Nombre del Hara</FormLabel>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <CardLugarEdit onSaveLugar={handleLugar} lugar={fk_Lugar} />
              <Button
                className="mb-4 mt-4 btn-success"
                size="lg"
                type="submit"
                onClick={handleData}
              >
                Confirmar cambios
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default HaraUpdate;
