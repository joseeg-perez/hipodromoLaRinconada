import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Form, FormLabel, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MotivoRetiroUpdate = () => {
  const Params = useParams();
  const [nombreMotivo, setNombreMotivo] = useState("");
  const [descripcionMotivo, setDescripcionMotivo] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    console.log(Params.motivoId);
    axios
      .get(`http://localhost:5000/api/v1/motivos/${Params.motivoId}`)
      .then((res) => {
        console.log(res);
        setNombreMotivo(res.data.data[0].nombre_motivo);
        setDescripcionMotivo(res.data.data[0].descripcion_motivo);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleNombreMotivo = (event) => {
    setNombreMotivo(event.target.value);
  };
  const handleDescripcionMotivo = (event) => {
    setDescripcionMotivo(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/Motivos/${Params.motivoId}`,
        {
          nombreMotivo,
          descripcionMotivo,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(nombreMotivo, descripcionMotivo);
    setNombreMotivo("");
    setDescripcionMotivo("");
  };
  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Editar Motivo</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del Motivo</FormLabel>
              <div>
                <input
                  value={nombreMotivo}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Motivo"
                  onChange={handleNombreMotivo}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={descripcionMotivo}
                  className="form-control"
                  rows="4"
                  onChange={handleDescripcionMotivo}
                ></textarea>
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

export default MotivoRetiroUpdate;
