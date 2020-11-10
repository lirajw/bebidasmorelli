import React from 'react';

import '../StylePublic.css'
import './Header.css'
import beer from '../../assets/beer.png'

export default function Header() {

    return (
        <header>            
            <img src={beer}/>
            <nav>
                <a>Contatos</a>
                <a>Produtos</a>
                <a>Eventos</a>
            </nav>
        </header>
    );
}
