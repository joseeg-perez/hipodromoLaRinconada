import React,{useEffect} from "react";
import axios from "axios";

const Reporte4 = () => {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/reportes/apuestas_por_taquilla`)
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>
    <script>
        {window.location.href = `http://localhost:5000/api/v1/reportes/apuestas_por_taquilla`}
    </script>
    
  </div>;
};

export default Reporte4;
