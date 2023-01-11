import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Form, FormLabel, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ImplementoUpdate = () => {
  const Params = useParams();
  const [nombreImplemento, setNombreImplemento] = useState("");
  const [descripcionImplemento, setDescripcionImplemento] = useState("");
  const [abreviacionImplemento, setAbreviacionImplemento] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    console.log(Params.implementoId);
    axios
      .get(`http://localhost:5000/api/v1/implementos/${Params.implementoId}`)
      .then((res) => {
        console.log(res);
        setNombreImplemento(res.data.data[0].nombre_implemento);
        setDescripcionImplemento(res.data.data[0].descripcion_implemento);
        setAbreviacionImplemento(res.data.data[0].abrev_implemento);
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
  const handleAbreviacionImplemento = (event) => {
    setAbreviacionImplemento(event.target.value);
  };
  const handleDescripcionImplemento = (event) => {
    setDescripcionImplemento(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/Implementos/${Params.implementoId}`,
        {
          nombreImplemento,
          descripcionImplemento,
          abreviacionImplemento,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(
      nombreImplemento,
      descripcionImplemento,
      abreviacionImplemento
    );
    setNombreImplemento("");
    setAbreviacionImplemento("");
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
                <FormLabel>Abreviacioniatura del Implemento</FormLabel>
                <div>
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    value={abreviacionImplemento}
                    maxLength={3}
                    onChange={handleAbreviacionImplemento}
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
