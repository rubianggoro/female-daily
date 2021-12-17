import React, {useState} from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Product1 from '../../Assets/Img/product1.jpg'

const TrandingThisWeek = () => {
  const [products] = useState([
    {
      "editor": "annedean",
      "role": "Associate Editor",
      "product": {
        "name": "Pantene",
        "rating": 4.1,
        "description": "Rouge Velvet Matte Lip Cream",
        "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
      }
    },
    {
      "editor": "annedean",
      "role": "Associate Editor",
      "product": {
        "name": "Pantene",
        "rating": 4.1,
        "description": "Rouge Velvet Matte Lip Cream",
        "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
      }
    },
    {
      "editor": "annedean",
      "role": "Associate Editor",
      "product": {
        "name": "Pantene",
        "rating": 4.1,
        "description": "Rouge Velvet Matte Lip Cream",
        "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
      }
    },
    {
      "editor": "annedean",
      "role": "Associate Editor",
      "product": {
        "name": "Pantene",
        "rating": 4.1,
        "description": "Rouge Velvet Matte Lip Cream",
        "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
      }
    },
    {
      "editor": "annedean",
      "role": "Associate Editor",
      "product": {
        "name": "Pantene",
        "rating": 4.1,
        "description": "Rouge Velvet Matte Lip Cream",
        "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
      }
    },
    {
      "editor": "annedean",
      "role": "Associate Editor",
      "product": {
        "name": "Pantene",
        "rating": 4.1,
        "description": "Rouge Velvet Matte Lip Cream",
        "image": "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
      }
    }
  ])

  return (
    <>
      <Container sx={{ my:10 }}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Tranding this week</Typography>
        <Typography variant='h6' color={'#bdbdbd'} sx={{fontWeight: '400'}}>See our weekly most reviewed products</Typography>

        <Box sx={{ flexGrow: 1, my:3 }}>
          <Grid container spacing={2}>
            {products.length !== 0 && products.map((val, idx) => 
            <Grid item xs={2}>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={Product1}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                      <p><strong>{val.product.rating}</strong></p>
                      <Rating name="half-rating-read" defaultValue={val.product.rating} precision={0.5} readOnly />
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
        </Box>
      </Container>
    </>
  )
}
export default TrandingThisWeek