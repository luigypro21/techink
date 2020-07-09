import React, { Component } from 'react'
import './Header.css'
import { Link } from "react-scroll";


export default class Header extends Component {
    render() {
        return (
            <div id="intro" className="intro">
                <div className="overlay">
                    <div className="container">
                        <div >
                            <div className="intro-text">
                                <h1 className="intro h1">
                                    Bienvenido a <span className="brand">TECH<strong id='subtitle'>INK</strong></span>
                                </h1>
                                <p id="slogan"><strong>Estrategias para este nuevo mundo digital</strong></p>
                                <Link className="btn btn-default "
                                activeClass="desactive"
                                to="Servicios"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {600}>Aprende más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

