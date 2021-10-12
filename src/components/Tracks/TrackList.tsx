import Track from './Track';
import classes from './TrackList.module.css';

interface TrackList {
  tracks: any[];
}

const TrackList = (props: TrackList) => {
  return (
    <div className={classes.tracklist}>
      {props.tracks.map((track) => (
        <Track key={track.track.id} name={track.track.name} album={track.track.album} artists={track.track.artists}/>
      ))}
    </div>
  );
};

export default TrackList;
