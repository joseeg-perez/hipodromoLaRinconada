import NavbarMenu from "./components/NavbarMenu";
import caballo1 from "./assets/caballo1.jpg";
import caballo2 from "./assets/caballo2.jpg";
import caballo3 from "./assets/caballo3.jpg";
import CardEjemplar from "./components/CardEjemplar";
import RegisterCard from "./components/RegisterCard";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import RegistrarEjemplar from "./components/PagEjemplar/RegistrarEjemplar";
import ConsultaEjemplar from "./components/ConsultaEjemplar";
import CrearRol from "./components/CrearRol";
import VerEjemplares from "./components/VerEjemplares";
import PagEj from "./components/PagEjemplar/PagEj";
import EditarEj from "./components/PagEjemplar/EditarEj";
import ModalExitoso from "./components/ModalExitoso";
import { Button, Container, Modal, Row } from "react-bootstrap";
import RangoJinete from "./components/RangoJinete";
import CrearImplemento from "./components/Implementos/CrearImplemento";
import CrearMedicamento from "./components/Medicamentos/CrearMedicamento";
import CrearMotivoRetiro from "./components/Retiros/CrearMotivoRetiro";
import CrearPelaje from "./components/Pelaje/CrearPelaje";
import CrearArea from "./components/Area/CrearArea";
import CrearRestaurante from "./components/Restaurantes/CrearRestaurante";
import CrearCuerpoDiferencia from "./components/CuerpoDiferencia/CrearCuerpoDiferencia";
import CrearCategoriaCarrera from "./components/CategoriaCarrera/CrearCategoriaCarrera";
import { CardMedicamento } from "./components/CardMedImpRetiro";
import { PagMedImpRetiro } from "./components/PagMedImpRetiro";
import { EditarMedImpRet } from "./components/EditarMedImpRet";
import { CardRestaurante } from "./components/Restaurantes/CardRestaurante";
import { PagRestautantes } from "./components/Restaurantes/PagRestautantes";
import { EditarRestaurante } from "./components/Restaurantes/EditarRestaurante";
import { CardPelaje } from "./components/Pelaje/CardPelaje";
import { PagPelaje } from "./components/Pelaje/PagPelaje";
import { PagConsultaEjemplar } from "./components/PagEjemplar/PagConsultaEjemplar";
import { CardLugar } from "./components/Lugar/CardLugar";
import { RegistrarJinete } from "./components/Jinetes/RegistrarJinete";
import { RegistrarEntrenador } from "./components/Entrenadores/RegistrarEntrenador";
import { RegistrarVeterinario } from "./components/Veterinarios/RegistrarVeterinario";
import { RegistrarPropietario } from "./components/Propietarios/RegistrarPropietario";
import { RegistrarStud } from "./components/Studs/RegistrarStud";
import CrearVestimenta from "./components/Vestimentas/CrearVestimenta";
import { ConsultaJinetes } from "./components/Jinetes/ConsultaJinetes";
import { ConsultaVeterinarios } from "./components/Veterinarios/ConsultaVeterinarios";
import { ConsultaVeterinario } from "./components/Veterinarios/ConsultaVeterinario";
import { ConsultaEntrenadores } from "./components/Entrenadores/ConsultaEntrenadores";
import { ConsultaEntrenador } from "./components/Entrenadores/ConsultaEntrenador";
import { ConsultaJinete } from "./components/Jinetes/ConsultaJinete";
import { EditarJinete } from "./components/Jinetes/EditarJinete";
import CardN from "./components/PagEjemplar/CardN";
import { ConsultaImplementos } from "./components/Implementos/ConsultaImplementos";
import { ConsultaMedicamentos } from "./components/Medicamentos/ConsultaMedicamentos";

