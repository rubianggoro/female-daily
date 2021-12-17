import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Editor2 from './../../Assets/Img/editor2.jpg'
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/List';
import CommentIcon from '@material-ui/icons/Comment';

const PopularGroups = () => {
  const [popularGroups] = useState([
    {
      "comment": "May our curls pop and never stop!",
      "name": "Chintya",
    },
    {
      "comment": "May our curls pop and never stop!",
      "name": "Chintya",
    },
    {
      "comment": "May our curls pop and never stop!",
      "name": "Chintya",
    },
    {
      "comment": "May our curls pop and never stop!",
      "name": "Chintya",
    },
  ]) 
  return (
    <>
      <Container sx={{my: 10}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Popular Groups</Typography>
        <Typography variant='h6' color={'#bdbdbd'} sx={{fontWeight: '400', mb: 3}}>Where the beauty TALK are</Typography>

        <Grid container spacing={2}>
        {popularGroups.length !== 0 && popularGroups.map((val, idx) => 
          <Grid item xs={3}>
            <Card sx={{borderRadius: '10px'}}>
              <CardActionArea sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', py: 3}}>
                <img src={Editor2} alt='alt' style={{ borderRadius: '50%', width: '100px', height: '100px' }}/>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong>{val.name}</strong>
                  </Typography>
                  <Box sx={{mt:3, display: 'flex', justifyContent: 'space-between'}}>
                    <PeopleIcon/>
                    <ListIcon/>
                    <CommentIcon/>
                  </Box>
                  <Typography variant="p">
                    {val.comment}
                  </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        )}
        </Grid>
      </Container>
    </>
  )
}
export default PopularGroups