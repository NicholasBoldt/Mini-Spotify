import classes from "./PlaylistSelector.module.css";
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import React from "react";

interface SelectorState {
  playlists: any[]
  current: any
  access_token: string
}


const PlaylistSelector = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state: SelectorState) => state.playlists);
  const current = useSelector((state: SelectorState) => state.current);
  const access_token = useSelector((state: SelectorState) => state.access_token);
  console.log(playlists)

  const selected = {value: current.id, label: current.name}

    const handleChange = (selected: any) => {
      const data = {access_token, id: selected.value}
      dispatch({ type: 'PLAYLIST_FETCH_REQUESTED', payload: data })
    }

    const options: Array<any> = playlists.map((playlist) => (
        {value: playlist.id, label: playlist.name}
    ))
  

  return (
    <div>
        <Select
        className={classes.selector}
        value={selected}
        onChange={handleChange}
        options={options}
      />
    </div>
    
    // <form>
    //   <label>
    //     Select a Playlist:
    //     <select onChange={handleChange}>
    //         {props.playlists.map((playlist) => (
    //              <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
    //         ))}
    //     </select>
    //   </label>
     
    // </form>
  );
};

export default PlaylistSelector;
