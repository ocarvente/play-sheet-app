import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import axios from 'axios';
import AllPlays from './AllPlays.jsx';
const Main = () => {
  return (
    <Stack>
      <Link to={`/random`}>
        <Button variant='outlined'>Randomly Select a Play</Button>
      </Link>
      <Link to={'/allplays'}>
        <Button variant='outlined'>See All Plays </Button>
      </Link>
    </Stack>


  )
}

export default Main;