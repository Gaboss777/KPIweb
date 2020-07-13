import React from "react";
import { Carousel, Image } from "react-bootstrap"

function Listcarrusel (props) {
    return(
        <Carousel>
        {props.carruselList.map((CList) =>
            <Carousel.Item key={CList.id}>
                <Image src={CList.bannerImg} className="d-block carrusel-img"/>
                <Carousel.Caption className="caption-carrusel">
                    <h3>{CList.bannerTitle}</h3>
                    <p>{CList.bannerText}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )}
        </Carousel>
    )
}

export default Listcarrusel