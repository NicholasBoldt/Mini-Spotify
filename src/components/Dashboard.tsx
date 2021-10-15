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
    const current = useSelector((state: any) => state.current);
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
        {create && <CreatePlaylistForm onConfirm={confirmHandler} onSubmitPlaylist={props.createPlaylistHandler}/>}
        {edit && <EditPlaylistForm onConfirm={confirmHandler} onSubmitPlaylist={props.editPlaylistHandler}/>}
        {search && <SearchTrack  onSubmitNewTrack={props.onSubmitNewTrack} onConfirm={confirmHandler}/>}
        <div className={classes.options}>
            <Button onClick={searchHandler}>Search</Button>
            <Button onClick={editHandler}>Edit</Button>
            <PlaylistSelector onSubmit={props.changePlaylistHandler}/> 
            <div className={classes.description}>{current.description}</div>
            <Button onClick={createHandler}>Create Playlist</Button>
        </div>
        <TrackList  onSubmitNewTrack={props.onSubmitNewTrack}/>
         
    </div>
}

export default Dashboard; 