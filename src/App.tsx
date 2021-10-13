import React, { useState, useEffect } from 'react';
import { getAuthURL } from './auth/spotifyAuth';
import Dash from './components/Dash';
import { getPlaylists, getPlaylist, getUser } from './utiles/spotifyAPI';
import classes from './App.module.css';
import PlaylistForm from './components/PlaylistForm/PlaylistForm';
import TrackList from './components/Tracks/TrackList';
import {useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  const authURL = getAuthURL();
  const responseURL = window.location.href
  const access_token = searchCode('access_token', responseURL)

  console.log(access_token)

  const changePlaylistHandler = async (id: string) => {
    if(access_token) {
      const playlistData = await getPlaylist(access_token, id);
      dispatch({ type: 'setCurrent', payload: playlistData})
      dispatch({ type: 'setTracks', payload: playlistData.tracks.items})
    }
   
  }

  useEffect(() => {
    if(access_token) {
      const fetchData = async () => {
        const playlistsData = await getPlaylists(access_token)
        dispatch({ type: 'setPlaylists' , payload: playlistsData})
        const playlistData = await getPlaylist(access_token, playlistsData[0].id);
        dispatch({ type: 'setCurrent', payload: playlistData})
        dispatch({ type: 'setTracks', payload: playlistData.tracks.items})
        const userData = await getUser(access_token);
        dispatch({ type: 'setUserId', payload: userData.id})
      }
      fetchData();
    }
  }, [])

  return (
    <div className={classes.app}>
      {/* {access_token && <Dash />} */}
      {!access_token && <a className={classes.authorize} href={authURL}>Authorise Spotify</a>}
      {access_token && <PlaylistForm onSubmit={changePlaylistHandler}/> }
      {access_token && <TrackList />}
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
