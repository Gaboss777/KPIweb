import React from 'react';
import './App.css';
import Navbar from "./Components/navbar";
import Carrusel from "./Components/carousel";
import Info from "./Components/info";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrusel url="/img/banner1.jpg" />
      <Info />
    </div>
  );
}

export default App;
