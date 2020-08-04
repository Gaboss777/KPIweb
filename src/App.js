import React from 'react';
import Inicio from "./pages/inicio";
import NosotrosKPI from './pages/kpi';
import NavKPI from "./Components/navbar";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Estilos/App.css';
import './Estilos/Responsive.css';
import './Estilos/efectos.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavKPI />
        <Switch>
          <Route component={Inicio} path='/' />
          <Route component={NosotrosKPI} path='/kpi' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
