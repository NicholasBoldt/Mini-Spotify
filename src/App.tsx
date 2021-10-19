import React, { useEffect } from 'react';
import { getAuthURL } from './auth/spotifyAuth';
import Dash from './components/Dashboard';
import classes from './App.module.css';
import {useDispatch, useSelector } from 'react-redux';

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

function App() {
  const dispatch = useDispatch();
  const dark = useSelector((state: any) => state.ui.dark)

  const authURL = getAuthURL();
  const responseURL = window.location.href
  const access_token = searchCode('access_token', responseURL)
  dispatch({type: "setAccessToken", payload: access_token})

  useEffect(() => {
    if(access_token) {
      dispatch({type:'PLAYLISTS_FETCH_REQUESTED', payload: access_token})
    }
  }, [])


  return (
    <div className={!dark ? classes.app : `${classes.app} ${classes.dark}`}>
      {access_token && <Dash />}
      {!access_token && <h1 className={classes.title}>Mini-Spotify</h1>}
      {!access_token && <a className={classes.authorize} href={authURL}>Authorise Spotify</a>}
    </div>
  );
}



export default App;
