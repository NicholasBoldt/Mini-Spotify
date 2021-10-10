import React, { useEffect } from 'react';
import logo from './logo.svg';
import { getAuthURL } from './auth/spotifyAuth';
import axios from 'axios'


import './App.css';

function App() {
  const authURL = getAuthURL();

  return (
    <div className="App">
     <div><a href={authURL}>Authorise Spotify</a></div>
    </div>
  );
}

export default App;
