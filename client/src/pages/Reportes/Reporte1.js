import React,{useEffect} from 'react'

const Reporte1 = () => {
 
  return (
    <div>
      <script>
        {
          (window.location.href = `http://localhost:5000/api/v1/reportes/ejemplares_ganadores_clasicos`)
        }
      </script>
    </div>
  )
}

export default Reporte1
