import './Navbar.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'Movies', 'Category'];

const Search = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 1),
  position: 'relative',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: 'fit-content',
  [theme.breakpoints.down('sm')]: {

  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  left: '5px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: theme.spacing(3),
    transition: theme.transitions.create('width'),
    width: '150px',
    '&:focus': {
      [theme.breakpoints.up('md')]: {
        width: '250px'
      },
        width: '150px'
      },
  },
}));


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Link to='/'>
        <img src={logo} alt='Logo' width={'80%'}/>
      </Link>
      <Divider sx={{background: '#fff', width: '80%', alignSelf: 'center'}} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{textDecoration: 'none'}}>
              <ListItemButton sx={{ textAlign: 'center', border: '1px solid #E2C044', borderRadius: '7px', marginBottom: '10px', color: '#e0fbfc' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{background: '#000', width: '100%'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <img src={logo} alt='Logo' height={'80px'} />
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%', justifyContent: 'center' }}>
            {navItems.map((item) => (

              <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{width: '500px', '@media (max-width: 600px)': {display:'flex', flexWrap: 'wrap', justifyContent: 'end'}}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon 
                  sx={{color: '#E2C044'}}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'linear-gradient(#000 10%, #000c 20%)', color: '#e0fbfc' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
        <Toolbar />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;