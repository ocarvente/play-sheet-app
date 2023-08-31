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
        <Route path="/" element={<Main/>}/>
        <Route path="/allplays" element={<AllPlays/>}/>
        <Route path="/play/:id" element={<PlayPage/>}/>
        <Route path="/random" element={<RandomPlay />}/>
        <Route path="/create" element={<CreatePlay />}/>
        <Route path="/edit/:id" element={<EditPlay />}/>
        <Route path="/categories" element={<CategoriesPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;