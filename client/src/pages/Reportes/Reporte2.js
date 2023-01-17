import React from 'react'

const Reporte2 = () => {
  return (
    <div>
      <script>
        {
          (window.location.href = `http://localhost:5000/api/v1/reportes/ganadores_ultimas_15`)
        }
      </script>
    </div>
  )
}

export default Reporte2
