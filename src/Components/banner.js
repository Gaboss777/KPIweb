import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Banner = () => {
    return(
        <Jumbotron fluid className='mb-0 p-0'>
            <div className='banner-img p-0'>
            </div>
            <div className='caption-img animate__animated animate__slideInLeft animate__slow'>
                <h3 className='pl-3'>Tu mejor opcion en</h3>
                <h1 className='pl-3'>Soluciones</h1>
                <h1 className='bg-kpi-text'>Tecnologicas</h1>
            </div>
        </Jumbotron>
    )
}

export const MBanner = () => {
    return(
        <div>
            <div className='mid-banner'>
                <h1>BIENVENIDOS</h1>
                <p></p>
            </div>
        </div>
    )
}