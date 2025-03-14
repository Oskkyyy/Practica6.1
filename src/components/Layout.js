import * as React from 'react';
import { Box,  Container } from '@mui/material';
import Navbar from "./Navbar";
const Layout =({children}) => {
    return (

        <Box>
            <Container className="container">
                <Navbar></Navbar>

                {children}

            </Container>
            <Box className="footer">
                <p align="center">Todos los derechos reservados 2025</p>
            </Box>
        </Box>
    );
}

export default Layout;

