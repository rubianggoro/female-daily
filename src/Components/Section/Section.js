import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Product2 from '../../Assets/Img/product2.png'


const Section = () => {
  const [products] = useState([
    {
      "editor": "annedean",
      "role": "Associate Editor",
      "product": {
        "name": "Y.O.U Makeups",
        "rating": 4.1,
        "description": "Rouge Velvet Matte Lip Cream",
        "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
      }
    },
    {
      "editor": "annedean",
      "role": "Associate Editor",
      "product": {
        "name": "Y.O.U Makeups",
        "rating": 4.1,
        "description": "Rouge Velvet Matte Lip Cream",
        "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
      }
    },
    {
      "editor": "annedean",
      "role": "Associate Editor",
      "product": {
        "name": "Y.O.U Makeups",
        "rating": 4.1,
        "description": "Rouge Velvet Matte Lip Cream",
        "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
      }
    },
  ])
  return (
    <>
      <Container sx={{ backgroundColor: '#fce4ec', my: 3 }}>
        <Grid container sx={{p: 2}} spacing={2}>
          <Grid item xs={4} >
            <Typography variant='h4'>
              <Box >
                Looking for products that are just simply perfect for you?
              </Box>
            </Typography>
            <Typography variant='p' sx={{my: 3}}>
              <Box sx={{ my: 2 }}>
                Here are some products that we believe match yout skin, hair, and body! Have we mentioned that they solve your concerns too?
              </Box>
            </Typography> <br/>
            <Button variant="contained" color="secondary">See My Matches </Button>
          </Grid>
          {products.length !== 0 && products.map((val, idx) => 
            <Grid item xs={2.6}>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Product2}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                      <p><strong>4</strong></p>
                      <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                      <p>(7)</p>
                    </Box>
                    <Typography gutterBottom variant="h5" component="div">
                      <strong>{val.product.name}</strong>
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      {val.product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Biotin Strength
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
export default Section