import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PokemonCard from "./PokemonCard";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Evoluciones = () => {
    const data = {"count":1302,"items":[{"id":1,"name":"bulbasaur","weight":69,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}},{"id":2,"name":"ivysaur","weight":130,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}},{"id":3,"name":"venusaur","weight":1000,"types":[{"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"},"slot":1},{"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},"slot":2}],"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":false,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":true,"slot":3}],"sprites":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}}]}

    return (
        <div align="center">
            <Grid container spacing={4} >
                {data.items.map((item,index)=>(
                    <PokemonCard item={item}/>
                ))}

            </Grid>
        </div>
    );
}
export default Evoluciones;
