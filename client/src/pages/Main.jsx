import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import axios from 'axios';
import AllPlays from './AllPlays.jsx';
const Main = () => {
  return (
    <Container
      sx={{display: "flex",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"50vh"}}
    >

      <Stack>
        <Link to={`/random`}>
          <Button variant='outlined' sx={{mt:3}}>Randomly Select a Play</Button>
        </Link>
        <Link to={'/allplays'}>
          <Button variant='outlined' sx={{mt:3}}>See All Plays </Button>
        </Link>
        <Link to={'/create'}>
          <Button variant='outlined' sx={{mt:3}}>Create your own play </Button>
        </Link>

      </Stack>


    </Container>


  )
}

export default Main;