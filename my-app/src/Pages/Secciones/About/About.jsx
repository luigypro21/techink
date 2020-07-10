import React from 'react';
import './About.css';
import imagen from '../../../Assets/images/about.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div id="About" className="About">
            <div className="Title">
                ACERCA DE NOSOTROS
                </div>
            <div className="container">

                <Container>
                    <Row>
                        <Col >
                            <img src={imagen} alt="" />

                            <div className="div2">
                                <h4>¿Quiénes somos?</h4>
                                <p>Somos una empresa que cuenta con un servicio de venta y reparación de impresoras, 
                                    cartuchos, toners y suministros.</p>
                                <h4>¿Qué hacemos?</h4>
                                <p>Proorcionamos servicios ...........</p>
                                <h4>¿Por qué escogernos?</h4>
                                <p>Conocemos una amplia variedad de tecnologías...</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

        </div>
    )
}

export default About
