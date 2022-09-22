import React from 'react'
import "./Login.css";
import {loginUrl} from "./spotify.js";
function Login() {
  return (
    <div className='login'>
        
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2022/03/Spotify_Logo_RGB_White-1.png' alt='spotify'/>
        
        <a href= {loginUrl}  >LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login