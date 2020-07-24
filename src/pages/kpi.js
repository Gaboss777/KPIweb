import React from "react";
import NavKPI from "../Components/navbar";
import {Banner, MBanner} from '../Components/banner';
import Banner1 from '../img/Banner3.jpg';

function NosotrosKPI(){
    return(
        <div>
            <NavKPI />
            <Banner 
                bgImg={Banner1}
                titleH2='NOSOTROS KPI'
            />
            <MBanner
                row
                tittle='Acerca de Nostros'
                text='Sunt eiusmod proident eu voluptate exercitation irure culpa aliqua commodo. Occaecat sunt exercitation aliquip velit aliqua incididunt nisi ullamco exercitation sit. Laboris Lorem dolor amet proident et eu velit magna. Excepteur consequat eu non qui voluptate id pariatur ullamco irure dolor pariatur sit sunt commodo. Nostrud commodo excepteur eiusmod ut adipisicing adipisicing Lorem.'
            />
        </div>
    )
}

export default NosotrosKPI