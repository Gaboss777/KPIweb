import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {LogoKPI} from '../img/imgindex';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faGlobe, faEnvelope} from '@fortawesome/free-solid-svg-icons';

function NavKPI(){
    return(
        <Navbar expand='lg' className=' menu-bar position-absolute'>
            <Navbar.Brand href="#home" className='mx-2 menu-icon'>
               <img alt="" src={LogoKPI} width="90" height="70" className="d-inline-block" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav m-auto'>
                <Nav className="m-auto menu-item text-center align-middle">
                    <Nav.Link href="#home" className='m-icon hvr-reveal mx-1'><FontAwesomeIcon icon={faHome} className='mr-2'/>Inicio</Nav.Link>
                    <Nav.Link href="../pages/kpi.js" className='m-icon hvr-reveal mx-1'><FontAwesomeIcon icon={faBuilding} className='mr-2' />KPI</Nav.Link>
                    <Nav.Link href="#link" className='m-icon hvr-reveal mx-1'><FontAwesomeIcon icon={faGlobe} className='mr-2' />Servicios</Nav.Link>
                    <Nav.Link href="#link" className='m-icon hvr-reveal mx-1'><FontAwesomeIcon icon={faEnvelope} className='mr-2' />Contactanos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavKPI