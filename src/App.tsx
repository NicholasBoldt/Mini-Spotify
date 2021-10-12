import React, { useState, useEffect } from 'react';
import { getAuthURL } from './auth/spotifyAuth';
import Dash from './components/Dash';
import { getPlaylists, getPlaylist } from './utiles/spotifyAPI';
import classes from './App.module.css';
import PlaylistForm from './components/PlaylistForm/PlaylistForm';
import TrackList from './components/Tracks/TrackList';
import {useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  // const [playlists, setPlaylists] = useState([] as any[]);
  const [currentPlaylist, setCurrentPlaylist] = useState<any>({});
  const [tracks, setTracks] = useState([] as any[]);


  const authURL = getAuthURL();
  const responseURL = window.location.href
  const access_token = searchCode('access_token', responseURL)


  console.log(access_token)

  const changePlaylistHandler = async (id: string) => {
    if(access_token) {
      const playlistData = await getPlaylist(access_token, id);
      setCurrentPlaylist(playlistData)
      setTracks(playlistData.tracks.items);
    }
   
  }

  useEffect(() => {
    if(access_token) {
      const fetchData = async () => {
        const playlistsData = await getPlaylists(access_token)
        dispatch({ type: 'setPlaylists' , payload: playlistsData})
        // setPlaylists(playlistsData);
        // setCurrentPlaylist(playlistData[0]);
        const playlistData = await getPlaylist(access_token, playlistsData[0].id);
        setCurrentPlaylist(playlistData)
        setTracks(playlistData.tracks.items);

      }
      fetchData();
 
    }


  }, [])

 

  

  




  // const playlists : Promise < any[] > = d;


  return (
    <div className={classes.app}>
      {/* {access_token && <Dash />} */}
      {!access_token && <a className={classes.authorize} href={authURL}>Authorise Spotify</a>}
      {access_token && <PlaylistForm current={currentPlaylist} onSubmit={changePlaylistHandler}/> }
      {tracks && <TrackList tracks={tracks} />}
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
