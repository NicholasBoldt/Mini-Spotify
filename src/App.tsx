import React, { useEffect } from 'react';
import { getAuthURL } from './auth/spotifyAuth';
import Dash from './components/Dashboard';
import classes from './App.module.css';
import {useDispatch, useSelector } from 'react-redux';
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

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

  const darkHandler = () => {
    dispatch({ type: "setDark" });
  };


  return (
    <div className={!dark ? classes.app : `${classes.app} ${classes.dark}`}>
      {access_token && <header className={!dark ? classes.header : `${classes.header} ${classes.dark}`}>
        <h1 className={classes.title}>Mini-Spotify</h1>
        <div className={classes.dark_button} onClick={darkHandler}>
          {!dark ? <BsFillMoonFill /> : <BsFillSunFill />}
        </div>
      </header>}
      {access_token && <Dash />}
      {!access_token && <h1 className={classes.opener}>Mini-Spotify</h1>}
      {!access_token && <a className={classes.authorize} href={authURL}>Authorise Spotify</a>}
    </div>
  );
}



export default App;
