import Track from "../Tracks/Track";
import classes from "./SearchList.module.css";
import Button from "../UI/Button";

const SearchList = (props: any) => {
  return (
    <div className={classes.tracklist}>
      {props.results &&
        props.results.tracks.items.map((track: any) => (
          <div>
            <Track
              key={track.id}
              uri={track.uri}
              name={track.name}
              album={track.album}
              artists={track.artists}
              add={true}
              onSubmitNewTrack={props.onSubmitNewTrack}
            />
            
          </div>
        ))}
    </div>
  );
};

export default SearchList;
