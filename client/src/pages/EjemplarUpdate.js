import React, { useState } from "react";
import { Button, FormLabel } from "react-bootstrap";

const EjemplarUpdate = () => {
  const [imagenEjemplar, setImagenEjemplar] = useState();

  const handleImagen = (event) => {
    setImagenEjemplar(event.target.value);
  };
  const handleData = (event) => {
    console.log(imagenEjemplar);
  };
  return (
    <div>
      <FormLabel>Imagen</FormLabel>
      <input
        value={imagenEjemplar}
        className="form-control"
        type="file"
        id="formFile"
        onChange={handleImagen}
      />
      <Button onClick={handleData}>pa</Button>
    </div>
  );
};

export default EjemplarUpdate;
