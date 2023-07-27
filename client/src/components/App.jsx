import {useState, useEffect} from 'react';
import axios from 'axios';
import AllPlays from '../pages/AllPlays.jsx';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import RandomPlay from '../pages/RandomPlay.jsx';
import Main from '../pages/Main.jsx';
import PlayPage from '../pages/PlayPage.jsx';
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/allplays" element={<AllPlays/>}/>
        <Route path="/play/:id" element={<PlayPage/>}/>
        <Route path="/random" element={<RandomPlay />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;