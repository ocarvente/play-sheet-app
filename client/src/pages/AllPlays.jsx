import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import PlayCard from '../components/PlayCard.jsx'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

const AllPlays = () => {
  const[plays, setPlays] = useState([]);
  const[selectedPlay, setSelectedPlay] = useState({});
  const fetchAllPlays = async () => {
    try {
      const plays = await axios.get('https://playsheet-service.onrender.com/plays');
      setPlays(plays.data);
    } catch(error) {
      console.log('unable to fetch all plays, ', error);
    }
  }
  useEffect( ()=> {
     fetchAllPlays();
  }, [])

  return (
    <Container>
      <Typography>Click on Title of Play to view details</Typography>
      <Grid container spacing={2}>
        {plays.map(play => <PlayCard key = {play.play_id} play = {play} fetch={fetchAllPlays}/>)}
      </Grid>
    </Container>
  )
}

export default AllPlays;