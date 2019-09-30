// @ts-nocheck
import React from 'react';



import "../styles/style.css";


export default class Semaforo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            luzseleccionadada : null
        };
    }

    render(){
        return(<div>
            <div id="palito"></div>
            <div id="container">
                <div className="rojo luz" onClick={
                    ()=> this.setState({
                        luzseleccionadada: 'rojo'
                    })
                }></div>
                <div className="amarillo luz"onClick={
                    ()=> this.setState({
                        luzseleccionadada: 'amarillo'
                    })
                }></div>
                <div className="verde luz"onClick={
                    ()=> this.setState({
                        luzseleccionadada: 'verde'
                    })
                }></div>
            </div>
            </div>
        )
    }
}