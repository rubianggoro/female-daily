import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Logo from '../../Assets/Img/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
  return (
    <>
      <Container sx={{my:10}}>
        <hr/>
        <Grid container spacing={2} sx={{mt:5}}>
          <Grid item xs={3}>
            <Typography variant='subtitle2' >
              <Box sx={{fontWeight: 'bold'}}>About us</Box>
              <Box sx={{fontWeight: 'bold', my:3}}>Feedback</Box>
              <Box sx={{fontWeight: 'bold'}}>Contact</Box>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='subtitle2' >
              <Box sx={{fontWeight: 'bold'}}>Terms & Conditions</Box>
              <Box sx={{fontWeight: 'bold', my:3}}>Privacy Policy</Box>
              <Box sx={{fontWeight: 'bold'}}>Help</Box>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='subtitle2' >
              <Box sx={{fontWeight: 'bold'}}>Awards</Box>
              <Box sx={{fontWeight: 'bold', my:3}}>Newslatter</Box>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='subtitle2' >
              <Box sx={{fontWeight: 'bold'}}>Dowload Our Mobile App</Box>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <img src='https://img2.pngdownload.id/20180802/ohu/kisspng-rointe-connect-app-for-smart-control-rointe-heat-5b630e4be3b018.1228412915332183799326.jpg' width='100%' alt='alt'/>
                </Grid>
                <Grid item xs={6}>
                  <img src='https://w7.pngwing.com/pngs/462/120/png-transparent-iphone-google-play-android-get-started-now-button-electronics-text-logo.png' width='100%' alt='alt'/>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{my:5}}>
          <Grid item xs={9}>
            <img src={Logo} alt='alt'/>
            <Typography variant='h6' color='text.secondary'>
              Copyright &copy; 2015 - 2021 Female Daily Network ∙ All the rights reserved
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default Footer