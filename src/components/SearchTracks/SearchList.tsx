import React from 'react'
import Track from "../Tracks/Track";
import classes from "./SearchList.module.css";

type SearchListProps = {
    results: any
}

const SearchList = (props: SearchListProps) => {
  return (
    <table className={classes.tracklist}>
      {props.results &&
        props.results.tracks.items.map((track: any, index: any) => (
          <Track
            key={index}
            index={index}
            uri={track.uri}
            added={""}
            name={track.name}
            album={track.album}
            artists={track.artists}
            time={track.duration_ms}
            add={true}
            search={true}
          />
        ))}
    </table>
  );
};

export default SearchList;
