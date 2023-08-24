import {useState, useEffect} from 'react';
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Canvas from '../components/Canvas.jsx';
import {useLocation} from 'react-router-dom';
const CreatePlay = () => {
  const [data, setData] = useState({
    play_name: "",
    play_url_photo: "",
    play_description: ""
  })
  const [success, setSuccess] = useState(null);
  const {state} = useLocation();
  console.log(state);
  useEffect(() => {
    if(Object.keys(state).length > 0) {
      setData(state.play);
    }
  }, []);
  const save = async() => {
    try {
     const updatedData = {...data, play_url_photo: createUrl('canvas')};
     const confirm = data.play_id ? await axios.patch(`/plays/${data.play_id}`, updatedData): await axios.post('/plays', updatedData);
     setSuccess(true);
     setData(updatedData);
    } catch (error) {
      console.log('data unable to be submitted, ', error);
    }
  }

  const createUrl = (id) => {
    const canvas = document.getElementById(id);
    const url = canvas.toDataURL();
    return url;
  }

  return(
    <Container>
      <Box sx={{display:'flex', flexDirection: 'column', marginTop: 2, alignItems: 'center'}}>

        <TextField
        sx={{width: '35rem'}}
        label="Name of Play"
        variant="outlined"
        value={data.play_name}
        onChange={(event) => {
          setData({...data, play_name: event.target.value});
        }}
        ></TextField>
        <Box sx={{marginTop: 2, marginBottom: 2}}>
          <Canvas  source={data.play_url_photo}/>
        </Box>
        <TextField
            sx={{width: '35rem'}}
            label="Description of Play"
            variant="outlined"
            value={data.play_description}
            onChange={(event) => {
            setData({...data, play_description: event.target.value});
        }}
            ></TextField>
        <Button variant="outlined" onClick={save}>Save</Button>
        {success&& <Typography>Successfully Posted</Typography>}
      </Box>

    </Container>
  )
}


export default CreatePlay;