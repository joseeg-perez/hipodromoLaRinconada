import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Form, FormLabel, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ImplementoUpdate = () => {
  const Params = useParams();
  const [nombreImplemento, setNombreImplemento] = useState("");
  const [descripcionImplemento, setDescripcionImplemento] = useState("");
  const [abrevImplemento, setAbrevImplemento] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    console.log(Params.implementoId);
    axios
      .get(`http://localhost:5000/api/v1/implementos/${Params.implementoId}`)
      .then((res) => {
        console.log(res);
        setNombreImplemento(res.data.data[0].nombre_implemento);
        setDescripcionImplemento(res.data.data[0].descripcion_implemento);
        setAbrevImplemento(res.data.data[0].abrev_implemento);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleNombreImplemento = (event) => {
    setNombreImplemento(event.target.value);
  };
  const handleAbrevImplemento = (event) => {
    setAbrevImplemento(event.target.value);
  };
  const handleDescripcionImplemento = (event) => {
    setDescripcionImplemento(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/Implementos/registrar_Implemento",
        {
          nombreImplemento,
          abrevImplemento,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(nombreImplemento, descripcionImplemento, abrevImplemento);
    setNombreImplemento("");
    setAbrevImplemento("");
    setDescripcionImplemento("");
  };
  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Editar Implemento</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del implemento</FormLabel>
              <div>
                <input
                  value={nombreImplemento}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Implemento"
                  onChange={handleNombreImplemento}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={descripcionImplemento}
                  className="form-control"
                  rows="4"
                  onChange={handleDescripcionImplemento}
                ></textarea>
              </div>
              <div className="mt-3">
                <FormLabel>Abreviatura del Implemento</FormLabel>
                <div>
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    value={abrevImplemento}
                    maxLength={3}
                    onChange={handleAbrevImplemento}
                  ></input>
                </div>
              </div>
            </Form>
            <Button
              className="mt-3 float-end btn-success"
              size="lg"
              type="submit"
              onClick={handleData}
            >
              Confirmar cambios
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ImplementoUpdate;
