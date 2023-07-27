
import {useState, useEffect} from 'react';
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import axios from 'axios';
const RandomPlay = () => {
  const [randomPlay, setRandomPlay] = useState({});

  const goToRandomPlay = async () => {
    try {
      const total = await axios.get('/play/random');
      setRandomPlay(total.data[0]);
    }catch(error) {
      console.log('unable to get total, ', error);
    }
  }

  useEffect(() => {
    goToRandomPlay();
  }, [])
  console.log('this is the random play, ', randomPlay);
  return (
    <Container>
      <Stack>
        <Typography>{randomPlay.play_name}</Typography>
        <img src={randomPlay.play_url_photo} width={600}/>
        <Typography>{randomPlay.play_description}</Typography>
      </Stack>
    </Container>
  )
}

export default RandomPlay;