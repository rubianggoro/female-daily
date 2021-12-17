import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const LatestVideos = () => {
  return (
    <>
      <Container sx={{my:10}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Latest Videos</Typography>
        <Typography variant='h6' color={'#bdbdbd'} sx={{fontWeight: '400', mb: 3}}>Watch and learn, ladies</Typography>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/fuuxdx9QA1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Grid>
          <Grid item xs={4}>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/IsGyZoesDQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/2zBeoTsdFuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default LatestVideos