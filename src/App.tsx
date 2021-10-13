import React, { useState, useEffect } from 'react';
import { getAuthURL } from './auth/spotifyAuth';
import Dash from './components/Dashboard';
import { getPlaylists, getPlaylist, getUser, createPlaylist } from './utiles/spotifyAPI';
import classes from './App.module.css';
import PlaylistForm from './components/PlaylistForm/PlaylistForm';
import TrackList from './components/Tracks/TrackList';
import {useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  // const userId = useSelector((state: any) => state.userId)

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

  // const createPlaylistHandler = async () =>{
  //   if(access_token) {
  //     await createPlaylist(access_token, userId, {
  //       "name": "New Playlist",
  //     "description": "New playlist description",
  //       "public": false
  //     })
  //   }
   
  // }


  return (
    <div className={classes.app}>
      {access_token && <Dash changePlaylistHandler={changePlaylistHandler}/>}
      {!access_token && <a className={classes.authorize} href={authURL}>Authorise Spotify</a>}
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
