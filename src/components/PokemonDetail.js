import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid2';
import Pokedex from "./Pokedex";
import Evoluciones from "./Evoluciones";


const PokemonDetail = ({item}) =>{
    return(
        <Grid size={4}>
            <Card sx={{maxWidth:1000 }}>
                <Box>
                    <img src={item.sprites.front_default}/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nombre: {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Descripción: {item.description}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Peso:{item.weight}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Tipo:{item.types[0].type.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Habilidades:{item.abilities[0].ability.name}
                    </Typography>

                    <div align="center">
                        <p>Evoluciones</p>
                    </div>

                    <Evoluciones/>

                </CardContent>
            </Card>
        </Grid>
    );
}

export default PokemonDetail;