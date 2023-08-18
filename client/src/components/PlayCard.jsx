import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
const PlayCard = ({play}) => {
  return (

      <Grid item xs={4}>
        <Link to={`/play/${play.play_id}`}>
          <Paper>
            <Box sx={{display: 'flex', flexDirection: 'row' , alignItems: 'center',  justifyContent:'space-between',}}>
              <Typography>{play.play_name}</Typography>
              <Tooltip title="Delete">
                <IconButton>
                <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <img src ={play.play_url_photo} width={250}/>

          </Paper>
        </Link>
      </Grid>

  )
}
export default PlayCard;