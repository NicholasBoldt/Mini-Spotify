import classes from './TrackList.module.css';

interface TrackList {
  tracks: any[];
}

const TrackList = (props: TrackList) => {
  return (
    <div className={classes.tracklist}>
      {props.tracks.map((track) => (
        <li className={classes.track} key={track.track.id}>{track.track.name}</li>
      ))}
    </div>
  );
};

export default TrackList;
