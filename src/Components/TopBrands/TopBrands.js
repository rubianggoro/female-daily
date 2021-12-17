import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const TopBrands = () => {
  return (
    <>
      <Container sx={{my:10}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>Top brands</Typography>
        <Typography variant='h6' color={'#bdbdbd'} sx={{fontWeight: '400'}}>We all know and love</Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box>
            <img src='https://lh3.googleusercontent.com/proxy/ZhSLV7pIJ95EuiBUwzdNrLbuHnarzpu-ZWrnEzx4KEiJRimD0659PX-NrPsg02EBNsDJg6Y7ZRowR9e8SXXA1tmHA8YHpKDAXLdmKXsaqTkLlA' height={178} width={'100%'} alt='alt'/>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
            <img src='https://lh3.googleusercontent.com/proxy/dkcMLJ272QiLRqCEfwYbTVxscUCvNm71C1jlXO9HWXJhCJA09AngTM0tmx6_IC55pE1cReLJeTq06nBT0-XnFNzcQ3nTw_tZCHIU2-YJwp78F2Yd3uyq9huHTrd5Kex6QUDfoHovd0pV7ApWeapwzhL7028ER1_KGBmKsFo' height={178} width={'100%'} alt='alt'/>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0GP3CvF3HuG3rVxoQLg2w3KFOXKIcMdG7MgvkgLsnNJ2by6qBgB9Pn55zVSiZZ4nkSU&usqp=CAU' height={178} width={'100%'} alt='alt'/>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7b/Logo_SK-II.png' height={178} width={'100%'} alt='alt'/>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
            <img src='https://cdn.kibrispdr.org/data/maybelline-logo-png-1.png' height={178} width={'100%'} alt='alt'/>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
            <img src='https://assets-a1.kompasiana.com/items/album/2018/05/09/innisfree-1-5af1eff3f1334434237dcf43.jpg' height={178} width={'100%'} alt='alt'/>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{my:5}}>
          <Typography variant='h5' sx={{fontWeight: 'bold'}}>Famale Daily - Find everything you want to know about on Female Daily</Typography>
          <Typography variant='h6' sx={{fontWeight: '400'}}>We believe that beauty is for everyone and we' re here to make sure everyone has a share.We prioritize honesty and we want to be responsible in our beauty education.We strive for a better beauty industry for all players, one swipe of lipstick at a time.</Typography>
        </Box>
      </Container>
    </>
  )
}
export default TopBrands