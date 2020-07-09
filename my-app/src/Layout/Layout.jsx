
import React, { Component } from 'react'
import Index from '../Pages/Index';

export default class Layout extends Component {

    imprimirConsola = () => {
      console.log("El boton funciona")
    }
    


    render() {
        return (
            <div>
                <Index />
            </div>
        )
    }
}