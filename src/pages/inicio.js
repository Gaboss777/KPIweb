import React from "react";
import NavKPI from "../Components/navbar";
import {Banner, MBanner} from '../Components/banner'

function Inicio(){
    return(
        <div>
            <NavKPI />
            <Banner />
            <MBanner />
        </div>
    )
}

export default Inicio