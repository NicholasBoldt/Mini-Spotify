import PlaylistSelector from "./PlaylistSelector/PlaylistSelector";
import TrackList from "./Tracks/TrackList";
import classes from './Dashboard.module.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import CreatePlaylistForm from "./CreateOrEditPlaylist/CreatePlaylistForm";
import EditPlaylistForm from "./CreateOrEditPlaylist/EditPlaylistForm";
import Button from "./UI/Button";
import React from "react";


const Dashboard = (props: any) => {
    const current = useSelector((state: any) => state.current);
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);

    const createHandler = () => {
        setCreate(true);
    }

    const editHandler = () => {
        setEdit(true);
    }

    const confirmHandler = () => {
        setCreate(false);
        setEdit(false);
    }


    return <div className={classes.dashboard}>
        {create && <CreatePlaylistForm onConfirm={confirmHandler} onSubmitPlaylist={props.createPlaylistHandler}/>}
        {edit && <EditPlaylistForm onConfirm={confirmHandler} onSubmitPlaylist={props.editPlaylistHandler}/>}
        <div className={classes.options}>
            <Button onClick={editHandler}>Edit</Button>
            <PlaylistSelector onSubmit={props.changePlaylistHandler}/> 
            <div className={classes.description}>{current.description}</div>
            <Button onClick={createHandler}>Create Playlist</Button>
        </div>
        <TrackList />
         
    </div>
}

export default Dashboard; 