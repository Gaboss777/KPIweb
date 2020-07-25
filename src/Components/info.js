import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'

// Titulo Principal
export const InfoTitle = (props) => {
    return(
        <Container>
            <Row className='justify-content-center mx-auto my-4 title-kpi w-25'>
                <h1 className='p-2'>{props.titleInfo}</h1>
            </Row>
        </Container>
    )
}

// Titulo Secundario
export const SecondTitle = props => {
    return <h2>{props.STitle}</h2>
}

// Imagenes Redondas
export const ImagenCircle = (props) => {
    return(
            <Col xs={4}>
                <img src={props.img} alt='' className='mx-auto my-auto d-block img-serv img-fluid'/>
            </Col>
    )
}

// Texto de Informtacion
export const TextCircle = (props) => {
    return(
            <Col>
                <SecondTitle STitle={props.titleInfo} className='my-3'/>
                <p>{props.textInfo}</p>
                <Button href='#' className={`contact-btn btn-kpi ${props.left ? "float-left" : "float-right"}`} size='lg'>{props.BtnInfo}</Button>
            </Col>
    )
}



