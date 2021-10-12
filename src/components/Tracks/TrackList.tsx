import Track from './Track';
import classes from './TrackList.module.css';
import { useSelector } from 'react-redux';

interface SelectorState {
  tracks: any[];
}

const TrackList = () => {
  const tracks = useSelector((state: SelectorState) => state.tracks);

  return (
    <div className={classes.tracklist}>
      {tracks.map((track) => (
        <Track key={track.track.id} name={track.track.name} album={track.track.album} artists={track.track.artists}/>
      ))}
    </div>
  );
};

export default TrackList;
