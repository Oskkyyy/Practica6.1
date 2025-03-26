import * as React from 'react';
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import PokemonCard from "./PokemonCard";
import Pokedex from "./Pokedex";

function Home(){
    return(
        <div>
            <h1>Pagina Principal</h1>
            <Carousel></Carousel>
        </div>

    );
}

export default Home;