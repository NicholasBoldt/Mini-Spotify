import PlaylistForm from "./PlaylistForm/PlaylistForm";
import TrackList from "./Tracks/TrackList";
import classes from './Dashboard.module.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import CreatePlaylistForm from "./CreatePlaylist/CreatePlaylistForm";


const Dashboard = (props: any) => {
    const current = useSelector((state: any) => state.current);
    const [create, setCreate] = useState(false);

    const createHandler = () => {
        setCreate(true);
    }

    const confirmHandler = () => {
        setCreate(false);
    }


    return <div className={classes.dashboard}>
        {create && <CreatePlaylistForm onConfirm={confirmHandler}/>}
        <div className={classes.options}>
            <PlaylistForm onSubmit={props.changePlaylistHandler}/> 
            <div>{current.description}</div>
            <button className={classes.create_playlist_button} onClick={createHandler}>Create Playlist</button>
        </div>
        <TrackList />
         
    </div>
}

export default Dashboard; 