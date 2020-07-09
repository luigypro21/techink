import React, { Component } from 'react'
import Auxiliar from '../Cao/Auxiliar';
import Header from './Secciones/Header/Header';
/*import About from './Secciones/About/About';
import Servicios from './Secciones/Servicios/Servicios';
import Portafolio from './Secciones/Portafolio/Portafolio'
import Contacto from './Secciones/Contacto/Contacto';*/
import NavBar from '../Components/NavBar/NavBar';




export default class Index extends Component {
    render() {
        return (
            <Auxiliar>
                <NavBar />
                <Header/>
                {/*<Servicios></Servicios>
                <About></About>
                <Portafolio></Portafolio>
                <Contacto></Contacto>*/}
            </Auxiliar>
        )
    }
}
