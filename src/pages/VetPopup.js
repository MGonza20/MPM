/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Popup: Mostrar los datos específicos de la veterinaria seleccionada
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

import React from 'react'
import PropTypes from 'prop-types'

import '../styles/popup.css'
import { Avatar } from '@chakra-ui/react'
import { Skeleton } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

const VetPopup = ({ vet, regretOriginal }) => {
    return (
        <div data-testid={'vet-popup-react'}>
            <div className="body-a">
                <button className="emBtn" onClick={() => regretOriginal(false)}>REGRESAR</button><br></br>
                <div className="vet-container">
                    <Avatar
                        size="2xl"
                        name="Dan Abrahmov"
                        src="https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg"
                    />
                    <div className="info">
                        <h1><b>{vet['name']}</b></h1>
                        <br />
                        <Divider orientation="horizontal" />
                        <br />
                        <h1 ><b>Correo: {vet['email']}</b></h1>
                        <br />
                        <Divider orientation="horizontal" />
                        <br />
                        <h1><b>Número de telefono: {vet['phone']}</b></h1>
                        <br />
                        <Divider orientation="horizontal" />
                        <br />
                        <h1><b>
                            Dirección: {vet['direction']['city']} -{' '}
                            {vet['direction']['zone']} -{' '}
                            {vet['direction']['address']}
                            </b>
                        </h1>
                        <br />
                    </div>
                    <br></br><button className="emBtn">Ir allí</button>
                    
                </div>
                
                
            </div>
            
            
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>My Pet & My</h4>
                                        <span>Universidad del Valle</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Ingeniería de Software</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Contactanos</h4>
                                        <span>correol@ejemplo.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo"></div>

                                    <div className="subscribe-form">
                                        <form action="#"></form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left"></div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <Skeleton height="20px" />
                                    <ul></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

VetPopup.propTypes = {
    vet: PropTypes.object,
    regretOriginal: PropTypes.func,
}

export default VetPopup
