import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import CategoriesForm from '../components/CategoriesForm.jsx';
import Button from '@mui/material/Button';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const Categories = () => {
  const[formOpen, setFormOpen] = useState(false);

  return (
      <Container>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}} mt={5}>
          {formOpen ? <CategoriesForm setFormOpen ={setFormOpen}/> :
          <Box>
            <Tooltip title="Add Category">
              <IconButton onClick={()=>{setFormOpen(true)}} size={'large'}>
                <AddCircleSharpIcon/>
              </IconButton>
            </Tooltip>
          </Box>
          }
        </Box>
      </Container>
      );
    }


export default Categories;