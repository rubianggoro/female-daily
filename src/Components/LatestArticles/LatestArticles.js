import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const LatestArticles = ({ data }) => {
  const [latestArticles, setLatestArticles] = useState([])

  useEffect(() => {
    setLatestArticles(data)
  }, [data])

  return (
    <>
      <Container sx={{ my: 5 }}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Latest Articles</Typography>
        <Typography variant='h6' color={'#bdbdbd'} sx={{fontWeight: '400', mb: 3}}>So you can make better purchase decision</Typography>

        <Grid container spacing={2}>
        {latestArticles !== undefined && latestArticles.map((val, idx) => 
          <Grid item xs={4}>
            <Card sx={{borderRadius: '10px'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={val.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`${val.author} | ${val.published_at}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )}
        </Grid>
      </Container>
    </>
  )
}
export default LatestArticles