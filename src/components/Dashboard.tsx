import PlaylistSelector from "./PlaylistSelector/PlaylistSelector";
import TrackList from "./Tracks/TrackList";
import classes from './Dashboard.module.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import CreatePlaylistForm from "./CreateOrEditPlaylist/CreatePlaylistForm";
import EditPlaylistForm from "./CreateOrEditPlaylist/EditPlaylistForm";
import Button from "./UI/Button";
import React from "react";
import SearchTrack from "./SearchTracks/SearchTracks";


const Dashboard = (props: any) => {
    const current = useSelector((state: any) => state.playlists.current);
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const [search, setSearch] = useState(false);

    const createHandler = () => {
        setCreate(true);
    }

    const editHandler = () => {
        setEdit(true);
    }

    const searchHandler = () => {
        setSearch(true);
    }

    const confirmHandler = () => {
        setCreate(false);
        setEdit(false);
        setSearch(false);
    }


    return <div className={classes.dashboard}>
        {create && <CreatePlaylistForm onConfirm={confirmHandler} />}
        {edit && <EditPlaylistForm onConfirm={confirmHandler} />}
        {search && <SearchTrack  onConfirm={confirmHandler}/>}
        <header className={classes.header}>
            <h1 className={classes.title}>Mini-Spotify</h1>
        </header>
        <div className={classes.options}>
            <Button onClick={searchHandler}>Search</Button>
            <Button onClick={editHandler}>Edit</Button>
            <PlaylistSelector/> 
            <div className={classes.description}>{current.description}</div>
            <Button onClick={createHandler}>Create Playlist</Button>
        </div>
        <TrackList  />
         
    </div>
}

export default Dashboard; 