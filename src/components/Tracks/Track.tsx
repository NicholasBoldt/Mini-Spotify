import classes from './Track.module.css';


interface Track {
    name: string;
    album: any;
    artists: any[];
  }


const Track = (props:Track) => {
    return <div className={classes.track}>
        <img className={classes.cover} src={props.album.images[0].url} alt='Cover Photo' />
        <div>
            <div>{props.name}</div>
            <div>{props.artists[0].name}</div>
        </div>
        <div>{props.album.name}</div>
        <div className={classes.release}>{props.album.release_date}</div>
    </div>
}

export default Track;