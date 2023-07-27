import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import PlayCard from '../components/PlayCard.jsx'
import Grid from '@mui/material/Grid';
import axios from 'axios';

const AllPlays = () => {
  const[plays, setPlays] = useState([]);
  const[selectedPlay, setSelectedPlay] = useState({});
  const fetchAllPlays = async () => {
    try {
      const plays = await axios.get('/plays');
      setPlays(plays.data);
    } catch(error) {
      console.log('unable to fetch all plays, ', error);
    }
  }

  useEffect( ()=> {
     fetchAllPlays();
  }, [])
  console.log(plays);
  return (
    <Container>
      <Grid container spacing={2}>
        {plays.map(play => <PlayCard key = {play.play_id} play = {play}/>)}
      </Grid>
    </Container>
  )
}

export default AllPlays;