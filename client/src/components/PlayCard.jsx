import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
const PlayCard = ({play}) => {
  return (

      <Grid item xs={4}>
        <Link to={`/play/${play.play_id}`}>
          <Paper>
            <Typography>{play.play_name}</Typography>
            <img src ={play.play_url_photo} width={250}/>
          </Paper>

        </Link>
      </Grid>

  )
}
export default PlayCard;