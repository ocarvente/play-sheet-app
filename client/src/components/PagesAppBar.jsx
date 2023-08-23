import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'
export default function PagesAppBar() {


  const navigate = useNavigate();
  const handleClick =(e) => {
    navigate(`/${e.target.name}`, { state: {} });
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Play Sheet IO
          </Typography>

          <Button color="inherit" name="create" onClick={handleClick}>Create Play</Button>
          <Button color="inherit"name = 'random'onClick={handleClick}>Choose Random Play</Button>
          <Button color="inherit" name='allplays'onClick={handleClick}>See All Plays </Button>
          <Button color="inherit"name='' onClick={handleClick}>Home</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}