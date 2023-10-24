import {useState, useEffect} from 'react';
import axios from 'axios';
import AllPlays from '../pages/AllPlays.jsx';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import RandomPlay from '../pages/RandomPlay.jsx';
import Main from '../pages/Main.jsx';
import PlayPage from '../pages/PlayPage.jsx';
import CreatePlay from '../pages/CreatePlay.jsx';
import EditPlay from '../pages/EditPlay.jsx';
import PagesAppBar from './PagesAppBar.jsx'
import CategoriesPage from '../pages/Categories.jsx';

const App = () => {

  return (
    <BrowserRouter>
      <PagesAppBar/>
      <Routes>
        <Route path="https://playsheet-service.onrender.com/" element={<Main/>}/>
        <Route path="https://playsheet-service.onrender.com/allplays" element={<AllPlays/>}/>
        <Route path="https://playsheet-service.onrender.com/play/:id" element={<PlayPage/>}/>
        <Route path="https://playsheet-service.onrender.com/random" element={<RandomPlay />}/>
        <Route path="https://playsheet-service.onrender.com/create" element={<CreatePlay />}/>
        <Route path="https://playsheet-service.onrender.com/edit/:id" element={<EditPlay />}/>
        <Route path="https://playsheet-service.onrender.com/categories" element={<CategoriesPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;