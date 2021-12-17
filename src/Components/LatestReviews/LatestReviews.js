import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Editor1 from '../../Assets/Img/editor1.jpg'

const LatestReviews = ({ data }) => {
  const [latestReview, setLatestReview] = useState([])

  useEffect(() => {
    setLatestReview(data)
  }, [data])

  return (
    <div>
      <Container sx={{my:10}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Latest Reviews</Typography>
        <Typography variant='h6' color={'#bdbdbd'} sx={{fontWeight: '400', mb: 3}}>So you can make better purchase decision</Typography>

        <Grid container spacing={2}>
        {latestReview !== undefined && latestReview.map((val, idx) => 
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <Grid container>
                  <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center'}}>
                    <img src={val.product.image} alt='alt' height={100} width={80}/>
                  </Grid>
                  <Grid item xs={6} sx={{display: 'flex', alignItems: 'center'}}>
                    <Box>
                      <Typography variant='h6'>
                        <strong>{val.product.name}</strong>
                      </Typography>
                      <Typography variant='p'>
                        {val.product.desc}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <hr style={{borders: '#bdbdbd'}}/>
                <CardContent>
                  <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 1}}>
                    <Rating name="half-rating-read" defaultValue={val.star} precision={0.5} readOnly />
                    <Typography variant='p' color="text.secondary"> 2 hours ago</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {val.comment}...<span style={{color: '#9c27b0'}}>Read More</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img src={Editor1} alt='alt' style={{ borderRadius: '50%', width: '50px', height: '50px' }}/>
              <Typography variant='p' sx={{my:1}}>
                {val.user}
              </Typography>
              <Typography variant='p' color="text.secondary">
                {val.profile.join(" ")}
              </Typography>
            </Box>
          </Grid>
        )}
        </Grid>
      </Container>
    </div>
  )
}
export default LatestReviews