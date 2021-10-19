import PlaylistSelector from "./PlaylistSelector/PlaylistSelector";
import TrackList from "./Tracks/TrackList";
import classes from './Dashboard.module.css'
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CreatePlaylistForm from "./CreateOrEditPlaylist/CreatePlaylistForm";
import EditPlaylistForm from "./CreateOrEditPlaylist/EditPlaylistForm";
import Button from "./UI/Button";
import React from "react";
import SearchTrack from "./SearchTracks/SearchTracks";


const Dashboard = (props: any) => {
    const dispatch = useDispatch();
    const current = useSelector((state: any) => state.playlists.current);
    const create = useSelector((state: any) => state.ui.create);
    const edit = useSelector((state: any) => state.ui.edit);
    const search = useSelector((state: any) => state.ui.search);
    const dark = useSelector((state: any) => state.ui.dark);

    const createHandler = () => {
        dispatch({type: 'setCreate'})
    }

    const editHandler = () => {
        dispatch({type: 'setEdit'})
    }

    const searchHandler = () => {
        dispatch({type: 'setSearch'})
    }

    const darkHandler = () => {
        dispatch({type: 'setDark'})
    }

    return <div className={classes.dashboard}>
        {create && <CreatePlaylistForm />}
        {edit && <EditPlaylistForm />}
        {search && <SearchTrack />}
        <header className={!dark ? classes.header : `${classes.header} ${classes.dark}`}>
            <h1 className={classes.title}>Mini-Spotify</h1>
            <div className={classes.dark_button} onClick={darkHandler}>Dark Mode</div>
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