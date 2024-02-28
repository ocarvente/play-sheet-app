import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'

const HomePage = ({loggedIn, email}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/login`);

  }
  return (
    <Container
      sx={{display: "flex",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"50vh"}}
    >
      <Box>
        <Typography>Welcome!</Typography>
        <Typography>This is the home page. </Typography>
        <Button
          variant='contained'
          onClick={handleClick}
          >{loggedIn? 'Log Out': 'Log In'}</Button>
        <Box>
          <Typography>{loggedIn ? `your email is ${emai}`: '' }</Typography>
        </Box>
      </Box>
    </Container>



  )
}

export default HomePage;