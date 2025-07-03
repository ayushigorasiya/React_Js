import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { getauth, googleauthprovider } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleLogin = async() => {
    alert(`login successfully....!`)
 
      navigate('/todo')
    try{
      let user = await signInWithPopup(getauth, googleauthprovider)
      console.log(user);
    }catch(err){
      console.log(err);
      return false
    }
  }
  return (
    <div align="center">
      <h2>Google Authentication</h2>

      <button onClick={() => handleLogin()}>Google</button>
    </div>
  )
}

export default Login
