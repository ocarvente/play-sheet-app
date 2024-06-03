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
import HomePage from '../pages/HomePage.jsx'
import Login from '../pages/Login.jsx';
const App = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [loggedIn, setLoggedIn] = useState(user ? true : false);
  const [email, setEmail] = useState(user ? user.email : '');
  return (
    <BrowserRouter>
      <PagesAppBar/>
      <Routes>
        <Route path="/" element={<HomePage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
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