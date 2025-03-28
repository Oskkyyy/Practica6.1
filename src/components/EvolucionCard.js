import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid2';


const PokemonCard = ({item}) =>{
    return(
        <Grid size={12}>
            <Card sx={{ maxWidth: 200 }}>
                <Box>
                    <img src={item.sprites.front_default}/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                         {item.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined-primary" size="lg">Detalles</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default PokemonCard;