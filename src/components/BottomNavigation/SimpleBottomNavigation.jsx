import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';



import AccountCircle from '@mui/icons-material/AccountCircle'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();



  const handleNavigationChange = (newValue) => {
    setValue(newValue);

    
    let route = '';
    switch (newValue) {
      case 0:
        route = '/';
        break;
      case 1:
        route = '/Category';
        break;
      case 2:
        route = '/Wishlist';
        break;
      case 3:
        route = '/Cart';
        break;
      case 4:
        route = '/Profile';
        break;
      default:
        
    }

    navigate(route);
    setOpen(true);
  };

  return (

    

    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper 
        sx={{ 
          position: 'fixed', 
          bottom: 0,
          zIndex:1000,
          left: 0, 
          right: 0,
          display: { xs: 'block', sm: 'none' }
        }} 
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            handleNavigationChange(newValue);
          }}
        >
          <BottomNavigationAction  label="" icon={<HomeIcon style={{ fontSize: '3.5rem', color:'#000'}} />}  />
          <BottomNavigationAction  label="" icon={<CategoryIcon style={{ fontSize: '3.5rem', color:'#000'}} />} />
          <BottomNavigationAction  label="" icon={<FavoriteIcon style={{ fontSize: '3.5rem', color:'#000'}} />} />
          <BottomNavigationAction  label="" icon={<ShoppingCartIcon style={{ fontSize: '3.5rem', color:'#000'}} />} />
          <BottomNavigationAction label="" icon={<AccountCircle style={{ fontSize: '3.5rem', color:'#000'}} />} /> 
        </BottomNavigation>
      </Paper>
      {/* <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message={message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      /> */}
    </Box>
  );
}
