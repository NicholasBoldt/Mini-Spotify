import React from "react";
import Track from "./Track";
import classes from "./TrackList.module.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button";
import { rootState } from "../../redux/reducers";

const TrackList = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state: rootState) => state.ui.dark);
  const tracks = useSelector((state: rootState) => state.playlists.tracks);

  const onSortTitleHandler = () => {
    function sortTitle(a: any, b: any) {
      if (a.track.name < b.track.name) {
        return -1;
      }
      if (a.track.name > b.track.name) {
        return 1;
      }
      return 0;
    }
    const sortedTracks = [...tracks];
    sortedTracks.sort(sortTitle);
    dispatch({ type: "setTracks", payload: sortedTracks });
  };

  const onSortAlbumHandler = () => {
    function sortAlbum(a: any, b: any) {
      if (a.track.album.name < b.track.album.name) {
        return -1;
      }
      if (a.track.album.name > b.track.album.name) {
        return 1;
      }
      return 0;
    }
    const sortedTracks = [...tracks];
    sortedTracks.sort(sortAlbum);
    dispatch({ type: "setTracks", payload: sortedTracks });
  };

  const onSortIndexHandler = () => {
    function sortIndex(a: any, b: any) {
      if (a.added_at < b.added_at) {
        return -1;
      }
      if (a.added_at > b.added_at) {
        return 1;
      }
      return 0;
    }
    const sortedTracks = [...tracks];
    sortedTracks.sort(sortIndex);
    dispatch({ type: "setTracks", payload: sortedTracks });
  };

  const onSortReleaseHandler = () => {
    function sortRelease(a: any, b: any) {
      if (a.track.album.release_date < b.track.album.release_date) {
        return -1;
      }
      if (a.track.album.release_date > b.track.album.release_date) {
        return 1;
      }
      return 0;
    }
    const sortedTracks = [...tracks];
    sortedTracks.sort(sortRelease);
    dispatch({ type: "setTracks", payload: sortedTracks });
  };

  const onSortTimeHandler = () => {
    function sortTime(a: any, b: any) {
      if (a.track.duration_ms < b.track.duration_ms) {
        return -1;
      }
      if (a.track.duration_ms > b.track.duration_ms) {
        return 1;
      }
      return 0;
    }
    const sortedTracks = [...tracks];
    sortedTracks.sort(sortTime);
    dispatch({ type: "setTracks", payload: sortedTracks });
  };

  return (
    <table className={classes.tracklist}>
      <tr className={dark ? classes.dark : ""}>
        <th>
          <Button
            className={!dark ? "selector" : "selector_dark"}
            onClick={onSortIndexHandler}
          >
            #
          </Button>
        </th>
        <th></th>
        <th align="left">
          <Button
            className={!dark ? "selector" : "selector_dark"}
            onClick={onSortTitleHandler}
          >
            Title
          </Button>
        </th>
        <th>
          <Button
            className={!dark ? "selector" : "selector_dark"}
            onClick={onSortAlbumHandler}
          >
            Album
          </Button>
        </th>
        <th>
          <Button
            className={!dark ? "selector" : "selector_dark"}
            onClick={onSortIndexHandler}
          >
            Added
          </Button>
        </th>
        <th>
          <Button
            className={!dark ? "selector" : "selector_dark"}
            onClick={onSortReleaseHandler}
          >
            Release
          </Button>
        </th>
        <th>
          <Button
            className={!dark ? "selector" : "selector_dark"}
            onClick={onSortTimeHandler}
          >
            Time
          </Button>
        </th>
        <th></th>
      </tr>
      {tracks.map((track: any, index: any) => (
        <Track
          key={index}
          index={index}
          uri={track.track.uri}
          added={track.added_at}
          name={track.track.name}
          album={track.track.album}
          artists={track.track.artists}
          time={track.track.duration_ms}
          add={false}
          search={false}
        />
      ))}
    </table>
  );
};

export default TrackList;
