import React from "react";
import Track from "../Tracks/Track";
import classes from "./SearchList.module.css";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/reducers";

type SearchListProps = {
  results: any;
};

const SearchList = (props: SearchListProps) => {
  const dark = useSelector((state: rootState) => state.ui.dark);

  return (
    <table className={!dark ? classes.tracklist : `${classes.tracklist} ${classes.dark}`}>
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
