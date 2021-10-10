import React from 'react';
import { getAuthURL } from './auth/spotifyAuth';




import './App.css';

function App() {
  const authURL = getAuthURL();
  const responseURL = window.location.href
  

  const access_token = searchCode('access_token', responseURL)
  const token_type = searchCode('token_type', responseURL)
  const expires_in = searchCode('expires_in', responseURL)
  const state = searchCode('state', responseURL)

  console.log(access_token)
  console.log(token_type)
  console.log(expires_in)
  console.log(state)

  return (
    <div className="App">
      <a href={authURL}>Authorise Spotify</a>
      {/* <p>{code ? code  : 'No code'}</p> */}
    </div>
  );
}

export const searchCode = (name : string, url = '') => {
  const results = new RegExp("[#&]" + name + "=([^&#]*)").exec(
    url || window.location.href
  );

  if (results == null) {
    return null;
  } else {
    return results[1];
  }
};

export default App;
