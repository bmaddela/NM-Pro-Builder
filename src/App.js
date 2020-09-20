import React from 'react';
import { Switch, Route } from 'react-router-dom'

//layouts
import MainLayout from './layouts/MainLayout';
//pages
import Homepage from './pages/Homepage';
import Construction from './pages/Construction'
import './default.scss';
import Interior from './pages/Interior';
import ContractsAndDevelopment from './pages/ContractsAndDevelopment';
import RenovationAndHomeRepair from './pages/RenovationAndHomeRepair';
import BuildingMaterialSupplies from './pages/BuildingMaterialSupplies';
import CivilAssociates from './pages/CivilAssociates';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" render={() => (
            <MainLayout>
              <Homepage/>
            </MainLayout>
          )}/>
          <Route path="/construction" render={() => (
            <MainLayout>
              <Construction/>
            </MainLayout>
          )}/>
          <Route path="/contracts-and-developments" render={() => (
            <MainLayout>
              <ContractsAndDevelopment/>
            </MainLayout>
          )}/>
          <Route path="/renovation-and-home-repair" render={() => (
            <MainLayout>
              <RenovationAndHomeRepair/>
            </MainLayout>
          )}/>
          <Route path="/interior" render={() => (
            <MainLayout>
              <Interior/>
            </MainLayout>
          )}/>
          <Route path="/building-material-supplies" render={() => (
            <MainLayout>
              <BuildingMaterialSupplies/>
            </MainLayout>
          )}/>
          <Route path="/civil-associates" render={() => (
            <MainLayout>
              <CivilAssociates/>
            </MainLayout>
          )}/>
        </Switch>
    </div>
  );
}

export default App;
