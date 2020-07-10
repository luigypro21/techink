import React, { Component } from 'react'
import Auxiliar from '../Cao/Auxiliar';
import Header from './Secciones/Header/Header';
import About from './Secciones/About/About';
import Servicios from './Secciones/Servicios/Servicios';
import Contacto from './Secciones/Contacto/Contacto';
import NavBar from '../Components/NavBar/NavBar';




export default class Index extends Component {
    render() {
        return (
            <Auxiliar>
                <NavBar />
                <Header/>
                <About></About>
                <Servicios></Servicios>
                <Contacto></Contacto>
                <div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </Auxiliar>
        )
    }
}
