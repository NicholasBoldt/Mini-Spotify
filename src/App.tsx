import React, { useState, useEffect } from 'react';
import { getAuthURL } from './auth/spotifyAuth';
import Dash from './components/Dash';
import { getPlaylists, getTracks } from './utiles/spotifyAPI';
import classes from './App.module.css';

function App() {
  const [playlists, setPlaylists] = useState([] as any[]);
  const [tracks, setTracks] = useState([] as any[]);


  const authURL = getAuthURL();
  const responseURL = window.location.href


  const access_token = searchCode('access_token', responseURL)
  const token_type = searchCode('token_type', responseURL)
  const expires_in = searchCode('expires_in', responseURL)
  const state = searchCode('state', responseURL)

  console.log(access_token)

  // const token = {
  //   access_token,
  //   token_type,
  //   expires_in,
  //   state,
  // }

  useEffect(() => {
    if(access_token) {
      getPlaylists(access_token).then(playlistData => setPlaylists(playlistData));
      getTracks(access_token, '37i9dQZF1DWYoDXiQsd3D2').then(trackData => setTracks(trackData));    
    }

  }, [])

 

  

  




  // const playlists : Promise < any[] > = d;


  return (
    <div className={classes.app}>
      {access_token && <Dash />}
      {!access_token && <a className={classes.authorize} href={authURL}>Authorise Spotify</a>}
      <div>{tracks && tracks.map((track) => (
         <li key={track.track.id}>{track.track.name}</li>
     
  ))}</div>
    </div>
  );
}

const searchCode = (name: string, url = '') => {
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
