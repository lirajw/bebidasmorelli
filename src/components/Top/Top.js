import React from 'react';

import './Top.css';
import man from '../../assets/man.png';

export default function Top(){

    return (
        <section id="top">
            <div className="img">
                <img src={man} />
            </div>            
            <div className="titulo">
                <div id="contato">
                    <p>(19)987545620</p>
                </div>
                <div className="merchan">
                    <h2>Bebidas Morelli</h2>
                    <p>Pra quem tem sede de ser feliz</p>
                </div>                
                <div className="merchanTexto">
                    <p>Venha nos visitar e mate a sua sede.</p>
                    <p>Estamos localizados na Avenida Dr. Paulo de Moraes 1339, Paulista - Piracicaba.</p>                                        
                </div>
            </div>
        </section>
    )
}