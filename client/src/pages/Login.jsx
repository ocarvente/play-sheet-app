import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')


  const navigate = useNavigate()

  const onButtonClick = async() => {
    setEmailError('')
    setPasswordError('')

    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }

    if (await accountExists(email)) {
      logIn();
    } else if (
      window.confirm(
        'An account does not exist with this email address: ' + email + '. Do you want to create a new account?',
      )
    ) {
      logIn();
      }
  }

  const accountExists = async(email) => {
    try {
      const body = {'email': email};
      const response = await axios.post('/check-auth', body);
      console.log(response.data);
      return response.data.userExists;

    } catch(e) {
      console.error('something went wrong when sending data to check-auth endpoint, ', e);
    }

  }

  const logIn = async () => {
    try {

      const response = await axios.post('/auth', {email, password});
      console.log(response.data);
      if ('success' === response.data.message) {
        localStorage.setItem('user', JSON.stringify({ email, token: response.data.token }))
        props.setLoggedIn(true)
        props.setEmail(email)
        navigate('/')
      } else {
        window.alert('Wrong email or password')
      }

    } catch(e) {
      console.error('something went wrong when sending data to check-auth endpoint, ', e);
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          type ='password'
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}
export default Login;