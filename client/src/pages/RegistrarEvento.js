import React from 'react'
import { useLocation } from "react-router-dom";

const RegistrarEvento = () => {
  
  const location = useLocation();
  const {
    props: { id, fecha },
  } = location.state;
  return (
    <div>
      <p>Registrar Evento</p>
    </div>
  )
}

export default RegistrarEvento
