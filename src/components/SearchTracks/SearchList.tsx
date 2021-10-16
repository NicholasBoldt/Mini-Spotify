import Track from "../Tracks/Track";
import classes from "./SearchList.module.css";
import Button from "../UI/Button";

const SearchList = (props: any) => {
  return (
      <div></div>
    // <div className={classes.tracklist}>
    //   {props.results &&
    //     props.results.tracks.items.map((track: any, index: number) => (
    //       <Track
    //         key={index}
    //         index={index}
    //         uri={track.uri}
    //         name={track.name}
    //         album={track.album}
    //         artists={track.artists}
    //         add={true}
    //         added={track.added}
    //       />
    //     ))}
    // </div>
  );
};

export default SearchList;
