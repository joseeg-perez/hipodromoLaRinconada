import React from "react";
import Layout from "./componentes/layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Principal from "./pages/Principal";
import Apuestas from "./pages/Apuestas";
import Menu from "./pages/Menu";
import Ejemplares from "./pages/Ejemplares";
import Entrenadores from "./pages/Entrenadores";
import Eventos from "./pages/Eventos";
import Jinetes from "./pages/Jinetes";
import Perfil from "./pages/Perfil";
import Propietarios from "./pages/Propietarios";
import Resultados from "./pages/Resultados";
import Studs from "./pages/Studs";
import StudDetail from "./pages/StudDetail";
import StudUpdate from "./pages/StudUpdate";
import Caballerizas from "./pages/Caballerizas";
import CaballerizaDetail from "./pages/CaballerizaDetail";
import CaballerizaRegistrar from "./components/CaballerizaRegistrar";
import ResultadoEvento from "./pages/ResultadoEvento";
import ResultadoAgregar from "./pages/ResultadoAgregar";
import CarrerasEvento from "./pages/CarrerasEvento";
import RegistrarEvento from "./pages/RegistrarEvento";
import InscribirEjemplar from "./pages/InscribirEjemplar";
import { EjemplarDetail } from "./pages/EjemplarDetail";
import EjemplarUpdate from "./pages/EjemplarUpdate";
import JineteDetail from "./pages/JineteDetail";
import JineteUpdate from "./pages/JineteUpdate";
import JineteAgregar from "./pages/JineteAgregar";
import EjemplarAgregar from "./pages/EjemplarAgregar";
import Medicamentos from "./pages/Medicamentos";
import MedicamentoAgregar from "./pages/MedicamentoAgregar";
import Implementos from "./pages/Implementos";
import ImplementoAgregar from "./pages/ImplementoAgregar";
import MotivosRetiro from "./pages/MotivosRetiro";
import MotivoRetiroAgregar from "./pages/MotivoRetiroAgregar";
import PropietariosAgregar from "./pages/PropietarioAgregar";
import PropietarioAgregar from "./pages/PropietarioAgregar";
import VestimentaAgregar from "./pages/VestimentaAgregar";
import CarreraUpdate from "./pages/CarreraUpdate";
import RegistrarCarrera from "./pages/RegistrarCarrera";
import EventosRetirar from "./pages/EventosRetirar";
import RetirarEjemplar from "./pages/RetirarEjemplar";
import PropietarioUpdate from "./pages/PropietarioUpdate";
import PropietarioDetail from "./pages/PropietarioDetail";
import EntrenadorAgregar from "./pages/EntrenadorAgregar";
import Veterinarios from "./pages/Veterinarios";
import VeterinarioAgregar from "./pages/VeterinarioAgregar";
import VeterinarioUpdate from "./pages/VeterinarioUpdate";
import VeterinarioDetail from "./pages/VeterinarioDetail";
import StudAgregar from "./pages/StudAgregar";
import Restaurantes from "./pages/Restaurantes";
import RestauranteAgregar from "./pages/RestauranteAgregar";
import Haras from "./pages/Haras";
import HaraAgregar from "./pages/HaraAgregar";
import HaraUpdate from "./pages/HaraUpdate";
import CaballerizaAgregar from "./pages/CaballerizaAgregar";
import RestauranteUpdate from "./pages/RestauranteUpdate";
import Pelajes from "./pages/Pelajes";
import PelajeAgregar from "./pages/PelajeAgregar";
import Vestimentas from "./pages/Vestimentas";
import EntrenadorUpdate from "./pages/EntrenadorUpdate";
import PelajeUpdate from "./pages/PelajeUpdate";
import ImplementoUpdate from "./pages/ImplementoUpdate";
import MedicamentoUpdate from "./pages/MedicamentoUpdate";
import MotivoRetiroUpdate from "./pages/MotivoRetiroUpdate";
import Login from "./pages/Login";
import RegisterCard from "./pages/RegisterCard";
import EntrenadorDetail from "./pages/EntrenadorDetail";
import Gaceta from "./pages/Gaceta";
import GacetaEvento from "./pages/GacetaEvento";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/principal"></Redirect>
        </Route>

        <Route path="/principal">
          <Principal></Principal>
        </Route>

        <Route path="/apuestas">
          <Apuestas></Apuestas>
        </Route>

        <Route path="/menu">
          <Menu></Menu>
        </Route>

        <Route path="/ejemplares" exact>
          <Ejemplares></Ejemplares>
        </Route>

        <Route path="/registrar">
          <RegisterCard></RegisterCard>
        </Route>

        <Route path="/ejemplares/createEjemplar" exact>
          <EjemplarAgregar></EjemplarAgregar>
        </Route>

        <Route path="/ejemplares/:ejemplarId" exact>
          <EjemplarDetail></EjemplarDetail>
        </Route>

        <Route path="/ejemplares/:ejemplarId/updateEjemplar" exact>
          <EjemplarUpdate></EjemplarUpdate>
        </Route>

        <Route path="/entrenadores" exact>
          <Entrenadores></Entrenadores>
        </Route>

        <Route path="/entrenadores/createEntrenador" exact>
          <EntrenadorAgregar></EntrenadorAgregar>
        </Route>

        <Route path="/entrenadores/:entrenadorId" exact>
          <EntrenadorDetail></EntrenadorDetail>
        </Route>

        <Route path="/entrenadores/:entrenadorId/updateEntrenador" exact>
          <EntrenadorUpdate></EntrenadorUpdate>
        </Route>

        <Route path="/veterinarios" exact>
          <Veterinarios></Veterinarios>
        </Route>

        <Route path="/veterinarios/:veterinarioId/updateVeterinario" exact>
          <VeterinarioUpdate></VeterinarioUpdate>
        </Route>

        <Route path="/veterinarios/createVeterinario" exact>
          <VeterinarioAgregar></VeterinarioAgregar>
        </Route>

        <Route path="/veterinarios/:veterinarioId" exact>
          <VeterinarioDetail></VeterinarioDetail>
        </Route>

        <Route path="/eventos" exact>
          <Eventos></Eventos>
        </Route>

        <Route path="/jinetes" exact>
          <Jinetes></Jinetes>
        </Route>

        <Route path="/jinetes/createJinete" exact>
          <JineteAgregar></JineteAgregar>
        </Route>

        <Route path="/jinetes/:jineteId" exact>
          <JineteDetail></JineteDetail>
        </Route>

        <Route path="/jinetes/:jineteId/updateJinete" exact>
          <JineteUpdate></JineteUpdate>
        </Route>

        <Route path="/perfil">
          <Login></Login>
        </Route>

        <Route path="/propietarios" exact>
          <Propietarios></Propietarios>
        </Route>

        <Route path="/propietarios/createPropietario" exact>
          <PropietarioAgregar></PropietarioAgregar>
        </Route>

        <Route path="/propietarios/:propietarioId" exact>
          <PropietarioDetail></PropietarioDetail>
        </Route>

        <Route path="/propietarios/:propietarioId/updatePropietario" exact>
          <PropietarioUpdate></PropietarioUpdate>
        </Route>

        <Route path="/resultados" exact>
          <Resultados></Resultados>
        </Route>

        <Route path="/studs" exact>
          <Studs></Studs>
        </Route>

        <Route path="/studs/createStud" exact>
          <StudAgregar></StudAgregar>
        </Route>

        <Route path="/studs/:studId" exact>
          <StudDetail></StudDetail>
        </Route>

        <Route path="/studs/:studId/updateStud">
          <StudUpdate></StudUpdate>
        </Route>

        <Route path="/caballerizas" exact>
          <Caballerizas></Caballerizas>
        </Route>

        <Route path="/caballerizas/:caballerizaId" exact>
          <CaballerizaDetail></CaballerizaDetail>
        </Route>

        <Route path="/caballeriza/createCaballeriza" exact>
          <CaballerizaAgregar></CaballerizaAgregar>
        </Route>

        <Route path="/medicamentos" exact>
          <Medicamentos></Medicamentos>
        </Route>

        <Route path="/medicamentos/agregar" exact>
          <MedicamentoAgregar></MedicamentoAgregar>
        </Route>

        <Route path="/medicamentos/:medicamentoId/updateMedicamento" exact>
          <MedicamentoUpdate></MedicamentoUpdate>
        </Route>

        <Route path="/implementos" exact>
          <Implementos></Implementos>
        </Route>

        <Route path="/implementos/agregar" exact>
          <ImplementoAgregar></ImplementoAgregar>
        </Route>

        <Route path="/implementos/:implementoId/updateImplemento" exact>
          <ImplementoUpdate></ImplementoUpdate>
        </Route>

        <Route path="/motivosRet" exact>
          <MotivosRetiro></MotivosRetiro>
        </Route>

        <Route path="/motivosRet/agregar" exact>
          <MotivoRetiroAgregar></MotivoRetiroAgregar>
        </Route>

        <Route path="/motivosRet/:motivoId/updateMotivo" exact>
          <MotivoRetiroUpdate></MotivoRetiroUpdate>
        </Route>

        <Route path="/restaurantes" exact>
          <Restaurantes></Restaurantes>
        </Route>

        <Route path="/restaurantes/createRestaurante" exact>
          <RestauranteAgregar></RestauranteAgregar>
        </Route>

        <Route path="/restaurantes/:restauranteId/updateRestaurante" exact>
          <RestauranteUpdate></RestauranteUpdate>
        </Route>

        <Route path="/resultados/:eventoId">
          <ResultadoEvento></ResultadoEvento>
        </Route>

        <Route path="/carreras/:eventoId" exact>
          <CarrerasEvento></CarrerasEvento>
        </Route>

        <Route path="/resultado/agregar">
          <ResultadoAgregar></ResultadoAgregar>
        </Route>

        <Route path="/evento/registrar/:idEvento" exact>
          <RegistrarEvento></RegistrarEvento>
        </Route>

        <Route path="/inscribir/ejemplar/:carreraId">
          <InscribirEjemplar></InscribirEjemplar>
        </Route>

        <Route path="/vestimentas" exact>
          <Vestimentas></Vestimentas>
        </Route>

        <Route path="/vestimentas/createVestimenta" exact>
          <VestimentaAgregar></VestimentaAgregar>
        </Route>

        <Route path="/carrera/:carreraId/update" exact>
          <CarreraUpdate></CarreraUpdate>
        </Route>

        <Route path="/carrera/crear">
          <RegistrarCarrera></RegistrarCarrera>
        </Route>

        <Route path="/retiros/eventos" exact>
          <EventosRetirar></EventosRetirar>
        </Route>

        <Route path="/retiros/carrera/:carreraId" exact>
          <RetirarEjemplar></RetirarEjemplar>
        </Route>

        <Route path="/haras" exact>
          <Haras></Haras>
        </Route>

        <Route path="/haras/createHara" exact>
          <HaraAgregar></HaraAgregar>
        </Route>

        <Route path="/haras/:haraId/updateHara" exact>
          <HaraUpdate></HaraUpdate>
        </Route>

        <Route path="/pelajes" exact>
          <Pelajes></Pelajes>
        </Route>

        <Route path="/pelajes/createPelaje" exact>
          <PelajeAgregar></PelajeAgregar>
        </Route>

        <Route path="/pelajes/:pelajeId/updatePelaje" exact>
          <PelajeUpdate></PelajeUpdate>
        </Route>

        <Route path="/haras/updateHara" exact>
          <HaraUpdate></HaraUpdate>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/gaceta" exact>
          <Gaceta></Gaceta>
        </Route>

        <Route path="/gaceta/:eventoId">
          <GacetaEvento></GacetaEvento>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
