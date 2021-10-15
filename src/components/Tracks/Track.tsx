import classes from './Track.module.css';
import Button from '../UI/Button';


interface Track {
    name: string;
    album: any;
    artists: any[];
    add: boolean;
    uri: string
    onSubmitNewTrack: any
  }


const Track = (props:Track) => {
    const addToPlaylistHandler = () => {
        props.onSubmitNewTrack(props.uri)
    }

    return <div className={classes.track}>
        <img className={classes.cover} src={props.album.images[0].url} alt='Cover Photo' />
        <div>
            <div>{props.name}</div>
            <div>{props.artists[0].name}</div>
        </div>
        <div>{props.album.name}</div>
        <div className={classes.release}>{props.album.release_date}</div>
        {props.add && <Button onClick={addToPlaylistHandler}>Add to Playlist</Button>}
    
    </div>
}

export default Track;