function App() {
  const Ejemplares = [
    {
      imagen: caballo1,
      nombre: "El burlon",
      numero: 5,
      pelaje: "SuavePa",
      sexo: "M",
      padre: "Luchito",
      madre: "teresita",
      stud: "los toros del hood ",
      fecha_nac: "20/03/04",
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
      labial: 54,
      precio: 256000,
      peso: 200,
      hara: "Los altos de Cogedes",
      propietario: "Papito Suarez",
      puesto: "12 (5)",
    },
    {
      imagen: caballo2,
      nombre: "EL caballo WHITTEE",
      numero: 7,
      pelaje: "RUlos Chidos",
      sexo: "M",
      padre: "Luchito",
      madre: "teresita",
      stud: "los toros del hood ",
      fecha_nac: "20/03/04",
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
    },
    {
      imagen: caballo3,
      nombre: "TIro al blanco",
      numero: 10,
      pelaje: "Blanquito",
      sexo: "M",
      padre: "Luchito",
      madre: "teresita",
      stud: "los toros del hood ",
      fecha_nac: "20/03/04",
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
    },
  ];

  const Medicamentos = [
    {
      nombre: "Atamel",
      descripcion: "Remedio pa q no le duela el coco al caballo",
      key: 1,
    },
    {
      nombre: "Teragrip",
      descripcion: "Remedio pa los moquitos",
      key: 2,
    },
    {
      nombre: "Atamel",
      descripcion: "Remedio pa q no le duela el coco al caballo",
      key: 3,
    },
    {
      nombre: "Teragrip",
      descripcion: "Remedio pa los moquitos",
      key: 4,
    },
  ];

  const Implementos = [
    {
      nombre: "Gringolas",
      descripcion: "Pa que el caballo no se me distraiga",
      key: 5,
    },
    {
      nombre: "zapatitos",
      descripcion: "pa q no se joda las patas",
      key: 6,
    },
  ];

  const Retiros = [
    {
      nombre: "Se hizo verga",
      descripcion: "Se la mamo el caballo",
      key: 7,
    },
  ];

  const Restaurantes = [
    {
      nombre: "La casa de Pablito",
      descripcion:
        "Comida de calidad pa todos los pibes y las pibas mas chulas del condado",
      capacidad: 120,
      key: 1,
    },
    {
      nombre: "Bufalo wings",
      descripcion: "Alitas de bufalo es la especialidad de la casa papa",
      capacidad: 90,
      key: 2,
    },
    {
      nombre: "Los pollos hermanos",
      descripcion: "ay papa la comidita rapida del negro Gustavo crack Frink",
      capacidad: 200,
      key: 3,
    },
  ];

  const Pelajes = [
    {
      nombre: "SuavesitoSuavesito",
      abrev: "SS",
      key: 1,
    },
    {
      nombre: "Rulitos",
      abrev: "RUL",
      key: 2,
    },
    { nombre: "El mullet de DePaul", abrev: "RDP", key: 3 },
    { nombre: "El mullet de DePaul", abrev: "RDP", key: 3 },
    { nombre: "El mullet de DePaul", abrev: "RDP", key: 3 },
    { nombre: "El mullet de DePaul", abrev: "RDP", key: 3 },
  ];

  const Lugares = [
    {
      estado: "Distrito Capital",
      municipio: "Libertador",
      parroquia: "23 de enero",
      key: 12,
    },
    {
      estado: "Distrito Capital",
      municipio: "Libertador",
      parroquia: "Antimano",
      key: 1,
    },
    {
      estado: "Distrito Capital",
      municipio: "Libertador",
      parroquia: "Caricuao",
      key: 2,
    },
    {
      estado: "Miranda",
      municipio: "Baruta",
      parroquia: "El cafetal",
      key: 3,
    },
    {
      estado: "Miranda",
      municipio: "Baruta",
      parroquia: "Las Minas",
      key: 4,
    },
    {
      estado: "Miranda",
      municipio: "Baruta",
      parroquia: "Nuestra señora del Rosario",
      key: 5,
    },
    {
      estado: "Miranda",
      municipio: "Chacao",
      parroquia: "Chacao",
      key: 6,
    },
    {
      estado: "La Guaira",
      municipio: "Catia La Mar",
      parroquia: "Catia La Mar",
      key: 7,
    },
    {
      estado: "La Guaira",
      municipio: "Vargas",
      parroquia: "El Junko",
      key: 8,
    },
  ];

  const rangos = [
    {
      nombre: "Teniente",
      descripcion: "Los mas pros montando potricos",
      peso_min: 50,
      peso_max: 80,
      key: 1,
    },
    {
      nombre: "Veterano",
      descripcion: "Ya gano mas de 5 carreras el toro",
      peso_min: 40,
      peso_max: 70,
      key: 2,
    },
    {
      nombre: "Noobsito",
      descripcion: "Ta empezando",
      peso_min: 20,
      peso_max: 40,
      key: 3,
    },
    {
      nombre: "Nolmal",
      descripcion: "Ya tiene un pelo de experiencia",
      peso_min: 30,
      peso_max: 60,
      key: 4,
    },
  ];

  const Jinetes = [
    {
      key: 1,
      nombre1: "Falcao",
      apellido1: "Forlan",
      peso: 80,
      altura: 192,
      rango: "Pro",
      ganancia: 2560,
      edad: 23,
      ejemplar: "Bufalito toro",
      fecha_nac: "25/10/96",
      nombre2: "Gabriel",
      apellido2: "Gaviria",
    },
    {
      key: 2,
      nombre1: "Rodrigo",
      apellido1: "Paez",
      peso: 60,
      altura: 182,
      rango: "Nolmal",
      ganancia: 2560,
      edad: 23,
      ejemplar: "Bufalito toro",
      fecha_nac: "25/10/96",
      nombre2: "Gabriel",
      apellido2: "Gaviria",
    },
    {
      key: 3,
      nombre1: "Pedri",
      apellido1: "Bellingham",
      nombre2: "Gabriel",
      apellido2: "Gaviria",
      peso: 65,
      altura: 174,
      rango: "Promesa",
      ganancia: 2560,
      edad: 23,
      ejemplar: "Bufalito toro",
      fecha_nac: "25/10/96",
    },
  ];

  const Veterinarios = [
    {
      key: 1,
      nombre1: "Silvia",
      nombre2: "Carolina",
      apellido1: "Tulalula",
      apellido2: "Romana",
      fecha_nac: "20/10/1987",
      stud: "Los perritos Malvados",
      caballeriza: "23A",
    },
    {
      key: 2,
      nombre1: "Sofio",
      apellido1: "Pernia",
      stud: "Los perritos Malvados",
      caballeriza: "24C",
      nombre2: "Carolina",
      apellido2: "Romana",
      fecha_nac: "20/10/1987",
    },
    {
      key: 3,
      nombre1: "Mancito",
      apellido1: "Choclo",
      stud: "Los perritos Malvados",
      caballeriza: "2B",
      nombre2: "Carolina",
      apellido2: "Romana",
      fecha_nac: "20/10/1987",
    },
    {
      key: 4,
      nombre1: "Pepito",
      apellido1: "Chincho",
      stud: "Los perritos Malvados",
      caballeriza: "56D",
      nombre2: "Carolina",
      apellido2: "Romana",
      fecha_nac: "20/10/1987",
    },
  ];

  let columnas1 = (
    <tr>
      <th>Caballeriza</th>
      <th>Fecha inicio</th>
      <th>Fecha fin</th>
      <th>Stud</th>
    </tr>
  );
  let columnas2 = (
    <tr>
      <th>Posicion</th>
      <th>Victorias</th>
      <th>Ganancia</th>
    </tr>
  );

  let informacionJinete = [
    {
      posicion: 1,
      victorias: 102,
      ganancia: 256300,
    },
    {
      posicion: 2,
      victorias: 201,
      ganancia: 120300,
    },
    {
      posicion: 3,
      victorias: 98,
      ganancia: 85000,
    },
    {
      posicion: 4,
      victorias: 140,
      ganancia: 25560,
    },
    {
      posicion: 5,
      victorias: 50,
      ganancia: 6300,
    },
    {
      posicion: 6,
      victorias: 22,
      ganancia: 2100,
    },
  ];

  let informacionVet = [
    {
      caballeriza: "25B",
      fecha_inicio: "23/01/2013",
      fecha_fin: "24/11/2015",
      stud: "Los pollos hermanos",
    },
    {
      caballeriza: "45D",
      fecha_inicio: "27/11/2015",
      fecha_fin: "01/05/2016",
      stud: "Los Primos Gansos",
    },
    {
      caballeriza: "2A",
      fecha_inicio: "05/07/2016",
      fecha_fin: "20/10/2019",
      stud: "Los toros cali",
    },
    {
      caballeriza: "23A",
      fecha_inicio: "08/12/2019",
      fecha_fin: "ACTUAL",
      stud: "Los perritos malvados",
    },
  ];

  return (
    <div>
      {/* <NavbarMenu />
      <Login />
      <RegisterCard />
      <SearchBar /> */}
      {/* <VerEjemplares ejemplares={Ejemplares} id="ejemplares" /> */}
      {/* <CardEjemplar ejemplares={Ejemplares} id="ejemplares" /> */}
      {/* <RegistrarEjemplar /> */}
      {/* <EditarEjemplar ejemplar={Ejemplares} /> */}
      {/* <CrearRol /> */}
      {/* <Row className="row-cols-2 mx-5">
        {Ejemplares.map((ejemplar) => (
          <CardN
            key={ejemplar.nombre}
            imagen={ejemplar.imagen}
            nombre={ejemplar.nombre}
            numero={ejemplar.numero}
            pelaje={ejemplar.pelaje}
            sexo={ejemplar.sexo}
            padre={ejemplar.padre}
            madre={ejemplar.madre}
            stud={ejemplar.stud}
            fecha_nac={ejemplar.fecha_nac}
            entrenador={ejemplar.entrenador}
            mejorPos={ejemplar.mejorPos}
            cantidad2do={ejemplar.cantidad2do}
            ganancia={ejemplar.ganancia}
          />
        ))}
      </Row> */}
      {/* <PagEj /> */}
      {/* <EditarEj
        key={Ejemplares[0].nombre}
        imagen={Ejemplares[0].imagen}
        nombre={Ejemplares[0].nombre}
        numero={Ejemplares[0].numero}
        pelaje={Ejemplares[0].pelaje}
        sexo={Ejemplares[0].sexo}
        padre={Ejemplares[0].padre}
        madre={Ejemplares[0].madre}
        stud={Ejemplares[0].stud}
        fecha_nac={Ejemplares[0].fecha_nac}
        entrenador={Ejemplares[0].entrenador}
        mejorPos={Ejemplares[0].mejorPos}
        cantidad2do={Ejemplares[0].cantidad2do}
        ganancia={Ejemplares[0].ganancia}
        tatLabial={Ejemplares[0].labial}
        precio={Ejemplares[0].precio}
        peso={Ejemplares[0].peso}
        propietario={Ejemplares[0].propietario}
        hara={Ejemplares[0].hara}
        puesto={Ejemplares[0].puesto}
      /> */}
      <CrearImplemento />
      <CrearMedicamento />
      {/* <RangoJinete /> */}
      {/* <CrearMotivoRetiro />
      <CrearPelaje />
      <CrearArea />
      <CrearCuerpoDiferencia />
      <CrearCategoriaCarrera /> */}
      {/* <CrearRestaurante />
      <PagRestautantes restaurantes={Restaurantes} />
      <EditarRestaurante
        nombre={Restaurantes[0].nombre}
        descripcion={Restaurantes[0].descripcion}
        capacidad={Restaurantes[0].capacidad}
        key={Restaurantes[0].key}
      /> */}
      {/* <PagMedImpRetiro items={Medicamentos} titulo={"Medicamentos"} /> */}
      {/* <PagMedImpRetiro items={Implementos} titulo={"Implementos"} /> */}
      <ConsultaImplementos />
      <ConsultaMedicamentos />
      {/* <PagMedImpRetiro items={Retiros} titulo={"Retiros"} /> */}
      {/* <EditarMedImpRet
        nombre={Implementos[0].nombre}
        descripcion={Implementos[0].descripcion}
        titulo={"Editar Implemento"}
      /> */}
      {/* <PagPelaje pelajes={Pelajes} /> */}
      {/* <PagConsultaEjemplar ejemplares={Ejemplares} /> */}
      {/* <CardLugar lugares={Lugares} /> */}
      {/* <RegistrarJinete /> */}
      {/* <RegistrarEntrenador /> */}
      {/* <RegistrarVeterinario />
      <RegistrarPropietario lugares={Lugares} />
      <RegistrarStud />
      <CrearVestimenta /> */}
      {/* <ConsultaJinetes jinetes={Jinetes} /> */}
      {/* <ConsultaVeterinarios veterinarios={Veterinarios} /> */}
      {/* <ConsultaVeterinario
        key={Veterinarios[0].key}
        nombre1={Veterinarios[0].nombre1}
        apellido1={Veterinarios[0].apellido1}
        nombre2={Veterinarios[0].nombre2}
        apellido2={Veterinarios[0].apellido2}
        fecha_nac={Veterinarios[0].fecha_nac}
        stud={Veterinarios[0].stud}
        caballeriza={Veterinarios[0].caballeriza}
        columnas={columnas1}
        info={informacionVet}
      /> */}
      {/* <ConsultaEntrenadores entrenadores={Veterinarios} />
      <ConsultaEntrenador
        key={Veterinarios[0].key}
        nombre1={Veterinarios[0].nombre1}
        apellido1={Veterinarios[0].apellido1}
        nombre2={Veterinarios[0].nombre2}
        apellido2={Veterinarios[0].apellido2}
        fecha_nac={Veterinarios[0].fecha_nac}
        stud={Veterinarios[0].stud}
        caballeriza={Veterinarios[0].caballeriza}
        columnas={columnas1}
        info={informacionVet}
      /> */}
      {/* <ConsultaJinetes jinetes={Jinetes} /> */}
      {/* <ConsultaJinete
        key={Jinetes[0].key}
        nombre1={Jinetes[0].nombre1}
        apellido1={Jinetes[0].apellido1}
        peso={Jinetes[0].peso}
        altura={Jinetes[0].altura}
        rango={Jinetes[0].rango}
        ganancia={Jinetes[0].ganancia}
        edad={Jinetes[0].edad}
        ejemplar={Jinetes[0].ejemplar}
        fecha_nac={Jinetes[0].fecha_nac}
        columnas={columnas2}
        info={informacionJinete}
      /> */}
      {/* <EditarJinete
        key={Jinetes[2].key}
        nombre1={Jinetes[2].nombre1}
        apellido1={Jinetes[2].apellido1}
        nombre2={Jinetes[2].nombre2}
        apellido2={Jinetes[2].apellido2}
        peso={Jinetes[2].peso}
        altura={Jinetes[2].altura}
        rango={Jinetes[2].rango}
        ganancia={Jinetes[2].ganancia}
        edad={Jinetes[2].edad}
        ejemplar={Jinetes[2].ejemplar}
        fecha_nac={Jinetes[2].fecha_nac}
      /> */}
    </div>
  );
}

export default App;
