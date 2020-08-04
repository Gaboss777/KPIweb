import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

// Banner Principal
export const Banner = ({img, titleH1, titleH2}) => {
    return(
        <Jumbotron fluid className='mb-0 p-0'>
            <div className='p-0'>
                <img src={img} alt='' className='banner-div' />
            </div>
            <div className='caption-img text-center'>
                <h1>{titleH1}</h1>
                <h2 className='bg-kpi-text'>{titleH2}</h2>
            </div>
        </Jumbotron>
    )
}

// Banner Medio
export const MBanner = ({row, tittle, text, btnInfo}) => {
    if (row) {
        return(
            <Container fluid className='px-0 mid-banner text-white p-5'>
                <Row >
                    <Col xs={2} className='text-center'>
                        <h1>{tittle}</h1>
                    </Col>
                    <Col>
                        <p className='p-4'>{text}</p>
                        <Button href='#' className='hvr-rectangle-in contact-btn float-right' size='lg'>{btnInfo}</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
        return(
        <Container fluid className='px-0'>
            <div className='mid-banner text-white p-5 text-center'>
                <h1>{tittle}</h1>
                <p className='p-4'>{text}</p>
                <Button href='#' className='hvr-rectangle-in contact-btn' size='lg'>{btnInfo}</Button>
            </div>
        </Container>
    )
}