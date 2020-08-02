import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {LogoKPIBlanco} from '../img/imgindex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    /* If you have no props, then don`t accept them */
    return(
        <Container fluid className='bg-dark footer-kpi p-4' >
            <Row className='text-white'>
                <Col className='text-center text-footer'>
                    <Col>
                        <img src={LogoKPIBlanco} alt='' width='75' height='60' />
                    </Col>
                    <Col>
                        <p>Tu mejor opcion en soluciones tecnologicas</p>
                    </Col>
                </Col>
                <Col className='text-center h3'>
                    <p>Redes Sociales</p>
                    <FontAwesomeIcon icon={faFacebookSquare} className='mx-2 h1'/>
                    <FontAwesomeIcon icon={faInstagramSquare} className='mx-2 h1'/>
                </Col>
                <Col className='text-center'>
                    <p className='h3'>Informacion Contacto</p>
                    <p className='m-0'><FontAwesomeIcon icon={faWhatsappSquare} className='mx-2 h2 align-middle' />+58 414-2390487 / 414-9928235</p>
                    <p><FontAwesomeIcon icon={faEnvelopeSquare} className='mx-2 h2 align-middle' />kpisolucionesti@gmail.com</p>
                </Col>
            </Row>
        </Container>
    )
}