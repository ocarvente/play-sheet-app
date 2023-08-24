import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link, useNavigate} from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import axios from 'axios';

const PlayCard = ({play, fetch}) => {
  const navigate = useNavigate();
  const handleEdit = () => {

    navigate('/create', { state: {play} });
    console.log('clicked');
  };

  return (
      <Grid item xs={4}>
        <Paper>
          <Box sx={{display: 'flex', flexDirection: 'row' , alignItems: 'center',  justifyContent:'space-between', margin: 2}}>
            <Link to={`/play/${play.play_id}`}>
              <Typography>{play.play_name}</Typography>
            </Link>
            <Tooltip title="Edit">
              <IconButton onClick ={handleEdit}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick ={handleClick}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <img src ={play.play_url_photo} width={250}/>
        </Paper>
      </Grid>

  )
}
export default PlayCard;