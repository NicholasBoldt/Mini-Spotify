import React, { useState } from 'react';
import { getAuthURL } from './auth/spotifyAuth';
import Dash from './components/Dash';
import axios from 'axios';

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

  const getPlaylists = async () => {
    const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Authorization': 'Bearer ' + access_token
    }})
    const data: any = response.data;
    console.log(data.items);
  }


  const getTracks = async () => {
    const response = await axios.get('https://api.spotify.com/v1/playlists/' + '37i9dQZF1DWYoDXiQsd3D2', {
    headers: {
      'Authorization': 'Bearer ' + access_token
    }})
    const data: any = response.data;
    setTracks(data.tracks.items)
    console.log(data.tracks.items);
  }

  const getTracksHandler = () => {
    getTracks();

  }

 

  

  




  // const playlists : Promise < any[] > = d;


  return (
    <div className="App">
      {access_token && <Dash />}
      {!access_token && <a href={authURL}>Authorise Spotify</a>}
      <button onClick={getTracksHandler}>Get Tracks</button>
      <div>{tracks.map((track) => (
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
