import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
const CategoriesForm = ({setFormOpen}) => {

   const ITEM_HEIGHT = 48;
   const ITEM_PADDING_TOP = 8;
   const MenuProps = {
     PaperProps: {
       style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
       },
     },
   };

   const [playList, setPlayList] = useState([]);
   const [plays, setPlays] = useState([]);
   const [categorie, setCategorie] = useState([]);
   useEffect(() => {
    axios.get('https://playsheet-service.onrender.com/plays')
      .then(res => setPlays(res.data))
      .catch(err => console.log(err));
   }, []);

   const handleChange = (event) => {
     const {
       target: { value },
     } = event;
     setPlayList(
       // On autofill we get a stringified value.
       typeof value === 'string' ? value.split(',') : value,
     );
   };

   const handleSubmit = (event) => {
    let data = {categorie:categorie, playList:playList}
    console.log(data);
   };

   console.log(playList);
   console.log(categorie);
  return (
    <Paper variant="outlined" elevation={0}>
      <Box sx={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column'}}>
        <TextField label='Category' onChange ={(e) => setCategorie(e.target.value)}></TextField>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Plays</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={playList}
            onChange={handleChange}
            input={<OutlinedInput label="Plays" />}
            renderValue={(selected) => selected.map((id) => plays.find((play) => play.play_id === id).play_name).join(', ')}
            MenuProps={MenuProps} >
                {plays.map((play) => (
                  <MenuItem key={play.play_id} value={play.play_id}>
                    <Checkbox checked={playList.indexOf(play.play_name) > -1} />
                    <ListItemText primary={play.play_name} />
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
        <Box>
          <Button onClick ={handleSubmit}>Submit</Button>
          <Button onClick={()=> setFormOpen(false)}>Cancel</Button>
        </Box>
      </Box>
    </Paper>
      );
    }


export default CategoriesForm;