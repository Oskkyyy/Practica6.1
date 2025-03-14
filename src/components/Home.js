import * as React from 'react';
import Carousel from "./Carousel";
import Navbar from "./Navbar";

function Home(){
    return(
        <div>
            <Navbar></Navbar>
            <h1>Pagina Principal</h1>
            <Carousel></Carousel>
        </div>

    );
}

export default Home;