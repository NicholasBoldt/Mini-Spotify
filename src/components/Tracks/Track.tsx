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

    return <tr className={classes.track}>
        <td><img className={classes.cover} src={props.album.images[0].url} alt='Cover Photo' /></td>
        <td>
            <div>{props.name}</div>
            <div>{props.artists[0].name}</div>
        </td>
        <td>{props.album.name}</td>
        <td className={classes.release}>{props.album.release_date}</td>
        {props.add && <Button onClick={addToPlaylistHandler}>Add</Button>}
        {!props.add && <Button className='remove' onClick={removeFromPlaylistHandler}>Remove</Button>}
    </tr>
}

export default Track;