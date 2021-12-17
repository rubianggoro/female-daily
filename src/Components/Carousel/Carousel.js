import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Carousel = () => {
    return (
        <>
            <Container sx={{ my:2, display: 'flex', justifyContent: 'center'}}>
                <Box sx={{
                    width: '970px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 1,
                    backgroundColor: '#bdbdbd',
                    color: '#424242',
                    fontSize: '35px'
                }}>
                    Top Frame 970x50
                </Box>
            </Container>
            <Container sx={{ my:2, display: 'flex', justifyContent: 'center'}}>
                <Box sx={{
                    width: '970px',
                    height: '250px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 1,
                    backgroundColor: '#bdbdbd',
                    color: '#424242',
                    fontSize: '35px'
                }}>
                    Billboard 970x250
                </Box>
            </Container>
        </>
    )
}
export default Carousel