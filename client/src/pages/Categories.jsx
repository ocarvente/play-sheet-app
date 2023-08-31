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
import CategoriesForm from '../components/CategoriesForm.jsx';

const Categories = () => {

  return (

      <div>
        <CategoriesForm />
      </div>
      );
    }


export default Categories;