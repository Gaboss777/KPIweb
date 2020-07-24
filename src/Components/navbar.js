import React from "react";
import {Navbar, Nav} from "react-bootstrap"
import Logo from "../img/Logo KPI Photoshop 1.png"

function NavKPI(){
    return(
        <Navbar expand='lg' className=' menu-bar position-absolute'>
            <Navbar.Brand href="#home" className='mx-2 menu-icon'>
               <img alt="" src={Logo} width="90" height="70" className="d-inline-block" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="m-auto menu-item text-center align-middle">
                    <Nav.Link href="#home" className='m-icon hvr-reveal'>Inicio</Nav.Link>
                    <Nav.Link href="../pages/kpi.js" className='m-icon hvr-reveal'>KPI</Nav.Link>
                    <Nav.Link href="#link" className='m-icon hvr-reveal'>Servicios</Nav.Link>
                    <Nav.Link href="#link" className='m-icon hvr-reveal'>Contactanos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavKPI