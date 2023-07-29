import {useState} from 'react';
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import axios from 'axios';
import Canvas from '../components/Canvas.jsx';
const CreatePlay = () => {
  const [data, setData] = useState({
    play_name: "",
    play_url_photo: "",
    play_description: ""
  })
  const [success, setSuccess] = useState(null);


  const submitData = async() => {
    try {
     const confirm = await axios.post('/plays', data);
     setSuccess(true);
    } catch (error) {
      console.log('data unable to be submitted, ', error);
    }

  }

  const savePhotoUrl = (url) => {
    setData({...data, play_url_photo: url})
  }
  console.log('this is the data currently, ', data);
  return(
    <Container>
      <Stack>
        <TextField
        label="Name of Play"
        variant="outlined"
        value={data.play_name}
        onChange={(event) => {
          setData({...data, play_name: event.target.value});
        }}
        ></TextField>
        <Canvas savePhotoUrl ={savePhotoUrl}/>
        <TextField
          label="URL of Picture"
          variant="outlined"
          value={data.play_url_photo}
          onChange={(event) => {
          setData({...data, play_url_photo: event.target.value});
        }}
          ></TextField>
        <TextField
            label="Description of Play"
            variant="outlined"
            value={data.play_description}
            onChange={(event) => {
            setData({...data, play_description: event.target.value});
        }}
            ></TextField>
        <Button variant="outlined" onClick={submitData}>Create</Button>
        {success&& <Typography>Successfully Posted</Typography>}
      </Stack>
    </Container>
  )
}


export default CreatePlay;