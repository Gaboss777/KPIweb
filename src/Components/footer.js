import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {LogoKPI} from '../img/imgindex';

export const Footer = (props) => {
    return(
        <Container fluid className='bg-dark footer-kpi p-4' >
            <Row className='text-white'>
                <Col><img src={LogoKPI} alt='' width='75' height='60' /></Col>
                <Col>
                    <p>Redes Sociales</p>
                </Col>
                <Col>
                    <p>Informacion Empresa</p>
                </Col>
            </Row>
        </Container>
    )
}