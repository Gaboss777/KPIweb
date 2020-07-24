import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

export const Banner = (props) => {

    return(
        <Jumbotron fluid className='mb-0 p-0'>
            <div className='p-0'>
                <img src={props.img} alt='' className='banner-div' />
            </div>
            <div className='caption-img text-center'>
                <h1>{props.titleH1}</h1>
                <h2 className='bg-kpi-text'>{props.titleH2}</h2>
            </div>
        </Jumbotron>
    )
}

export const MBanner = (props) => {
    const row = props.row;

    if (row) {
        return(
            <Container fluid className='px-0 mid-banner text-white p-5'>
                <Row >
                    <Col xs={2} className='text-center'>
                        <h1>{props.tittle}</h1>
                    </Col>
                    <Col>
                        <p className='p-4'>{props.text}</p>
                        <Button href='#' className='hvr-rectangle-in contact-btn float-right' size='lg'>CONTACTANOS</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
        return(
        <Container fluid className='px-0'>
            <div className='mid-banner text-white p-5 text-center'>
                <h1>{props.tittle}</h1>
                <p className='p-4'>{props.text}</p>
                <Button href='#' className='hvr-rectangle-in contact-btn' size='lg'>CONTACTANOS</Button>
            </div>
        </Container>
    )
}