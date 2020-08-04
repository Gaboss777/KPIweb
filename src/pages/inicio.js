import React from "react";
import { Banner, MBanner } from '../Components/banner';
import { Container, Row } from 'react-bootstrap';
import { ImagenCircle, TextCircle, InfoTitle } from '../Components/info';
import { Banner1, Laptop2, Soporte1, Redes1, CCTV  } from '../img/imgindex';
import { Footer } from '../Components/footer';

function Inicio(){
    return(
        <div>
            <Banner
                img={Banner1}
                titleH1='Tu mejor opcion en'
                titleH2='Soluciones Tecnologicas'
            />
            <MBanner
                tittle='Bienvenidos'
                text='Sunt eiusmod proident eu voluptate exercitation irure culpa aliqua commodo. Occaecat sunt exercitation aliquip velit aliqua incididunt nisi ullamco exercitation sit. Laboris Lorem dolor amet proident et eu velit magna. Excepteur consequat eu non qui voluptate id pariatur ullamco irure dolor pariatur sit sunt commodo. Nostrud commodo excepteur eiusmod ut adipisicing adipisicing Lorem.'
                btnInfo='CONTACTANOS'
            />
            <Container fluid className='w-75'>
                <InfoTitle titleInfo='SERVICIOS'/>
                <Row className='my-5'>
                    <ImagenCircle img={Soporte1} />
                    <TextCircle 
                        titleInfo='Soporte Tecnico'
                        textInfo='Reprehenderit laboris dolor pariatur labore deserunt qui nulla eiusmod reprehenderit ex laboris adipisicing magna. Quis dolore elit cupidatat adipisicing nulla elit. Irure culpa reprehenderit dolore nostrud Lorem dolor est ad exercitation mollit laboris. Tempor exercitation labore nisi ad magna non magna. Aliquip aute amet magna nisi amet exercitation enim cupidatat eiusmod aliqua nisi. Enim cillum occaecat eu pariatur tempor laborum in minim ipsum ad. Irure magna reprehenderit sint non voluptate.'
                        BtnInfo='Mas info'
                        Titleright
                    />
                </Row>
                <Row className='my-5 text-justify'>
                    <TextCircle
                        titleInfo='Data Center'
                        textInfo='Ex duis enim commodo et adipisicing veniam aliquip anim officia dolore ullamco quis cillum. Aliqua aliquip tempor commodo nulla et voluptate est aliqua ipsum reprehenderit aliquip veniam elit aliquip. Duis nisi laborum in eu ad ullamco ea amet elit occaecat anim esse. Non do amet laborum Lorem eiusmod veniam eu do et laborum mollit. Minim quis ex velit ipsum ad incididunt cupidatat duis non nisi do elit incididunt. Aliquip nisi sint cillum velit incididunt mollit do enim exercitation cillum adipisicing ut voluptate qui.'
                        BtnInfo='Mas info'
                        left
                    />
                    <ImagenCircle img={Redes1} />
                </Row>
                <Row className='my-5'>
                    <ImagenCircle img={CCTV} />
                    <TextCircle 
                        titleInfo='Seguridad'
                        textInfo='Reprehenderit laboris dolor pariatur labore deserunt qui nulla eiusmod reprehenderit ex laboris adipisicing magna. Quis dolore elit cupidatat adipisicing nulla elit. Irure culpa reprehenderit dolore nostrud Lorem dolor est ad exercitation mollit laboris. Tempor exercitation labore nisi ad magna non magna. Aliquip aute amet magna nisi amet exercitation enim cupidatat eiusmod aliqua nisi. Enim cillum occaecat eu pariatur tempor laborum in minim ipsum ad. Irure magna reprehenderit sint non voluptate.'
                        BtnInfo='Mas info'
                        Titleright
                    />
                </Row>
                <Row className='my-5 text-justify'>
                    <TextCircle
                        titleInfo='Desarrollo Web'
                        textInfo='Ex duis enim commodo et adipisicing veniam aliquip anim officia dolore ullamco quis cillum. Aliqua aliquip tempor commodo nulla et voluptate est aliqua ipsum reprehenderit aliquip veniam elit aliquip. Duis nisi laborum in eu ad ullamco ea amet elit occaecat anim esse. Non do amet laborum Lorem eiusmod veniam eu do et laborum mollit. Minim quis ex velit ipsum ad incididunt cupidatat duis non nisi do elit incididunt. Aliquip nisi sint cillum velit incididunt mollit do enim exercitation cillum adipisicing ut voluptate qui.'
                        BtnInfo='Mas info'
                        left
                    />
                    <ImagenCircle img={Laptop2} />
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Inicio