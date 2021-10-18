import classes from './Track.module.css';
import Button from '../UI/Button';
import { useSelector, useDispatch } from 'react-redux';


interface Track {
    name: string;
    album: any;
    artists: any[];
    add: boolean;
    uri: string
    index: number
    added: string
    time: number
    search: boolean
  }


const Track = (props:Track) => {
    const dispatch = useDispatch();
    const access_token = useSelector((state: any) => state.playlists.access_token)
    const current = useSelector((state: any) => state.playlists.current)

    const addToPlaylistHandler = () => {
        const data = {access_token, id: current.id, trackURI: props.uri}
        dispatch({type:'ADD_FETCH_REQUESTED', payload: data})
    }

    const removeFromPlaylistHandler = () => {
        const data = {access_token, id: current.id, trackURI: props.uri}
        dispatch({type:'REMOVE_FETCH_REQUESTED', payload: data})
    }

    const time = millisToMinutesAndSeconds(props.time)

    return <tr className={classes.track}>
        <td>{props.index}</td>
        <td><img className={classes.cover} src={props.album.images[0].url} alt='Cover Photo' /></td>
        <td align='left'>
            <div className={classes.title}>{props.name}</div>
            <div>{props.artists[0].name}</div>
        </td>
        <td>{props.album.name}</td>
        {!props.search && <td>{props.added.substring(0, 10)}</td>}
        {!props.search && <td className={classes.release}>{props.album.release_date}</td>}
        {!props.search && <td>{time}</td>}
        <td> {props.add && <Button onClick={addToPlaylistHandler}>Add</Button>}
        {!props.add && <Button className='remove' onClick={removeFromPlaylistHandler}>Remove</Button>}</td>
     
    </tr>
}

function millisToMinutesAndSeconds(millis: number) {
    var minutes: number = Math.floor(millis / 60000);
    var seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

export default Track;