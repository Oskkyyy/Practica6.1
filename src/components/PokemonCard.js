import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";

const PokemonCard = ({item}) =>{
    return(
        <Card sx={{ maxWidth: 345 }}>
            <Box>
                <img src={item.sprites.front_default}/>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Nombre: {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Peso:{item.weight}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Tipo:{item.types[0].type.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            <br/><br/>
        </Card>
    );
}

export default PokemonCard;