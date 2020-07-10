import React, { Component } from 'react'
import './Contacto.css'
import SocialFollow from './SocialFollow'

export default class Contacto extends Component {
    
    render() {
        return (
            <div id="contact" >
                <div className="text-center">
                    <div className="overlay">
                        <div className="container">
                            <div className="col-md-8 col-md-offset-2 section-title">
                                <h2>Mantente en contacto</h2>
                                <p>Envianos tus comentarios y te contactaremos</p>
                            </div>
                            <div className="col-md-8 col-md-offset-2">
                                <form name="sentMessage" id="contactForm" noValidate>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="name" className="form-control" placeholder="Nombre" required="required" aria-invalid="false"></input>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" id="email" className="form-control" placeholder="Email" required="required"></input>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Mensaje" required></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="success"></div>
                                    <button type="submit" className="btn btn-default">Enviar Mensaje</button>
                                </form>
                                <div className="social">
                                    <SocialFollow/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container text-center">
                        <div className="fnav">
                            <p>Copyright © 2019 Futuro Digital</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
