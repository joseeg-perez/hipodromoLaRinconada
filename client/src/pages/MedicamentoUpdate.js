import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Form, FormLabel, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MedicamentoUpdate = () => {
  const Params = useParams();
  const [nombreMedicamento, setNombreMedicamento] = useState("");
  const [descripcionMedicamento, setDescripcionMedicamento] = useState("");
  const [abrevMedicamento, setAbrevMedicamento] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    console.log(Params.medicamentoId);
    axios
      .get(`http://localhost:5000/api/v1/Medicamentos/${Params.medicamentoId}`)
      .then((res) => {
        console.log(res);
        setNombreMedicamento(res.data.data[0].nombre_medicamento);
        setDescripcionMedicamento(res.data.data[0].descripcion_medicamento);
        setAbrevMedicamento(res.data.data[0].abrev_medicamento);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleNombreMedicamento = (event) => {
    setNombreMedicamento(event.target.value);
  };
  const handleAbrevMedicamento = (event) => {
    setAbrevMedicamento(event.target.value);
  };
  const handleDescripcionMedicamento = (event) => {
    setDescripcionMedicamento(event.target.value);
  };
  const handleData = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/Medicamentos/registrar_Medicamento",
        {
          nombreMedicamento,
          abrevMedicamento,
        }
      );
    } catch (error) {
      throw error;
    }
    console.warn(nombreMedicamento, descripcionMedicamento, abrevMedicamento);
    setNombreMedicamento("");
    setAbrevMedicamento("");
    setDescripcionMedicamento("");
  };
  return (
    <Container>
      <div className="mt-3">
        <h2 className="mx-5">Editar Medicamento</h2>
        <Card className="mx-5">
          <Card.Body>
            <Form>
              <FormLabel className="fw-bold">Nombre del Medicamento</FormLabel>
              <div>
                <input
                  value={nombreMedicamento}
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Medicamento"
                  onChange={handleNombreMedicamento}
                />
              </div>
              <div className="mt-3">
                <FormLabel>Descripcion</FormLabel>
                <textarea
                  value={descripcionMedicamento}
                  className="form-control"
                  rows="4"
                  onChange={handleDescripcionMedicamento}
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

export default MedicamentoUpdate;
