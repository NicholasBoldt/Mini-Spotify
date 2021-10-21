import PlaylistSelector from "./PlaylistSelector/PlaylistSelector";
import TrackList from "./Tracks/TrackList";
import classes from "./Dashboard.module.css";
import { useSelector, useDispatch } from "react-redux";
import CreatePlaylistForm from "./CreateOrEditPlaylist/CreatePlaylistForm";
import EditPlaylistForm from "./CreateOrEditPlaylist/EditPlaylistForm";
import Button from "./UI/Button";
import React from "react";
import SearchTrack from "./SearchTracks/SearchTracks";
import { rootState } from "../redux/reducers";

const Dashboard = () => {
  const dispatch = useDispatch();
  const current = useSelector((state: rootState) => state.playlists.current);
  const create = useSelector((state: rootState) => state.ui.create);
  const edit = useSelector((state: rootState) => state.ui.edit);
  const search = useSelector((state: rootState) => state.ui.search);
  const dark = useSelector((state: rootState) => state.ui.dark);

  const createHandler = () => {
    dispatch({ type: "setCreate" });
  };

  const editHandler = () => {
    dispatch({ type: "setEdit" });
  };

  const searchHandler = () => {
    dispatch({ type: "setSearch" });
  };

  return (
    <div className={classes.dashboard}>
      {create && <CreatePlaylistForm />}
      {edit && <EditPlaylistForm />}
      {search && <SearchTrack />}
      <div className={classes.options}>
        <div>
          <Button onClick={searchHandler}>Search for Tracks</Button>
          <Button onClick={createHandler}>Create Playlist</Button>
        </div>
        <div>
          <PlaylistSelector />
          <div className={classes.description}>{current.description}</div>
          <Button onClick={editHandler}>Edit Playlist</Button>
        </div>
      </div>
      <TrackList />
    </div>
  );
};

export default Dashboard;
