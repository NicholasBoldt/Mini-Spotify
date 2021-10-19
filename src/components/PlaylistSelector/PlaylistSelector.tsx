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
  const playlists = useSelector((state: any) => state.playlists.playlists);
  const current = useSelector((state: any) => state.playlists.current);
  const access_token = useSelector((state: any) => state.playlists.access_token);
  const dark = useSelector((state: any) => state.ui.dark);


  const selected = {value: current.id, label: current.name}

    const handleChange = (selected: any) => {
      const data = {access_token, id: selected.value}
      dispatch({ type: 'PLAYLIST_FETCH_REQUESTED', payload: data })
    }

    const options: Array<any> = playlists.map((playlist: any) => (
        {value: playlist.id, label: playlist.name}
    ))
  

  return (
    <div>
        <Select
        className={!dark ? classes.selector : `${classes.selector} ${classes.dark}`}
        value={selected}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default PlaylistSelector;
