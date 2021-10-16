import classes from './Track.module.css';
import Button from '../UI/Button';
import { useSelector, useDispatch } from 'react-redux';
import { removeTracks } from '../../utiles/spotifyAPI';


interface Track {
    name: string;
    album: any;
    artists: any[];
    add: boolean;
    uri: string
  }


const Track = (props:Track) => {
    const dispatch = useDispatch();
    const access_token = useSelector((state: any) => state.access_token)
    const current = useSelector((state: any) => state.current)

    const addToPlaylistHandler = () => {
        const data = {access_token, id: current.id, trackURI: props.uri}
        dispatch({type:'ADD_FETCH_REQUESTED', payload: data})
    }

    const removeFromPlaylistHandler = () => {
        const data = {access_token, id: current.id, trackURI: props.uri}
        dispatch({type:'REMOVE_FETCH_REQUESTED', payload: data})
    }

    return <div className={classes.track}>
        <img className={classes.cover} src={props.album.images[0].url} alt='Cover Photo' />
        <div>
            <div>{props.name}</div>
            <div>{props.artists[0].name}</div>
        </div>
        <div>{props.album.name}</div>
        <div className={classes.release}>{props.album.release_date}</div>
        {props.add && <Button onClick={addToPlaylistHandler}>Add</Button>}
        {!props.add && <Button onClick={removeFromPlaylistHandler}>Remove</Button>}
    
    </div>
}

export default Track;