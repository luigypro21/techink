import React from 'react'
import './Servicios.css'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAndroid,
    faApple,
} from "@fortawesome/free-brands-svg-icons";
import tintaContinua from '../../../Assets/images/print.png'
import inks from '../../../Assets/images/ink.png'
import toners from '../../../Assets/images/toner.png'
import printer from '../../../Assets/images/printer.png'

const Servicios = () => {
    return (
        <div id="Servicios" className="Servicios">
            <div className="Service-title">
                NUESTROS SERVICIOS
            </div>
            <Container>
                <Row>
                    <Col >
                        <img src={tintaContinua}></img>
                        <p></p>
                        <h3>Instalación de sistema de tinta continua</h3>
                        <p></p>
                        <p>Este sistema de tinta continua te ayudará alargar la vida útil de tus cartuchos, además, de ahorrarte el trabajo de recargarlos todo el tiempo o comprar uno nuevo. </p>
                    </Col>

                    <Col>
                        <img src={inks}></img>
                        <p></p>
                        <h3>Venta de tinta para impresoras</h3>
                        <p></p>
                        <p>Venta de tinta para impresoras CANON, EPSON y HP. </p>
                    </Col>

                    <Col>
                        <img src={toners}></img>
                        <p></p>
                        <h3>Venta y recarga de toners y cartuchos</h3>
                        <p></p>
                        <p>Venta y recarga de toners y cartuchos. 100% garantizado.</p>
                    </Col>

                    <Col>
                        <img src={printer}></img>
                        <p></p>
                        <h3>Venta y reparación de impresoras</h3>
                        <p></p>
                        <p>Venta y reparación de impresoras EPSON, CANON, HP, LEXMARK y SAMSUNG. Garantía de hasta 1 año. </p>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Servicios
