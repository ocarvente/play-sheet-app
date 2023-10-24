import {useState, useEffect} from 'react';
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import axios from 'axios';
import {useParams} from 'react-router-dom'

const PlayPage = () => {

  const{id} = useParams();
  console.log('id, ', id);
  const[play, setPlay] = useState({})

  const fetchPlay = async() => {
    try {
      const play = await axios.get(`https://playsheet-service.onrender.com/plays/${id}`);
      setPlay(play.data[0]);
    } catch(error) {
      console.log('unable to retrieve play, ', error);
    }
  }
  useEffect(()=> {
    fetchPlay();
  }, [])

  console.log('the plays in playpage, ', play);
  return (
    <Container>
      {play ? <Stack>
        <Typography>{play.play_name}</Typography>
        <img src={play.play_url_photo} width={600}/>
        <Typography>{play.play_description}</Typography>
      </Stack> :
      <Box>
        <Typography>
          no play found
        </Typography>
      </Box>}
    </Container>
  )
}

export default PlayPage;