import Track from "../Tracks/Track";
import classes from "./SearchList.module.css";
import Button from "../UI/Button";

const SearchList = (props: any) => {
  return (
    <div className={classes.tracklist}>
      {props.results &&
        props.results.tracks.items.map((track: any, index: number) => (
          <Track
            key={index}
            uri={track.uri}
            name={track.name}
            album={track.album}
            artists={track.artists}
            add={true}
          />
        ))}
    </div>
  );
};

export default SearchList;
