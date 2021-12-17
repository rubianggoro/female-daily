import React from 'react'
import Logo from '../../Assets/Img/logo.png'
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@mui/material/Container';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: 'white'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <img src={Logo} alt='alt'/>
          </Typography>
          <Search sx={{border: "1"}}>
            <SearchIconWrapper>
              <SearchIcon color='primary'/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" color='secondary'>LOGIN / SIGNUP</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <Container sx={{ marginTop: '80px', marginBottom: '10px'}}>
        <Typography component={'div'} sx={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Box sx={{ fontWeight: 'bold' }}>SKINCARE</Box>
            <Box sx={{ fontWeight: 'bold' }}>MAKE UP</Box>
            <Box sx={{ fontWeight: 'bold' }}>BODY</Box>
            <Box sx={{ fontWeight: 'bold' }}>HAIR</Box>
            <Box sx={{ fontWeight: 'bold' }}>FRAGRANCE</Box>
            <Box sx={{ fontWeight: 'bold' }}>NAILS</Box>
            <Box sx={{ fontWeight: 'bold' }}>TOOLS</Box>
            <Box sx={{ fontWeight: 'bold' }}>BRANDS</Box>
        </Typography>
    </Container>
    <hr style={{ borderColor: '#E6EAEA' }} />
    </div>
  )
}

export default Navbar