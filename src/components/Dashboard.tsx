import PlaylistForm from "./PlaylistForm/PlaylistForm";
import TrackList from "./Tracks/TrackList";
import classes from './Dashboard.module.css'
import { useSelector } from "react-redux";


const Dashboard = (props: any) => {
    const current = useSelector((state: any) => state.current);

    return <div className={classes.dashboard}>
        <div className={classes.options}>
            <PlaylistForm onSubmit={props.changePlaylistHandler}/> 
            <div>{current.description}</div>
            <button className={classes.create_playlist_button}>Create Playlist</button>
        </div>
        <TrackList />
         
    </div>
}

export default Dashboard; 