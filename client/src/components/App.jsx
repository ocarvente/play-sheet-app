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


  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    // If the token/email does not exist, mark the user as logged out
    if(!user || !user.token) {
      setLoggedIn(false);
      return;
    }

    const verifyToken = async () => {
      const result = await axios.post('/verify', {headers: {
        'jwt-token': user.token
      }})
      return result;
    }

    verifyToken().then(r => {
      console.log('this is the result from useEffect, ', r.data.message);
      setLoggedIn('success' === r.data.message);
      setEmail(user.email || '');

    }).catch(e => console.error(e));

  }, [])

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