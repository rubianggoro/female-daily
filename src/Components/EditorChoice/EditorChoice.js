import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Editor1 from '../../Assets/Img/editor1.jpg'
import Product1 from '../../Assets/Img/product1.jpg'

const EditorChoice = ({ data }) => {
  const [editors, setEditors] = useState([])

  useEffect(() => {
    setEditors(data)
  }, [data])

  return (
    <>
      <Container sx={{ my:5 }}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Editor's Choice</Typography>
        <Typography variant='h6' color={'#bdbdbd'} sx={{fontWeight: '400'}}>Curated with love</Typography>

        <Box sx={{ flexGrow: 1, my:3 }}>
          <Grid container spacing={2}>
            {editors && editors.map((val, idx) => 
            <Grid item xs={2.4}>
              <Grid container>
                <Grid item xs={4}>
                  <img src={Editor1} alt='alt' style={{ borderRadius: '50%', width: '50px', height: '50px' }}/>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column'}}>
                  <strong>{val.editor}</strong>
                  <small>{val.role}</small>
                </Grid>
              </Grid>

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
export default EditorChoice