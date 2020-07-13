import React from "react";
import BannerCuatro from "../img/Banner4.jpeg";
import BannerDos from "../img/banner2.jpg";
import BannerTres from "../img/Banner3.jpg";
import Listcarrusel from "./carouselList"

export const Carrusel = () => {
    const data = [{
        "id": 1,
        "bannerImg": BannerCuatro,
        "bannerTitle": "First slide label.",
        "bannerText": "Nulla vitae elit libero, a pharetra augue mollis interdum",
    },{
        "id": 2,
        "bannerImg": BannerDos,
        "bannerTitle": "Second slide label.",
        "bannerText": "Nulla vitae elit libero, a pharetra augue mollis interdum",
    },{
        "id": 3,
        "bannerImg": BannerTres,
        "bannerTitle": "Third slide label.",
        "bannerText": "Nulla vitae elit libero, a pharetra augue mollis interdum",
    }]
    
    return(
        <Listcarrusel
            carruselList={data}
        />
    )
}