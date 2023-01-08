import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Form, FormLabel, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PelajeUpdate = () => {
  const Params = useParams();
  const [nombrePelaje, setNombrePelaje] = useState("");
  const [abrevPelaje, setAbrevPelaje] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/pelajes/${Params.pelajeId}`)
      .then((res) => {
        console.log(res);
        setNombrePelaje(res.data.data[0].nombre_pelaje);
        setAbrevPelaje(res.data.data[0].abrev_pelaje);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleNombrePelaje = (event) => {
    setNombrePelaje(event.target.value);
  };
  const handleAbrevPelaje = (event) => {
    setAbrevPelaje(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/pelajes/registrar_pelaje",
        {
          nombrePelaje,
          abrevPelaje,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(nombrePelaje, abrevPelaje);
    setNombrePelaje("");
    setAbrevPelaje("");
  };
  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Editar Pelaje</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del Pelaje</FormLabel>
              <div>
                <input
                  value={nombrePelaje}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Pelaje"
                  onChange={handleNombrePelaje}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Abreviatura del Pelaje</FormLabel>
                <div>
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    value={abrevPelaje}
                    maxLength={3}
                    onChange={handleAbrevPelaje}
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

export default PelajeUpdate;
