import Track from './Track';
import classes from './TrackList.module.css';
import { useSelector } from 'react-redux';

interface SelectorState {
  tracks: any[];
}

const TrackList = (props: any) => {
  const tracks = useSelector((state: SelectorState) => state.tracks);

  return (
    <div className={classes.tracklist}>
      {tracks.map((track, index) => (
        <Track key={index} uri={track.track.uri} name={track.track.name} album={track.track.album} artists={track.track.artists} add={false}/>
      ))}
    </div>
  );
};

export default TrackList;
