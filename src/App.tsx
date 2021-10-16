import React, { useState, useEffect } from 'react';
import { getAuthURL } from './auth/spotifyAuth';
import Dash from './components/Dashboard';
import { getPlaylists, getPlaylist, getUser, createPlaylist, editPlaylist, searchTracks, addTracks } from './utiles/spotifyAPI';
import classes from './App.module.css';
import {useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.userId);
  const current = useSelector((state: any) => state.current);

  const authURL = getAuthURL();
  const responseURL = window.location.href
  const access_token = searchCode('access_token', responseURL)
  dispatch({type: "setAccessCode", payload: access_token})

  console.log(access_token)

  const createPlaylistHandler = async (submitData: any) => {
    if(access_token) {
      await createPlaylist(access_token, userId, submitData)
      dispatch({type:'PLAYLISTS_FETCH_REQUESTED', payload: access_token})
    }
  }

  const editPlaylistHandler = async (submitData: any) => {
    if(access_token) {
      await editPlaylist(access_token, current.id, submitData)
      dispatch({type:'PLAYLISTS_FETCH_REQUESTED', payload: access_token})
    }
  }

  const addNewTrackHandler = async (trackURI: any) => {
    if(access_token) {
      console.log('worked')
      await addTracks(access_token, current.id, trackURI)
      dispatch({type:'PLAYLISTS_FETCH_REQUESTED', payload: access_token})
    }
  }

  // const fetchData = async () => {
  //   if(access_token) {
  //     // const playlistsData = await getPlaylists(access_token)
  //     // dispatch({ type: 'setPlaylists' , payload: playlistsData})
  //     // const playlistData = await getPlaylist(access_token, playlistsData[0].id);
  //     // dispatch({ type: 'setCurrent', payload: playlistData})
  //     // dispatch({ type: 'setTracks', payload: playlistData.tracks.items})
  //     const userData = await getUser(access_token);
  //     dispatch({ type: 'setUserId', payload: userData.id})
  //   }
  // }


  useEffect(() => {
    if(access_token) {
      dispatch({type:'PLAYLISTS_FETCH_REQUESTED', payload: access_token})
      // fetchData();
    }
  }, [])


  return (
    <div className={classes.app}>
      {access_token && <Dash onSubmitNewTrack={addNewTrackHandler} createPlaylistHandler={createPlaylistHandler} editPlaylistHandler={editPlaylistHandler}/>}
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
