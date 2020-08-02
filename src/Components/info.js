import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'

// Titulo Principal
export const InfoTitle = ({titleInfo}) => {
    return(
        <Container>
            <Row className='mx-auto my-4 title-kpi w-25'>
                <h1 className='p-2'>{titleInfo}</h1>
            </Row>
        </Container>
    )
}

// Titulo Secundario
export const SecondTitle = ({Titleright,STitle}) => {
    return <h2 className={`${Titleright ? "text-right" : "text-left" }`}>{STitle}</h2>
}

// Imagenes Redondas
export const ImagenCircle = ({img}) => {
    return(
            <Col xs={4}>
                <img src={img} alt='' className='mx-auto my-auto d-block img-serv img-fluid'/>
            </Col>
    )
}

// Texto de Informtacion
export const TextCircle = ({titleInfo,Titleright,BtnInfo,textInfo,left}) => {
    return(
            <Col>
                <SecondTitle STitle={titleInfo} Titleright={Titleright} className='my-3 text-right'/>
                <p className='text-justify'>{textInfo}</p>
                <Button href='#' className={`contact-btn btn-kpi ${left ? "float-left" : "float-right"}`} size='lg'>{BtnInfo}</Button>
            </Col>
    )
}



