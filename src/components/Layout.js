import * as React from 'react';
import { Box,  Container } from '@mui/material';
const Layout =({children}) => {
    return (

        <Box>
            <Container className="container">
                {children}
            </Container>
            <Box className="footer">
                <p>Todos los derechos reservados 2025</p>
            </Box>
        </Box>
    );
}

export default Layout;

