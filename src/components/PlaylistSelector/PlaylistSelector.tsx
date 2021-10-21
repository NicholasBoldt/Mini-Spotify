import classes from "./PlaylistSelector.module.css";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { rootState } from "../../redux/reducers";

const PlaylistSelector = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(
    (state: rootState) => state.playlists.playlists
  );
  const current = useSelector((state: rootState) => state.playlists.current);
  const access_token = useSelector(
    (state: rootState) => state.playlists.access_token
  );
  const dark = useSelector((state: rootState) => state.ui.dark);

  const selected = { value: current.id, label: current.name };

  const handleChange = (selected: any) => {
    const data = { access_token, id: selected.value };
    dispatch({ type: "PLAYLIST_FETCH_REQUESTED", payload: data });
  };

  const options: Array<any> = playlists.map((playlist: any) => ({
    value: playlist.id,
    label: playlist.name,
  }));

  return (
    <Select
      className={
        !dark ? classes.selector : `${classes.selector} ${classes.dark}`
      }
      value={selected}
      onChange={handleChange}
      options={options}
    />
  );
};

export default PlaylistSelector;
