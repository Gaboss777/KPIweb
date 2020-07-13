import React from "react";
import Navbar from "../Components/navbar";
import { Carrusel } from "../Components/carousel";
import Info from "../Components/info"

function Inicio(){
    return(
        <div>
            <Navbar />
            <Carrusel />
            <Info />
        </div>
    )
}

export default Inicio