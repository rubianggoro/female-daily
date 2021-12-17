import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const SectionInternalCampaign = () => {
  return (
    <>
      <Container sx={{ my:3, display: 'flex', justifyContent: 'center'}}>
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
              Horizontal 970x250 <br/> (Internal campaign only)
          </Box>
      </Container>
    </>
  )
}
export default SectionInternalCampaign