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
import CaballerizaRegistrar from "./pages/CaballerizaRegistrar";
import ResultadoEvento from "./pages/ResultadoEvento";
import ResultadoAgregar from "./pages/ResultadoAgregar";
import CarrerasEvento from "./pages/CarrerasEvento";
import RegistrarEvento from "./pages/RegistrarEvento";
import InscribirEjemplar from "./pages/InscribirEjemplar";
import { EjemplarDetail } from "./pages/EjemplarDetail";
import { EjemplarUpdate } from "./pages/EjemplarUpdate";
import JineteDetail from "./pages/JineteDetail";
import JineteUpdate from "./pages/JineteUpdate";
import JineteAgregar from "./pages/JineteAgregar";

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

        <Route path="/ejemplares/:ejemplarId" exact>
          <EjemplarDetail></EjemplarDetail>
        </Route>

        <Route path="/ejemplares/:ejemplarId/updateEjemplar">
          <EjemplarUpdate></EjemplarUpdate>
        </Route>

        <Route path="/entrenadores">
          <Entrenadores></Entrenadores>
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
          <Perfil></Perfil>
        </Route>

        <Route path="/propietarios">
          <Propietarios></Propietarios>
        </Route>

        <Route path="/resultados" exact>
          <Resultados></Resultados>
        </Route>

        <Route path="/studs" exact>
          <Studs></Studs>
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

        <Route path="/caballeriza/agregar" exact>
          <CaballerizaRegistrar></CaballerizaRegistrar>
        </Route>

        <Route path="/resultados/:eventoId">
          <ResultadoEvento></ResultadoEvento>
        </Route>

        <Route path="/carreras/:eventoId">
          <CarrerasEvento></CarrerasEvento>
        </Route>

        <Route path="/resultado/agregar">
          <ResultadoAgregar></ResultadoAgregar>
        </Route>

        <Route path="/evento/registrar/:idEvento" exact>
          <RegistrarEvento></RegistrarEvento>
        </Route>

        <Route path="/inscribir/ejemplar">
          <InscribirEjemplar></InscribirEjemplar>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
